import { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Paper from "@mui/material/Paper";
import CoursesItems from "./CoursesItems";

const ScheduleView: FC = () => {

    const hours = Array.from({ length: 15 }, (_, index) => `${index + 8}:00`);

    return (
        <Grid item xs={12} md={9}>
        <Box sx={{ border: '1px solid #30363D', borderRadius: '10px', padding: '10px', backgroundColor: '#1C273A', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
            <Grid container spacing={0} sx={{ borderBottom: '1px solid #30363D', paddingBottom: '10px' }}>
                {['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'].map((day) => (
                    <Grid item xs={2} key={day}>
                        <Typography variant="h6" sx={{ textAlign: 'center', color: '#8B949E', fontSize: { xs: '12px', sm: '14px' }, fontWeight: 500 }}>
                            {day}
                        </Typography>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ display: 'flex', flex: 1, overflowY: 'auto' }}>
                {/* Hour Markers */}
                <Box sx={{ width: '50px', display: 'flex', flexDirection: 'column', paddingTop: '0px', position: 'relative' }}>
                    {hours.map((hour, index) => (
                        <Box key={index} sx={{ position: 'absolute', top: `${index * (200 / 15) + (200 / 30) - 6.66}%`, width: '100%', display: 'flex', alignItems: 'center', height: `${200 / 15}%` }}>
                            <Typography sx={{ color: '#8B949E', fontSize: '10px', textAlign: 'center', width: '100%' }}>
                                {hour}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* Schedule Lines and Items */}
                <Box sx={{ flex: 1, position: 'relative', paddingLeft: '10px', borderLeft: '1px solid #30363D' }}>
                    {/* Hour Lines */}
                    {hours.map((_, index) => (
                        <Box key={index} sx={{ position: 'absolute', top: `${index * (200 / 15) + 13.33}%`, width: '100%', borderTop: '1px solid #30363D' }} />
                    ))}

                    {/* Schedule Items */}
                        <CoursesItems/>
                    </Box>
                </Box>
            </Box>
    </Grid>
    )
}

export default ScheduleView;