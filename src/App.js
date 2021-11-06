import './App.css';
import './css-desktop.css';
import './css-tablet.css';
import './css-phone.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import About from './components/About';
import TIPS from './components/TIPS';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Problem />
      <About />
      <TIPS />
      <Footer />
    </div>
  );
}

export default App;
