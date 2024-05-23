import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Files from "./components/Files";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import CssBaseline from '@mui/joy/CssBaseline';
import { AuthProvider } from "./hooks/context/AuthContext";
import Header from "./components/Navbar";

const App = () => (
  <>
  <CssBaseline/>
  <AuthProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/files" element={<Files />} /> 
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/registration" element={<RegisterForm />} /> 
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </AuthProvider>
  </> 
)

const Layout = () => (
  <div>
    <Header />
    <Outlet />
  </div>
)

const HomePage = () => (
  <h2>Home page place holder</h2>
)

const NoMatch = () => (
  <div>
    <h2>Nothing to see here!</h2>
  </div>
)

export default App
