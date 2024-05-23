import { Box } from "@mui/material"
import { FC } from "react";
import AppLogo from "./app-logo";
import AppLinks from "./app-links";
import ConnectedUser from "./connected-user";

const Navbar: FC = () => {
    return (
        <Box sx={{ width: '100%', height: '50px', alignItems: 'center', backgroundColor: 'lightblue', display: 'flex', justifyContent: 'space-between' }}>
            <AppLogo/>
            <Box sx={{ width: '80%', alignItems: 'left', display: 'flex' }}>
                <AppLinks/>
            </Box>
            <ConnectedUser/>
        </Box>
    )
}

export default Navbar;