import Sheet from "@mui/joy/Sheet";
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { useAuth } from "../../hooks/context/AuthContext";

const LoginForm = () => {
  const { setUser } = useAuth();

 return (
   <main>
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
       <Button onClick={() => setUser({ Name: 'Keren'})} sx={{ mt: 1 }}>התחברות</Button>
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

export default LoginForm;