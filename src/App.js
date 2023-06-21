import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Technologies";
import Contact from "./components/Contact";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
	return (
		<>
			<HelmetProvider>
				<Helmet>
					{/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
					<meta name="description" content="Portafolio" />
					<title>Ossio</title>
				</Helmet>
				<div className="App">
					<NavBar />
					<Home />
					<SocialLinks />
					<About />
					<Portfolio />
					<Experience />
					<Contact />
				</div>
			</HelmetProvider>
		</>
	);
}

export default App;
