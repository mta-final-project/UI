import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/context/AuthContext";
import { FC } from "react";

const ConnectedUser: FC = () => {
   const { user, setUser } = useAuth();
   const navigate = useNavigate();

   useEffect(() => {
       const accessToken = localStorage.getItem('accessToken');
       const username = localStorage.getItem('username');
       if (accessToken) {
           setUser({ Name: username, Token: accessToken });
       }
   }, [setUser]);

   const handleLogout = () => {
       localStorage.removeItem('accessToken');
       localStorage.removeItem('username');
       setUser(null);
   };

   const buttonStyles = {
       color: 'white',
       transition: 'all 0.3s ease-in-out',
       '&:hover': {
           transform: 'scale(1.05)',
           filter: 'brightness(1.2)',
       },
   };

   return (
       <Box sx={{ padding: '10px' }}>
           {!user && (
               <>
                   <Button 
                       sx={buttonStyles} 
                       onClick={() => navigate('/login')}
                   >
                       התחברות
                   </Button>
               </>
           )}
           {user && (
               <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', alignItems: 'center' }}>
                   <Button 
                       sx={{ ...buttonStyles }} 
                       onClick={handleLogout}
                   >
                       התנתקות
                   </Button>
                   <Typography 
                       sx={{ 
                           color: 'white',
                           opacity: '70%',
                           fontSize: '85%',
                           transition: 'all 0.3s ease-in-out', 
                       }}
                   >
                     {user.Name} שלום  
                   </Typography>
               </Box>
           )}
       </Box>
   );
};

export default ConnectedUser;
