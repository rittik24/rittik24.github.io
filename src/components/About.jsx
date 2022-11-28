import "./About.css";
import Rittik from "../image/rittik.jpg";
import { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";
// import Typewriters from "./typewritter/Typewriter";
// import Typewriter from "typewriter-effect";

export const About = () => {
    const { Themes, currentTheme } = useContext(ThemeContext);
    return (
        <section id="aboutID" className="section-about" style={currentTheme === "light" ? Themes.light.home : Themes.dark.home}>
            <div className="main-about">
                <div className="about aboutClass">
                    <h1 className="about-head">About me</h1>
    
                    <p className="about-data">Hello, I am Rittik Haldar. I belong to Kolkata,WestBengal.</p>
                    <p className="about-data">
                        I am a b.tech graduate. I did my b.tech in the depertment of Civil Engineering from Future Institute of Technology. I am very passionate about technologies. My passion for technology has driven me to learn HTML, CSS, javascript, React and many more technologies. I find problem solving very interesting. Other than technology i love cricket, listening to music, bike riding.</p>
                </div>
                <div className="main-img aboutClass">
                    <div className="image">
                        <img src={Rittik} alt="Profile pic" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;