import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const menuItems = [
  {
    link: "/about",
    title: "About me"
  },
  {
    link: "/resume",
    title: "Resume"
  },

  {
    link: "/portfolio",
    title: "Projects"
  },

  {
    link: "/contact",
    title: "Contact"
  },


]

function Header() {
  const location = useLocation()
  console.log(location); /* Permt de recupere la position de la route actuel*/
  return (
    <header className="header">
      <nav>
        <ul className="header-list">
          {menuItems.map((value) => {
            return (
              <li><Link style={{
                color: value.link == location.pathname ? "#7DDFF2" : ""
              }} to={value.link}>{value.title}</Link></li>
            )
          })}
          {/* <li><Link to="/about">About me</Link></li>
          <li><Link to="/resume">Resume</Link></li> */}
          {/* <li><Link to="/projects">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;