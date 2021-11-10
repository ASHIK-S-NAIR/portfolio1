import './App.css';
import './css-desktop.css';
import './css-tablet.css';
import './css-phone.css';
// import './script';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Process from './components/Process';
import About from './components/About';
import FAQs from './components/FAQs';
import TIPS from './components/TIPS';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Problem />
      <Process />
      <About />
      <FAQs />
      <TIPS />
      <Footer />
    </div>
  );
}

export default App;
