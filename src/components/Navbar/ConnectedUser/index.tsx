import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/context/AuthContext";
import { FC } from "react";

const ConnectedUser: FC = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate()

    return (
        <Box>
            { !user && <>
                <Button sx={{color:'white'}} onClick={() => navigate('/login')}>
                    LOGIN
                </Button>
            </> }
            { user &&
                <Box sx={{ display: 'flex', gap: 1 ,color:'white'}}>
                    <Typography>
                        Welcome {user.Name}
                    </Typography>
                    <Button sx={{ backgroundColor: '#0A6BCB', color:'white' }} onClick={() => setUser(null)}>Logout</Button>
    </Box> }
        </Box>
    )
}

export default ConnectedUser;