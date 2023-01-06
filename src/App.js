import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/landing/Landing";
import Info from "./pages/info/Info";
import OurApproach from "./pages/OurApproach/OurApproach";
import WeHelp from "./pages/WeHelp/WeHelp";
import ChooseUs from "./pages/ChooseUs/ChooseUs";
import BuildNow from "./pages/BuildNow/BuildNow";
import Services from "./pages/services/Services";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Landing />
        <Info />
        <OurApproach />
        <WeHelp />
        <ChooseUs />
        <BuildNow />
        <Services/>
      </main>
    </div>
  );
}

export default App;
