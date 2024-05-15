import React, { useState } from 'react';
import Sheet from "@mui/joy/Sheet";
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import {login} from '../../Services/UsersService'


const LoginForm = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

const handleSubmit = (event) => {
    event.preventDefault()

    setEmailError(false)
    setPasswordError(false)

    if (email == '') {
        setEmailError(true)
    }
    if (password == '') {
        setPasswordError(true)
    }

    if (email && password) {
        console.log(email, password)
        const response = login(email, password);
        console.log(import.meta.env.USERS_API_VITE);
        console.log("Login successful:", response);
    }
}

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
       <form autoComplete="off" onSubmit={handleSubmit} >
        <FormControl>
         <FormLabel sx={{ textAlign: 'right' }}>אימייל</FormLabel>
         <Input 
           required
           name="email"
           type="email"
           placeholder="me@mycollage.ac.il"
           value={email}
           error={emailError}
           onChange={e => setEmail(e.target.value)}
         />
       </FormControl>
       <FormControl>
         <FormLabel sx={{ textAlign: 'right' }}>סיסמא</FormLabel>
         <Input
           required
           name="password"
           type="password"
           placeholder="סיסמא"
           onChange={e => setPassword(e.target.value)}
           value={password}
           error={passwordError}
         />
       </FormControl>
       <Button type="submit" sx={{ mt: 1, marginX: 'auto', display: 'block', width: '100%', marginTop: '15px' }}>התחברות</Button>
       </form>
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