import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/Pages/NotFound/NotFound';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
