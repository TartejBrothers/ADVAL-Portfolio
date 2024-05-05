import "./App.css";
import Home from "./components/home";
import Expertise from "./components/expertise";
import Showcase from "./components/showcase";
import Designs from "./components/designs";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
function App() {
  return (
    <div className="App">
      <Home />
      <Expertise />
      <Showcase />
      <Designs />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
