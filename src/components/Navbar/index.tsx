import { Box } from "@mui/material"
import { FC } from "react";
import AppLogo from "./AppLogo";
import AppLinks from "./AppLinks";
import ConnectedUser from "./ConnectedUser";

const Navbar: FC = () => {
    return (
        <Box sx={{ width: '100%', height: '50px', alignItems: 'center', backgroundColor: '#0A6BCB', display: 'flex', justifyContent: 'space-between' }}>
            <AppLogo/>
            <Box sx={{ width: '80%', alignItems: 'left', display: 'flex', color:'white' }}>
                <AppLinks/>
            </Box>
            <ConnectedUser/>
        </Box>
    )
}

export default Navbar;