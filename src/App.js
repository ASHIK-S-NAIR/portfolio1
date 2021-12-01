import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./css-desktop.css";
import "./css-tablet.css";
import "./css-phone.css";
import Cursor from "./components/Cursor";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Process from "./components/Process";
import Projects from "./components/Projects";
import About from "./components/About";
import FAQs from "./components/FAQs";
import TIPS from "./components/TIPS";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import Contact from "./components/Contact";
import Thankyou from "./components/Thankyou";

function App() {
  return (
    <Router>
      <div className="App">
        <Cursor />
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <section className="home-container">
                <Hero />
                <Problem />
                <Process />
                <Projects />
                <About />
                <FAQs />
                <TIPS />
                <Footer />
              </section>
            }
          ></Route>
          <Route path="/contact" element={
            <section className="contact-container">
              <Contact />
              <FooterBottom /> 
            </section>
            }
          ></Route>
          <Route path="/thankyou" element={
            <section className="thankyou-container">
              <Thankyou />
              <FooterBottom />
            </section>
          }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
