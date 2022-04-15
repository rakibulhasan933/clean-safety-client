import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home/Home';
import NotFound from './components/Pages/NotFound/NotFound';
import Login from './components/Pages/Login/Login';
import AuthProvider from './components/context/AuthProvider';
import Dashboard from './components/Pages/Dashboard/DashboardHome/DashboardHome';
import Service from './components/Pages/Services/Service/Service';
import AddProducts from './components/Pages/Dashboard/AddProducts/AddProducts';
import Reviews from './components/Pages/Dashboard/Reviews/Reviews';
import MakeAdmin from './components/Pages/Dashboard/MakeAdmin/MakeAdmin';
import Checkout from './components/Pages/Shared/Checkout/Checkout';


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/services' element={<Service />}></Route>
        <Route path='/checkout/:id' element={<Checkout />} />
        <Route path='/dashboard/' element={<Dashboard />}>
          <Route path='addProducts' element={<AddProducts />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='makeAdmin' element={<MakeAdmin />} />
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
