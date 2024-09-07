import { useState } from 'react';
import { Grid, Paper, Typography, Divider } from '@mui/material';
import CourseElement from './CourseElement';

const FavoriteCourses = ({ courses, removeCourse }) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Grid item xs={12} md={4}>
      <Paper sx={{ margin: '30px', padding: '20px', borderRadius: '0px', border: '1px solid #FFFFFF', backgroundColor: '#1C273A', textAlign: 'right' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '18px', color: '#FFFFFF' }}>
          הקורסים המועדפים
        </Typography>
        <Divider sx={{ backgroundColor: '#C9D1D9', marginY: '10px' }} />
        {courses.map(course => (
          <CourseElement
            key={course}
            course={course}
            hovered={hovered}
            onHover={setHovered}
            removeCourse={() => removeCourse(course)}
          />
        ))}
      </Paper>
    </Grid>
  );
};

export default FavoriteCourses;
