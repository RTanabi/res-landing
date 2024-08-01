import "./App.css";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
import Home from "./componets/Home";
import Testimonial from "./componets/Testimonial";
import Work from "./componets/Work";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
