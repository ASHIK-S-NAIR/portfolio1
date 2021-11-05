import './App.css';
import './css-desktop.css';
import './css-tablet.css';
import './css-phone.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
    </div>
  );
}

export default App;
