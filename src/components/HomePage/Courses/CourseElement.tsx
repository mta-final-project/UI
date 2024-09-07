import { Box, IconButton } from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const CourseElement = ({ course, hovered, onHover, removeCourse }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: '5px',
      borderRadius: '8px',
      '&:hover': { 
        backgroundColor: '#2D384D',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
        '.course-text': { fontWeight: 'bold', color: '#FFFFFF' } // Make text bold and white on hover
      }
    }}
  >
    <Box
      className="course-text"
      sx={{
        cursor: 'pointer',
        fontSize: '14px',
        color: '#C9D1D9',
        transition: 'color 0.3s, font-weight 0.3s',
      }}
      onMouseEnter={() => onHover(null)} 
    >
      {course}
    </Box>

    <IconButton
      onMouseEnter={() => onHover(course)} 
      onMouseLeave={() => onHover(null)}
      onClick={removeCourse}
    >
      {hovered === course ? (
        <FavoriteBorder sx={{ color: '#FFFFFF' }} /> 
      ) : (
        <Favorite sx={{ color: '#FFFFFF' }} /> 
      )}
    </IconButton>
  </Box>
);

export default CourseElement;
