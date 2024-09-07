import { Box } from "@mui/material";
import { FC } from "react";
import AppLogo from "./AppLogo";
import AppLinks from "./AppLinks";
import ConnectedUser from "./ConnectedUser";

const Navbar: FC = () => {
    return (
        <Box 
            sx={{ 
                width: '100%', 
                height: '50px', 
                alignItems: 'center', 
                backgroundColor: '#0C222D', 
                display: 'flex', 
                justifyContent: 'space-between', 
                borderBottom: '3px solid white' 
            }}
        >
            <ConnectedUser/>
            <Box sx={{ width: '70%', color: 'white' }}>
                <AppLinks/>
            </Box>
            <AppLogo/>
        </Box>
    );
}

export default Navbar;