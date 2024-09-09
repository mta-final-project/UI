import { Box, Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const AppLinks: FC = () => {
    const navigate = useNavigate();

    const buttonStyles = {
        color: 'white',
        fontSize: '16px',
        fontFamily: '"Roboto", "Arial", sans-serif',
        padding: '10px',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)',
            filter: 'brightness(1.2)',
        }
    };

    return (
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', width: '100%' }}>
            <Button 
                sx={buttonStyles} 
                onClick={() => navigate('/files')}
            >
                חומרי לימוד
            </Button>
            <Button 
                sx={buttonStyles} 
                onClick={() => navigate('/courses')}
            >
                בניית מערכת שעות
            </Button>
        </Box>
    );
};

export default AppLinks;
