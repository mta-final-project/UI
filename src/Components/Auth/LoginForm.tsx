import * as React from 'react';
import Sheet from "@mui/joy/Sheet";
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';


export default function LoginForm() {
 return (
   <main>
     <CssBaseline />
     <Sheet
       sx={{
         width: 300,
         mx: 'auto',
         my: 4,
         py: 3,
         px: 2,
         display: 'flex',
         flexDirection: 'column',
         gap: 2,
         borderRadius: 'sm',
         boxShadow: 'md',
       }}
       variant="outlined"
     >
       <div>
         <Typography level="h4" component="h1" sx={{ textAlign: 'center' }}>
           <b>התחברות</b>
         </Typography>
         <Typography level="body-sm" sx={{ textAlign: 'center' }}>נא הקלידו את הפרטים המבוקשים מטה</Typography>
       </div>
       <FormControl>
         <FormLabel sx={{ textAlign: 'right' }}>אימייל</FormLabel>
         <Input
           name="email"
           type="email"
           placeholder="me@mycollage.ac.il"
         />
       </FormControl>
       <FormControl>
         <FormLabel sx={{ textAlign: 'right' }}>סיסמא</FormLabel>
         <Input
           name="password"
           type="password"
           placeholder="סיסמא"
         />
       </FormControl>
       <Button sx={{ mt: 1 }}>התחברות</Button>
       <Typography
         fontSize="sm"
         sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}
       >
         <Link href="/registration" sx={{ right: 1, mr: 1 }}> הרשמה לאתר</Link>
         <span dir='RTL'>אין לך משתמש? </span>
         </Typography>
      
     </Sheet>
   </main>
 );
}
