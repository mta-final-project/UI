import { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Divider } from '@mui/material';
import CourseElement from './CourseElement';
import { getFavorites, removeCourseFromFavorites } from "../../../services/FilesService";

const FavoriteCourses = ({ removeCourse }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [favoriteCourses, setFavoriteCourses] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favorites = await getFavorites();
        setFavoriteCourses(favorites);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch favorite courses", err);
        setError("Failed to load favorite courses");
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleRemoveCourse = async (course: string) => {
    try {
      await removeCourseFromFavorites(course);
      setFavoriteCourses(favoriteCourses.filter(favCourse => favCourse !== course));
    } catch (err) {
      console.error(`Failed to remove course ${course} from favorites`, err);
    }
  };

  return (
    <Grid item xs={12} md={4}>
      <Paper sx={{ margin: '30px', padding: '20px', borderRadius: '0px', border: '1px solid #FFFFFF', backgroundColor: '#1C273A', textAlign: 'right' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '18px', color: '#FFFFFF' }}>
          הקורסים המועדפים
        </Typography>
        <Divider sx={{ backgroundColor: '#C9D1D9', marginY: '10px' }} />
        
        {loading && <Typography sx={{ color: '#FFFFFF' }}>בטעינה...</Typography>}
        {error && <Typography sx={{ color: '#FF5722' }}>{error}</Typography>}
        
        {!loading && !error && favoriteCourses.length === 0 && (
          <Typography sx={{ color: '#FFFFFF' }}>אין קורסים מועדפים</Typography>
        )}

        {!loading && !error && favoriteCourses.length > 0 && favoriteCourses.map(course => (
          <CourseElement
            key={course}
            course={course}
            hovered={hovered}
            onHover={setHovered}
            removeCourse={() => handleRemoveCourse(course)}
          />
        ))}
      </Paper>
    </Grid>
  );
};

export default FavoriteCourses;
