import './App.css';
import './css-desktop.css';
import './css-tablet.css';
import './css-phone.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Problem />
    </div>
  );
}

export default App;
