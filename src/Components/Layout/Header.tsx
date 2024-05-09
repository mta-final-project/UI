import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import SchoolIcon from "@mui/icons-material/School";
import Login from "./Login";


const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
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
          <MenuItem component={Link} to={"/courses"}>
            <Typography textAlign="center">Courses</Typography>
          </MenuItem>
          <MenuItem component={Link} to={"/files"}>
            <Typography textAlign="center">Files</Typography>
          </MenuItem>
          <Typography sx={{ flexGrow:1 }} />
          <Login />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;