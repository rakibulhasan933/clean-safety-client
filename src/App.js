import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from './components/NavbarTop/NavbarTop';
import CarouselHeader from './components/CarouselHeader/CarouselHeader';
import Overview from './components/Overview/Overview';
import Blogs from './components/Blogs/Blogs';
import Report from './components/Report/Report';
import Footer from './components/Footer/Footer';
import Provider from './components/Provider/Provider';
import Services from './components/Services/Services';


function App() {
  return (
    <div>
      <NavbarTop />
      <CarouselHeader />
      <Overview />
      <Services />
      <Blogs />
      <Report />
      <Provider />
      <Footer />
    </div>
  );
}

export default App;
