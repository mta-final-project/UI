import Sheet from "@mui/joy/Sheet";
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';


const RegisterForm = () => {
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
           <b>הרשמה</b>
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
         <FormLabel sx={{ textAlign: 'right' }}>סיסמא חוזרת</FormLabel>
         <Input
           name="repassword"
           type="respassword"
           placeholder=" סיסמא חוזרת"
         />
       </FormControl>
       <Button sx={{ mt: 1 }}>הרשמה</Button>
       <Typography
         fontSize="sm"
         sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}
       >
         <Link href="/login" sx={{ right: 1, mr: 1 }}> התחברות לאתר</Link>
         <span dir='RTL'>יש לך כבר משתמש? </span>
         </Typography>
      
     </Sheet>
   </main>
 );
}

export default RegisterForm;