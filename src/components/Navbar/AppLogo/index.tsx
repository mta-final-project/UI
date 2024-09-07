import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

const AppLogo: FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: 0.5,
                '&:hover': {
                    transform: 'scale(1.05)', 
                    transition: 'all 0.3s ease-in-out', 
                    filter: 'brightness(1.2)', 
                },
            }}
        >
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
                    '&:hover': {
                        color: '#FFFFFF', 
                    },
                }}
            >
                <img
                    src="academeaseFullLogoWhite.png"
                    alt="logo"
                    height="40"
                    style={{
                        transition: 'all 0.3s ease-in-out', 
                    }}
                />
            </Typography>
        </Box>
    );
};

export default AppLogo;