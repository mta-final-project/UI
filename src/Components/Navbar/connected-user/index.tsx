import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Hooks/context/AuthContext";
import { FC } from "react";

const ConnectedUser: FC = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate()

    return (
        <Box>
            { !user && <>
                <Button onClick={() => navigate('/login')}>
                    LOGIN
                </Button>
            </> }
            { user &&
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Typography>
                        Hey {user.Name}!
                    </Typography>
                    <Button sx={{ backgroundColor: 'red' }} onClick={() => setUser(null)}>Logout</Button>
    </Box> }
        </Box>
    )
}

export default ConnectedUser;