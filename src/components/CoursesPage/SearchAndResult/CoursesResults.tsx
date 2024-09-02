import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

const CoursesResults: FC = () => {
    return (
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

    )
}

export default CoursesResults;