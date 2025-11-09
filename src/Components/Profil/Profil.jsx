import { useState } from "react";
import "./Profil.css"
import Position from "../Svg/Position"
// {name='Cyrille'},{job= 'Data Analyst'}, {email= 'cyrille.gardey@gmail.com'},{ville='Paris'}
import Mail from "../Svg/Mail";
import Github from "../Svg/GitHub";
import Linkdin from "../Svg/Linkdin";
import Instagram from "../Svg/Instagram";
import Cv from "../Svg/Cv";


function Profil() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app-profil">
      <div className="image-profil">
        <img src="profil.jpg" alt="Photo de profil" className="image-circle" />
      </div>
      
      <div className="app-profil-bloc1">
        <div className="app-profil-name">
          <h3 className="name">Cyrille Gardey</h3>
          <h5 className="name-job">Data Analyst</h5>
        </div>
      </div>

       
      <button className="profil-toggle-btn" onClick={toggleMenu}>
        {isOpen ? 'Close' : 'Show More'}
      </button>

      
      <div className={`app-profil-second-affi ${isOpen ? 'open' : ''}`}>
        <div className="email-bloc">
         

            
            
              <div className="icon-icon">
                <div className="Mail">
                <Mail></Mail>

                </div>
              </div>
            <div>
              <h5 className="email-box">Email</h5>         
              <h5>cyrille.gardey@gmail.com</h5>
            </div>


          </div>
          
          <div className="localisation-bloc">
            <div className="icon-box">

              <div className="Position">
              <Position></Position>


              </div>
                
            </div>
            <div className="app-profil-info">
          
              <h5 className="localisation">Localisation</h5>
              <h5 className="ville">Paris</h5>
            
            </div>
          </div>
       

        <div className="App-profil-link">
          <ul className="Link-list" >
            <a href="https://github.com/Majailo" target="_blank" rel="noopener noreferrer">
            <li> <Github className={"classes"}></Github></li>

            </a>

            <a href="https://www.linkedin.com/in/cyrille-gardey-6b5136244/" target="_blank" rel="noopener noreferrer">
            <li> <Linkdin></Linkdin> </li>
            </a>

            <a href="https://www.instagram.com/cyrille_gy/" target="_blank" rel="noopener noreferrer">

            <li><Instagram></Instagram></li>

            </a>
            <a href="CV.pdf" download="CV.pdf" >
            
            <li><Cv></Cv></li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profil;