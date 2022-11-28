import "./Navbar.css";
// import {Link} from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link"
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from 'react';
// import { Link } from 'react-scroll';
import { ThemeContext } from '../context/ThemeContext';

function Navber() {
  const { Themes, currentTheme, handleChangeTheme } = useContext(ThemeContext);
  return (
    <>
    <div id="mainContainer" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar}>
      <div className="profilepic">
        <img src="https://avatars.githubusercontent.com/u/105980445?s=400&u=b6471fce395bab5c4f19c1d022d6d4849aedbe2e&v=4" alt="rittik" />
        <h3><Link smooth to="#home" className="link">Rittik Haldar</Link></h3>
      </div>

      <div >
      
        <h3><Link smooth to="#home" className="link">Home</Link></h3>
        <h3><Link smooth to="#about" className="link">About</Link></h3>
        <h3><Link smooth to="#skill" className="link">Skills</Link></h3>
        <h3><Link smooth to="#projects" className="link">Projects</Link></h3>
        <h3><Link smooth to="#resume" className="link">Resume</Link></h3>
        <h3><Link smooth to="#contact" className="link">Contact</Link></h3>
        <div className="theme-cont">
          <div style={currentTheme === "light" ? Themes.light.themebtn : Themes.dark.themebtn} className="theme-btn" onClick={handleChangeTheme}>
            {
              currentTheme === "light" ? <FaMoon /> : <FaSun />
            }
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Navber;