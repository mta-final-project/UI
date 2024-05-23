import { Box, Typography } from "@mui/material";
import { FC } from "react";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

const AppLogo: FC = () => {
    return (
        <Box sx={{ display: 'flex', gap: 0.5 }}>
            <SchoolIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
            }}
            >
            AcademEase
            </Typography>
        </Box>
    )
}

export default AppLogo