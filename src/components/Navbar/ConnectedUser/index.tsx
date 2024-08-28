import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/context/AuthContext";
import { FC } from "react";


const ConnectedUser: FC = () => {
   const { user, setUser } = useAuth();
   const navigate = useNavigate()
   useEffect(() => {
       const accessToken = localStorage.getItem('accessToken');
       const username = localStorage.getItem('username');
       if (accessToken)
       {
           setUser({ Name: username, Token: accessToken });
       }
   }, [setUser]);


   const handleLogout = () => {
       localStorage.removeItem('accessToken');
       localStorage.removeItem('username');
       setUser(null);
   };


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
                   <Button sx={{ backgroundColor: '#0A6BCB', color:'white' }} onClick={handleLogout}>Logout</Button>
   </Box> }
       </Box>
   )
}


export default ConnectedUser;
