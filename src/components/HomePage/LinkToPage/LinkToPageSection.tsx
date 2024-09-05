import { Grid, Typography } from '@mui/material';
import LinkToPageElement from './LinkToPageElement';
import { useNavigate } from 'react-router-dom';

const LinkToPageSection = () => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} md={8} sx={{ paddingRight: '30px' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: { xs: '20px', sm: '24px' }, color: '#FFFFFF', textAlign: 'right', marginBottom: '50px' }}>
        איך נוכל לעזור לך היום?
      </Typography>
      <Grid 
        container 
        spacing={1} 
        justifyContent="center" // Centers the items horizontally
        alignItems="center" // Centers the items vertically
        sx={{ height: '100%', minHeight: '200px' }} // Ensures height for vertical centering
      >
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <LinkToPageElement imgSrc="filesIcon.png" text="בוא נמצא חומרי עזר ללימודים" onClick={() => navigate('/files')} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <LinkToPageElement imgSrc="calenderIcon.png" text="בוא נבנה מערכת לסמסטר הבא" onClick={() => navigate('/courses')} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LinkToPageSection;
