import { Box, Typography } from '@mui/material';

const Header = () => (
  <Box sx={{ backgroundColor: '#FFFFFF', padding: '10px', textAlign: 'center', marginBottom: '20px' }}>
    <img src="icon.png" alt="Logo" style={{ width: '100px' }} />
    <Typography variant="h4" sx={{ fontSize: { xs: '18px', sm: '24px' }, color: '#0A1929', fontWeight: 'bold' }}>
      ברוכים הבאים!
    </Typography>
  </Box>
);

export default Header;
