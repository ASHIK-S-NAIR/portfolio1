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
// import { useEffect, useRef } from "react";

function App() {
  // const Cursor = useRef();

  // useEffect(() => {
  //   document.addEventListener("mousemove", (e) => {
  //     Cursor.current.style.top = e.pageY + "px";
  //     Cursor.current.style.left = e.pageX + "px";
  //   });
  // }, []);


  return (
    <div className="App">
      <Cursor />
      <Navigation />
      <Hero />
      <Problem />
      <Process />
      <Projects />
      <About />
      <FAQs />
      <TIPS />
      <Footer />
    </div>
  );
}

export default App;
