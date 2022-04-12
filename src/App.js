import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home/Home';
import NotFound from './components/Pages/NotFound/NotFound';
import Login from './components/Pages/Login/Login';
import AuthProvider from './components/context/AuthProvider';
import Dashboard from './components/Pages/Dashboard/DashboardHome/DashboardHome';
import ServicesMain from './components/Pages/Services/ServicesMain';


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/services' element={<ServicesMain />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
