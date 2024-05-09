import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Button color="inherit" component={Link} to="/login">
        login
        </Button>
    );
}

export default Login;