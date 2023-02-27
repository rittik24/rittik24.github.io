import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import "./contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
    const { Themes, currentTheme } = useContext(ThemeContext);
    return (
        <section id='contactID' className="section-footer" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar}>

            <div className="footer" >
                <h1>Contact Me</h1>
                <div className="contact-each" >
                    <a style={currentTheme === "light" ? { color: "#150050" } : { color: "#FBFFE2" }} className="connect-content" rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/rittik-haldar">
                        <FaLinkedin />
                    </a>
                    <a style={currentTheme === "light" ? { color: "#150050" } : { color: "#FBFFE2" }} className="connect-content" rel="noopener noreferrer" target="_blank" href="mailto:rttkhaldar@gmail.com">
                        <FaEnvelope />
                    </a>
                    <a style={currentTheme === "light" ? { color: "#150050" } : { color: "#FBFFE2" }} className="connect-content" rel="noopener noreferrer" target="_blank" href="https://github.com/rittik24">
                        <FaGithub />
                    </a>
                </div>
                <div className="info">
                    <h4>rttkhaldar@gmail.com</h4>
                    <h4>7029358074</h4>
                </div>
                <p className="credit">© 2023 Rittik. All rights are reserved.</p>
            </div>
        </section>
    )
}