
import './App.css';
import Cards from './Component/Cards';
import HeroUi from './Component/HeroUi';
import NavBar from './Component/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroUi />
      <Cards />
    </div>
  );
}

export default App;
