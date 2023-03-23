import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/landing/Landing";
import AboutUs from "./pages/aboutUs/AboutUs";
import OurApproach from "./pages/OurApproach/OurApproach";
import WeHelp from "./pages/WeHelp/WeHelp";
import ChooseUs from "./pages/ChooseUs/ChooseUs";
import BuildNow from "./pages/BuildNow/BuildNow";
import Services from "./pages/services/Services";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Landing />
        <AboutUs />
        <OurApproach />
        <WeHelp />
        <ChooseUs />
        <BuildNow />
        <Services/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
