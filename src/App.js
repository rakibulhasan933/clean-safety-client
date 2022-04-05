import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from './components/NavbarTop/NavbarTop';
import CarouselHeader from './components/CarouselHeader/CarouselHeader';
import Overview from './components/Overview/Overview';


function App() {
  return (
    <div>
      <NavbarTop />
      <CarouselHeader />
      <Overview />
    </div>
  );
}

export default App;
