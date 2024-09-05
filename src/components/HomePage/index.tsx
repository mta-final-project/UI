import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Divider from '@mui/material/Divider';

const HomePage: FC = () => {
  const initialCourses = [
    "סיבוכיות",
    "חישוביות",
    "מערכות הפעלה",
    "בסיסי נתונים",
    "אלגוריתמים",
    "למידה חישובית עם פייתון",
    "בדידה",
    "הסתברות"
  ];

  const [courses, setCourses] = useState<string[]>(initialCourses);
  const [hovered, setHovered] = useState<string | null>(null);

  const removeCourse = (course: string) => {
    setCourses(courses.filter((c) => c !== course));
  };

  return (
    <Box sx={{ backgroundColor: '#0A1929', minHeight: '100vh', color: '#C9D1D9', direction: 'rtl', padding: '0 20px' }}>
      {/* Header Section with white background */}
      <Box 
        sx={{ 
          backgroundColor: '#FFFFFF', 
          width: '100vw', 
          padding: '20px 0', 
          textAlign: 'center', 
          marginBottom: '40px', 
          marginLeft: '0',  // Ensure no margin on left
          marginRight: '0'  // Ensure no margin on right
        }}>
        <img src="icon.png" alt="Logo" style={{ width: '100px', marginBottom: '10px' }} />
        <Typography variant="h4" sx={{ fontSize: { xs: '18px', sm: '24px' }, color: '#0A1929', fontWeight: 'bold' }}>
          היי עומר, טוב שחזרת
        </Typography>
      </Box>

      <Grid container spacing={2} alignItems="flex-start" justifyContent="center">
        {/* Right Side - Options with Title */}
        <Grid item xs={12} md={8}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: { xs: '20px', sm: '24px' }, color: '#FFFFFF', textAlign: 'right', marginBottom: '50px' }}>
            איך נוכל לעזור לך היום?
          </Typography>
          <Grid container spacing={2} justifyContent="center" sx={{ height: '100%' }}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ cursor: 'pointer', width: '100%', maxWidth: '250px' }}> {/* Increased maxWidth */}
                <Paper sx={{ 
                  padding: '40px',  // Increased padding for a bigger look
                  borderRadius: '12px', 
                  backgroundColor: '#1C273A', 
                  textAlign: 'center',
                  border: '2px solid #FFFFFF', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', // Center vertically
                  alignItems: 'center', // Center horizontally
                  '&:hover': { backgroundColor: '#2D384D' },  // Lighter background on hover
                  width: '100%'
                }}>
                  <img src="filesIcon.png" alt="Files Icon" style={{ width: '100px', marginBottom: '20px' }} /> {/* Increased image size */}
                  <Divider sx={{ backgroundColor: '#FFFFFF', width: '100%', marginY: '10px' }} /> {/* Divider between image and text */}
                  <Typography sx={{ fontSize: '16px', color: '#FFFFFF' }}>בוא נמצא חומרי עזר ללימודים</Typography> {/* Increased text size */}
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ cursor: 'pointer', width: '100%', maxWidth: '250px' }}> {/* Increased maxWidth */}
                <Paper sx={{ 
                  padding: '40px',  // Increased padding for a bigger look
                  borderRadius: '12px', 
                  backgroundColor: '#1C273A', 
                  textAlign: 'center',
                  border: '2px solid #FFFFFF', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', // Center vertically
                  alignItems: 'center', // Center horizontally
                  '&:hover': { backgroundColor: '#2D384D' },  // Lighter background on hover
                  width: '100%'
                }}>
                  <img src="calenderIcon.png" alt="Calender Icon" style={{ width: '100px', marginBottom: '20px' }} /> {/* Increased image size */}
                  <Divider sx={{ backgroundColor: '#FFFFFF', width: '100%', marginY: '10px' }} /> {/* Divider between image and text */}
                  <Typography sx={{ fontSize: '16px', color: '#FFFFFF' }}>בוא נבנה מערכת לסמסטר הבא</Typography> {/* Increased text size */}
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Left Side - Favorite Courses */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ 
            padding: '20px', 
            border: '1px solid #FFFFFF', 
            borderRadius: '0px', 
            backgroundColor: '#1C273A', 
            textAlign: 'right' 
          }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '18px', color: '#FFFFFF' }}>
              הקורסים המועדפים
            </Typography>
            
            <Divider sx={{ backgroundColor: '#C9D1D9', marginY: '10px' }} />  
            
            {courses.map((course) => (
              <Box
                key={course}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                  padding: '10px',
                  borderRadius: '8px',
                  '&:hover': { 
                    backgroundColor: '#2D384D',  // Change background color on hover
                    boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',  // Add shadow on hover
                    '.course-text': { color: '#FFFFFF' } // Change text color on hover
                  }
                }}
              >
                {/* Make the text clickable but no action */}
                <Box 
                  onClick={() => {}}
                  sx={{ 
                    cursor: 'pointer', 
                    fontSize: '14px', 
                    color: '#C9D1D9', 
                    transition: 'color 0.3s' 
                  }}
                >
                  {course}
                </Box>
                
                <IconButton
                  onMouseEnter={() => setHovered(course)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => removeCourse(course)} // Course is removed only when the heart icon is clicked
                >
                  {hovered === course ? (
                    <FavoriteBorder sx={{ color: '#FFFFFF' }} />
                  ) : (
                    <Favorite sx={{ color: '#FFFFFF' }} />
                  )}
                </IconButton>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
