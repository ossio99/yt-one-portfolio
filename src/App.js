import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact/>
    </div>
  );
}

export default App;
