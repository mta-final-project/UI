import React, { useState } from 'react';
import Sheet from "@mui/joy/Sheet";
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { register } from '../../Services/UsersService';

const RegisterForm = () => {
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(email, password);
    const response = register(email, password);
    console.log("Login successful:", response);
    setMessage('ההרשמה בוצעה בהצלחה'); // Set the message to be displayed after submission
  };

  return (
    <main>
      <Sheet
        component="form"
        onSubmit={handleSubmit}
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
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ textAlign: 'right' }}>סיסמא</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="סיסמא"
            required
            value={password}
            //error={passwordError}
            onChange={e => setPassword(e.target.value)}
          />
          <FormLabel sx={{ textAlign: 'right' }}>סיסמא חוזרת</FormLabel>
          <Input
            name="repassword"
            type="password"
            placeholder="סיסמא חוזרת"
            required
            //value={repassword}
            //error={repasswordError}
          />
        </FormControl>
        <Button type="submit" sx={{ mt: 1 }}>הרשמה</Button>
        {message && (
          <Typography
            role="alert"
            sx={{ mt: 2, textAlign: 'center', color: 'success.dark' }}
          >
            {message}
          </Typography>
        )}
        <Typography
          fontSize="sm"
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
        >
          <Link href="/login" sx={{ right: 1, mr: 1 }}>התחברות לאתר</Link>
          <span dir='RTL'>יש לך כבר משתמש?</span>
        </Typography>
      </Sheet>
    </main>
  );
}

export default RegisterForm;
