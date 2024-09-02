import { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const MainTitle: FC = () => {
    return (
        <Grid item xs={12}>
        <Typography variant="h4" sx={{ textAlign: 'right', fontWeight: 'bold', fontSize: { xs: '18px', sm: '22px' }, color: '#FFFFFF' }}>
            יצירת מערכת חדשה
        </Typography>
    </Grid>
    )
}

export default MainTitle;