import { useState } from 'react';
import Sheet from "@mui/joy/Sheet";
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { register } from "../../services/UsersService";

const RegisterForm = () => {
  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);

    if (password !== retypePassword) {
      setError('הסיסמאות אינן תואמות');
      return;
    }

    setError('');
    setMessage('');
    register(email, password,firstName,lastName)
      .then(response => {
        console.log("Register response:", response);
        setMessage('ההרשמה בוצעה בהצלחה');
      })
      .catch(error => {
        console.error("Registration error:", error);
        setError('הרשמה נכשלה, נא לנסות שוב');
      });
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
        <FormControl sx={{ direction: 'rtl' }}>
          <FormLabel sx={{ textAlign: 'right' }}>שם פרטי</FormLabel>
          <Input
            name="firstName"
            placeholder="ישראל"
            required
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
          />
          <FormLabel sx={{ textAlign: 'right' }}>שם משפחה</FormLabel>
          <Input
            name="LastName"
            placeholder="ישראלי"
            required
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </FormControl>
        <FormControl sx={{ direction: 'rtl' }}>
          <FormLabel sx={{ textAlign: 'right' }}>אימייל</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="me@mycollage.ac.il"
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
            sx={{ textAlign: 'left', direction: 'ltr' }}
          />
        </FormControl>
        <FormControl sx={{ direction: 'rtl' }}>
          <FormLabel sx={{ textAlign: 'right' }}>סיסמא</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="סיסמא"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            sx={{ textAlign: 'right' }}
          />
          <FormLabel sx={{ textAlign: 'right' }}>סיסמא חוזרת</FormLabel>
          <Input
            name="repassword"
            type="password"
            placeholder="סיסמא חוזרת"
            required
            value={retypePassword}
            onChange={e => setRetypePassword(e.target.value)}
            sx={{ textAlign: 'right' }}
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
        {error && (
          <Typography
            role="alert"
            sx={{ mt: 2, textAlign: 'center', color: 'error.dark' }}
          >
            {error}
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