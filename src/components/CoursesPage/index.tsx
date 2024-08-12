import React, { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";

const Courses: FC = () => {
    return (
        <Box sx={{ backgroundColor: '#0A1929', height: '100vh', color: '#C9D1D9', padding: '20px', direction: 'rtl' }}>
            <Grid container spacing={2}>
                {/* Main Title */}
                <Grid item xs={12}>
                    <Typography variant="h4" sx={{ textAlign: 'right', fontWeight: 'bold', marginBottom: '20px', fontSize: '24px', color: '#FFFFFF' }}>
                        יצירת מערכת חדשה
                    </Typography>
                </Grid>

                {/* Sidebar (Now on the Right) */}
                <Grid item xs={3}>
                    <Box sx={{ border: '1px solid #30363D', borderRadius: '10px', padding: '20px', backgroundColor: '#1C273A', height: '100%', textAlign: 'right' }}>
                        <Box sx={{ marginBottom: '20px' }}>
                            <TextField
                                variant="outlined"
                                placeholder="חיפוש"
                                size="small"
                                fullWidth
                                sx={{
                                    backgroundColor: '#0D1117',
                                    input: { color: '#C9D1D9', padding: '10px', textAlign: 'right' },
                                    fieldset: { borderColor: '#30363D' },
                                    borderRadius: '8px',
                                }}
                            />
                        </Box>
                        
                        {/* "הנה מה שמצאנו עבורך" Section */}
                        <Box sx={{ border: '1px solid #58A6FF', borderRadius: '8px', padding: '10px', marginBottom: '20px' }}>
                            <Typography variant="h6" sx={{ color: '#C9D1D9', marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>הנה מה שמצאנו עבורך...</Typography>
                            <List sx={{ padding: 0 }}>
                                <ListItem button sx={{ padding: '5px 0', alignItems: 'center' }}>
                                    <ListItemText primary="ליניארית 1 שיעור" sx={{ color: '#C9D1D9', fontSize: '14px', textAlign: 'right' }} />
                                    <IconButton sx={{ color: '#FFFFFF', padding: 0, marginLeft: '10px' }}>
                                        <AddIcon />
                                    </IconButton>
                                </ListItem>
                                <ListItem button sx={{ padding: '5px 0', alignItems: 'center' }}>
                                    <ListItemText primary="ליניארית 1 תרגול" sx={{ color: '#C9D1D9', fontSize: '14px', textAlign: 'right' }} />
                                    <IconButton sx={{ color: '#FFFFFF', padding: 0, marginLeft: '10px' }}>
                                        <AddIcon />
                                    </IconButton>
                                </ListItem>
                                <ListItem button sx={{ padding: '5px 0', alignItems: 'center' }}>
                                    <ListItemText primary="ליניארית 2 שיעור" sx={{ color: '#C9D1D9', fontSize: '14px', textAlign: 'right' }} />
                                    <IconButton sx={{ color: '#FFFFFF', padding: 0, marginLeft: '10px' }}>
                                        <AddIcon />
                                    </IconButton>
                                </ListItem>
                            </List>
                        </Box>
                        
                        {/* "הקורסים שנוספו עד כה" Section */}
                        <Box sx={{ border: '1px solid #58A6FF', borderRadius: '8px', padding: '10px' }}>
                            <Typography variant="h6" sx={{ color: '#C9D1D9', marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>
                                הקורסים שנוספו עד כה
                            </Typography>
                            <List sx={{ padding: 0 }}>
                                <ListItem sx={{ padding: '5px 0', alignItems: 'center' }}>
                                    <ListItemText primary="ליניארית 1 שיעור" sx={{ color: '#C9D1D9', fontSize: '14px', textAlign: 'right' }} />
                                    <Checkbox defaultChecked sx={{ color: '#58A6FF', padding: 0, marginLeft: '10px' }} />
                                </ListItem>
                                <ListItem sx={{ padding: '5px 0', alignItems: 'center' }}>
                                    <ListItemText primary="ליניארית 1 תרגול" sx={{ color: '#C9D1D9', fontSize: '14px', textAlign: 'right' }} />
                                    <Checkbox defaultChecked sx={{ color: '#58A6FF', padding: 0, marginLeft: '10px' }} />
                                </ListItem>
                                <ListItem sx={{ padding: '5px 0', alignItems: 'center' }}>
                                    <ListItemText primary="חדווא 2 שיעור" sx={{ color: '#C9D1D9', fontSize: '14px', textAlign: 'right' }} />
                                    <Checkbox defaultChecked sx={{ color: '#58A6FF', padding: 0, marginLeft: '10px' }} />
                                </ListItem>
                                <ListItem sx={{ padding: '5px 0', alignItems: 'center' }}>
                                    <ListItemText primary="תכנות מתקדם שיעור" sx={{ color: '#C9D1D9', fontSize: '14px', textAlign: 'right' }} />
                                    <Checkbox defaultChecked sx={{ color: '#58A6FF', padding: 0, marginLeft: '10px' }} />
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </Grid>

                {/* Main Schedule Area (Now on the Left) */}
                <Grid item xs={9}>
                    <Box sx={{ border: '1px solid #30363D', borderRadius: '10px', padding: '10px', backgroundColor: '#1C273A', height: '100%' }}>
                        <Grid container spacing={0} sx={{ borderBottom: '1px solid #30363D', paddingBottom: '10px' }}>
                            {['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'].map((day) => (
                                <Grid item xs={2} key={day}>
                                    <Typography variant="h6" sx={{ textAlign: 'center', color: '#8B949E', fontSize: '16px', fontWeight: 500 }}>
                                        {day}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                        {/* Schedule Grid */}
                        <Box sx={{ position: 'relative', height: 'calc(100% - 40px)', marginTop: '10px' }}>
                            {/* Course Items */}
                            <Paper sx={{
                                position: 'absolute',
                                top: '50px',
                                right: '10%',
                                width: '14%',
                                height: '70px',
                                backgroundColor: '#388bfd',
                                padding: '10px',
                                borderRadius: '8px',
                                color: '#ffffff',
                                boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                textAlign: 'right',
                            }}>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '14px' }}>הזן א' 2 שיעור</Typography>
                                <Typography variant="caption" sx={{ fontSize: '12px' }}>09:00 - 10:20</Typography>
                            </Paper>
                            <Paper sx={{
                                position: 'absolute',
                                top: '150px',
                                right: '31%',
                                width: '16%',
                                height: '120px',
                                backgroundColor: '#db61a2',
                                padding: '10px',
                                borderRadius: '8px',
                                color: '#ffffff',
                                boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                textAlign: 'right',
                            }}>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '14px' }}>תכנות מתקדם שיעור</Typography>
                                <Typography variant="caption" sx={{ fontSize: '12px' }}>11:00 - 14:20</Typography>
                            </Paper>
                            <Paper sx={{
                                position: 'absolute',
                                top: '50px',
                                right: '54%',
                                width: '14%',
                                height: '70px',
                                backgroundColor: '#A35EF4',
                                padding: '10px',
                                borderRadius: '8px',
                                color: '#ffffff',
                                boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                textAlign: 'right',
                            }}>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '14px' }}>ליג'א 1 שיעור</Typography>
                                <Typography variant="caption" sx={{ fontSize: '12px' }}>09:00 - 10:20</Typography>
                            </Paper>
                            <Paper sx={{
                                position: 'absolute',
                                top: '160px',
                                right: '54%',
                                width: '14%',
                                height: '70px',
                                backgroundColor: '#db61a2',
                                padding: '10px',
                                borderRadius: '8px',
                                color: '#ffffff',
                                boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                textAlign: 'right',
                            }}>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '14px' }}>ליג'א 1 תרגול</Typography>
                                <Typography variant="caption" sx={{ fontSize: '12px' }}>12:15 - 13:45</Typography>
                            </Paper>
                            <Paper sx={{
                                position: 'absolute',
                                top: '50px',
                                right: '78%',
                                width: '14%',
                                height: '70px',
                                backgroundColor: '#7a8bff',
                                padding: '10px',
                                borderRadius: '8px',
                                color: '#ffffff',
                                boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                textAlign: 'right',
                            }}>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '14px' }}>ליג'א 2 שיעור</Typography>
                                <Typography variant="caption" sx={{ fontSize: '12px' }}>09:00 - 10:20</Typography>
                            </Paper>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Courses;
