import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import CssBaseline from '@mui/joy/CssBaseline';
import FilesPage from "./components/FilesPage";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import { AuthProvider } from "./hooks/context/AuthContext.tsx";
import Header from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <>
  <CssBaseline/>
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/files" element={<FilesPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/registration" element={<RegisterForm />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </QueryClientProvider>
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
