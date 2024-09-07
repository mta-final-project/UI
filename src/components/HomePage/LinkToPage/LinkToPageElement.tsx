import { Box, Paper, Typography, Divider } from '@mui/material';

const LinkToPageElement = ({ imgSrc, text, onClick }) => (
  <Box sx={{ cursor: 'pointer', width: '100%', maxWidth: '250px' }} onClick={onClick}>
    <Paper sx={{
      padding: '40px', borderRadius: '12px', backgroundColor: '#1C273A', textAlign: 'center', border: '2px solid #FFFFFF',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      width: '100%',
      '&:hover': { backgroundColor: '#2D384D', '.link-text': { color: '#C9D1D9' } } 
    }}>
      <img src={imgSrc} alt={text} style={{ width: '100px', marginBottom: '20px' }} />
      <Divider sx={{ backgroundColor: '#FFFFFF', width: '100%', marginY: '10px' }} />
      <Typography
        className="link-text"
        sx={{
          fontSize: '16px',
          color: '#FFFFFF',
        }}
      >
        {text}
      </Typography>
    </Paper>
  </Box>
);

export default LinkToPageElement;
