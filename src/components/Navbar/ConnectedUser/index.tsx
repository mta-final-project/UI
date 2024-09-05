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

   return (
       <Box sx={{ padding: '10px' }}> 
           {!user && (
               <>
                   <Button 
                       sx={{
                           color: 'white',
                           transition: 'all 0.3s ease-in-out',  
                           '&:hover': {
                               transform: 'scale(1.05)',         
                               filter: 'brightness(1.2)',        
                           },
                       }} 
                       onClick={() => navigate('/login')}
                   >
                       התחברות
                   </Button>
               </>
           )}
           {user && (
               <Box sx={{ display: 'flex', gap: 1 }}>
                   <Typography 
                       sx={{ 
                           color: 'white',
                           transition: 'all 0.3s ease-in-out',  
                           '&:hover': {
                               fontWeight: 'bold',             
                               transform: 'scale(1.05)',       
                               filter: 'brightness(1.2)',      
                           },
                       }}
                   >
                        {user.Name} שלום
                   </Typography>
                   <Button 
                       sx={{
                           backgroundColor: '#0A6BCB', 
                           color: 'white',
                           transition: 'all 0.3s ease-in-out',  
                           '&:hover': {
                               transform: 'scale(1.05)',        
                               filter: 'brightness(1.2)',        
                           },
                       }} 
                       onClick={handleLogout}
                   >
                       התנתקות
                   </Button>
               </Box>
           )}
       </Box>
   );
};

export default ConnectedUser;
