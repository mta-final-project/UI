import { FC, SyntheticEvent, useState, useEffect } from "react";
import { Autocomplete, TextField, Button, Box } from "@mui/material";
import { IDriveFolder } from "../../types/files";
import { addCourseToFavorites, getFavorites, removeCourseFromFavorites } from "../../services/FilesService";
import { useLocation } from 'react-router-dom';
import { useSetSelectedCourseFolders } from "../../hooks/context/SelectedCourseFolder.tsx";
import useFolders from "../../hooks/query/useFolders.ts";

const CourseSearch: FC = () => {
    const { data: courses = [] } = useFolders();
    const setSelectedCourseFolders = useSetSelectedCourseFolders();
    const [selectedCourse, setSelectedCourseState] = useState<IDriveFolder | null>(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [favorites, setFavorites] = useState<string[]>([]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selectedCourseFromURL = searchParams.get('course');

    const fetchFavorites = async () => {
        try {
            const favoriteCourses = await getFavorites();
            setFavorites(favoriteCourses);
        } catch (error) {
            console.error("Failed to fetch favorite courses", error);
        }
    };

    useEffect(() => {
        fetchFavorites();
    }, []);

    useEffect(() => {
        if (selectedCourseFromURL) {
            const foundCourse = courses.find((course) => course.toString() === selectedCourseFromURL);
            if (foundCourse) {
                setSelectedCourseState(foundCourse);
                setSelectedCourseFolders(foundCourse);
            }
        }
    }, [courses, selectedCourseFromURL]);

    useEffect(() => {
        if (selectedCourse) {
            const isAlreadyFavorite = favorites.includes(selectedCourse.toString());
            setIsFavorite(isAlreadyFavorite);
        } else {
            setIsFavorite(false);
        }
    }, [selectedCourse, favorites]);

    const handleCourseChange = (_event: SyntheticEvent, newValue: IDriveFolder | null) => {
        setSelectedCourseState(newValue);
        setSelectedCourseFolders(newValue);
    };

    const toggleFavorite = async () => {
        if (selectedCourse) {
            try {
                const isAlreadyFavorite = favorites.includes(selectedCourse.toString());

                if (isAlreadyFavorite) {
                    await removeCourseFromFavorites(selectedCourse);
                    setFavorites(favorites.filter(course => course !== selectedCourse.toString()));
                    setIsFavorite(false);
                } else {
                    await addCourseToFavorites(selectedCourse);
                    setFavorites([...favorites, selectedCourse.toString()]);
                    setIsFavorite(true);
                }
            } catch (error) {
                console.error(isFavorite ? "Failed to remove course from favorites" : "Failed to add course to favorites", error);
            }
        } else {
            alert("Please select a course first.");
        }
    };

    return (
        <Box sx={{ direction: 'rtl', padding: '10px' }}>
            <Autocomplete
                options={courses}
                getOptionLabel={(option: IDriveFolder) => option?.toString() || ""}
                value={selectedCourse}
                onChange={handleCourseChange}
                sx={{
                    direction: 'rtl',
                    textAlign: 'right',
                    "& .MuiAutocomplete-inputRoot": { direction: 'rtl' },
                    "& .MuiAutocomplete-clearIndicator": { left: 'unset', right: '10px' },
                    "& .MuiAutocomplete-popupIndicator": { left: 'unset', right: '10px' }
                }}
                ListboxProps={{
                    sx: { textAlign: 'right', direction: 'rtl' }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="בחר קורס"
                        variant="outlined"
                        sx={{
                            textAlign: 'right', direction: 'rtl',
                            "& label": { right: 53, left: 'auto', transformOrigin: "top right" },
                            "& legend": { textAlign: 'right', marginRight: 3 }
                        }}
                    />
                )}
            />

            {selectedCourse !== null && (
                <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: isFavorite ? '#B0BEC5' : '#0A6BCB',
                            color: 'white',
                            '&:hover': { backgroundColor: isFavorite ? '#90A4AE' : '#084C99' }
                        }}
                        onClick={toggleFavorite}
                    >
                        {isFavorite ? "הסרה מהמועדפים" : "הוספה למועדפים"}
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default CourseSearch;