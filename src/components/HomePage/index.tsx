import { Box, Grid } from '@mui/material';
import Header from './Header/Header';
import LinkToPageSection from './LinkToPage/LinkToPageSection';
import FavoriteCourses from './Courses/FavoriteCourses';

const HomePage = () => {


  return (
    <Box sx={{ backgroundColor: '#0A1929', minHeight: '100vh', color: '#C9D1D9', direction: 'rtl' }}>
      <Header />
      <Grid container spacing={2} alignItems="flex-start" justifyContent="center">
        <LinkToPageSection />
        <FavoriteCourses />
      </Grid>
    </Box>
  );
};

export default HomePage;
