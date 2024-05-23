import { Box, Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const AppLinks: FC = () => {
    const navigate = useNavigate()

    return (
        <Box sx={{ display: 'flex', gap: 1}}>
            <Button sx={{color:'white'}} onClick={() => navigate('/courses')}>Courses</Button>
            <Button sx={{color:'white'}} onClick={() => navigate('/files')}>Files</Button>
        </Box>
    )
}

export default AppLinks;