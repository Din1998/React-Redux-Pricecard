
import './App.css';
import BrandSection from './Component/BrandSection';
import Cards from './Component/Cards';
import Footer from './Component/Footer';
import HeroUi from './Component/HeroUi';
import NavBar from './Component/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroUi />
      <Cards />
      <BrandSection />
      <Footer />
    </div>
  );
}

export default App;
