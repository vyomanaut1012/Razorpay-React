import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Box from "./components/Box";
import SecFeature from "./components/SecFeature"
import NewFeature from "./components/NewFeature";
import Core from "./components/Core";
import LastSection from "./components/LastSection";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Feature/>
     <Box/>
     <SecFeature/>
     <NewFeature/>
     <Core/>
     <LastSection/>
     <Footer/>
    </div>
  );
}

export default App;
