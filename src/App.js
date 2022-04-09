import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from './components/NavbarTop/NavbarTop';
import CarouselHeader from './components/CarouselHeader/CarouselHeader';
import Overview from './components/Overview/Overview';
import Blogs from './components/Blogs/Blogs';
import Report from './components/Report/Report';


function App() {
  return (
    <div>
      <NavbarTop />
      <CarouselHeader />
      <Overview />
      <Blogs />
      <Report />
    </div>
  );
}

export default App;
