import "./Home.css";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import hero from "../image/hero.png";
// import { FaMoon, FaSun } from "react-icons/fa";
import Navber from "./Navbar";
import About from "./About"
export const Home = () => {
    const { Themes, currentTheme, handleChangeTheme } = useContext(ThemeContext);


    return (
        <>
       <Navber/>
        <section id="homeID" className="section-home" style={currentTheme === "light" ? Themes.light.home : Themes.dark.home}>
            <div className="home" >
                <div className="name">
                    <h2 className="info">Hi, I'am</h2>
                    <h1 className="my-name">Rittik Haldar</h1>
                    <h2 className="info">Full-Stack web developer</h2>
                    <a href="https://drive.google.com/file/d/1G8H_yi-r87ePyZgF_s8brM2cwi7EpkOh/view?usp=share_link" target="_blank" rel="noopener noreferrer" ><button className="resume" style={currentTheme === "light" ? Themes.light.resume : Themes.dark.resume} >My Resume</button></a>
                </div>
                <div className="hero">
                    <img src={hero} alt="hero" />
                </div>
                {/* <div className="theme-cont">
                    <div style={currentTheme === "light" ? Themes.light.themebtn : Themes.dark.themebtn} className="theme-btn" onClick={handleChangeTheme}>
                        {
                            currentTheme === "light" ? <FaMoon /> : <FaSun />
                        }
                    </div>
                </div> */}
            </div>
        </section>
    <About/>
        </>
    
    )
}

export default Home;