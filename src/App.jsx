// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Profil from "./Components/Profil/Profil.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { About } from "./Components/About/About.jsx";
import Projects from "./Components/Portfolio/Projects.jsx"
import Resume from "./Components/Resume/Resume.jsx";
import FormContact from "./Components/Form/FormContact.jsx";

function App() {
  return (
    <Router>
      <main className="container">
        <div className="container-content">

        <Header />
        
        <div className="profil-main">
          <Profil />
        </div>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/contact" element={<FormContact/>} />
        </Routes>
       

        </div>
      </main>
      
      {/* <Footer /> */}
    </Router>
  );
}

export default App;