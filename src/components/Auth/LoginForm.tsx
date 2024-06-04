import { useState } from 'react';
import Sheet from "@mui/joy/Sheet";
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { useAuth } from "../../hooks/context/AuthContext";
import { login } from "../../Services/UsersService";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { setUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);
    setErrorMessage('');
    setSuccessMessage('');

    if (email === '') {
      setEmailError(true);
      setErrorMessage('נא להכניס אימייל תקין');
      return;
    }
    if (password === '') {
      setPasswordError(true);
      setErrorMessage('נא להכניס סיסמא');
      return;
    }

    if (email && password) {
      try {
        const response = await login(email, password);
        console.log("Login response:", response);

        const username = email.split('@')[0];
        const accessToken = response.access_token
        setUser({ Name: username, Token: accessToken });
        setSuccessMessage(`${username} ברוך הבא`);
        navigate('/');
      }
       catch (error) {
        console.error("Login error:", error);
        setErrorMessage('שם משתמש או סיסמא שגויים');
      }
    }
  };
  
  return (
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
        <form autoComplete="off" onSubmit={handleSubmit}>
          <FormControl sx={{ direction: 'rtl' }}>
            <FormLabel sx={{ textAlign: 'right' }}>אימייל</FormLabel>
            <Input
              required
              name="email"
              type="email"
              placeholder="me@mycollage.ac.il"
              value={email}
              error={emailError}
              onChange={e => setEmail(e.target.value)}
              sx={{ textAlign: 'left', direction: 'ltr'}}
            />
          </FormControl>
          <FormControl sx={{ direction: 'rtl' }}>
            <FormLabel sx={{ textAlign: 'right' }}>סיסמא</FormLabel>
            <Input
              required
              name="password"
              type="password"
              placeholder="סיסמא"
              onChange={e => setPassword(e.target.value)}
              value={password}
              error={passwordError}
              sx={{ textAlign: 'right' }}
            />
          </FormControl>
          {errorMessage && (
            <Typography
              role="alert"
              sx={{ mt: 2, textAlign: 'center', color: 'error.dark' }}
            >
              {errorMessage}
            </Typography>
          )}
          {successMessage && (
            <Typography
              role="alert"
              sx={{ mt: 2, textAlign: 'center', color: 'success.dark' }}
            >
              {successMessage}
            </Typography>
          )}
          <Button type="submit" sx={{ mt: 1, marginX: 'auto', display: 'block', width: '100%', marginTop: '15px' }}>התחברות</Button>
        </form>
        <Typography
          fontSize="sm"
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
        >
          <Link href="/registration" sx={{ right: 1, mr: 1 }}> הרשמה לאתר</Link>
          <span dir='RTL'>אין לך משתמש? </span>
        </Typography>
      </Sheet>
  );
}

export default LoginForm;