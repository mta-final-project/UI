import { FC } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

const CoursesThatAdded: FC = () => {
    return (
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
                                    <ListItemText primary="חדווא 2 שיעור"sx={{ color: '#C9D1D9', fontSize: '14px', textAlign: 'right' }} />
                                    <Checkbox defaultChecked sx={{ color: '#58A6FF', padding: 0, marginLeft: '10px' }} />
                                </ListItem>
                                <ListItem sx={{ padding: '5px 0', alignItems: 'center' }}>
                                    <ListItemText primary="תכנות מתקדם שיעור" sx={{ color: '#C9D1D9', fontSize: '14px', textAlign: 'right' }} />
                                    <Checkbox defaultChecked sx={{ color: '#58A6FF', padding: 0, marginLeft: '10px' }} />
                                </ListItem>
                            </List>
                        </Box>
    )
}

export default CoursesThatAdded;