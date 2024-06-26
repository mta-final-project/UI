import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./Components/Layout";
import LoginForm from "./Components/Auth/LoginForm";
import RegisterForm from "./Components/Auth/RegisterForm";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="courses" element={<Courses />} /> */}
        {/* <Route path="files" element={<Files />} /> */}
        <Route path="login" element={<LoginForm />} /> 
        <Route path="registration" element={<RegisterForm />} /> 
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
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
