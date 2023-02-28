
import "./contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
    return (
        <section id='contactID' className="section-footer" >

            <div className="footer" >
                <h1>Contact Me</h1>
                <div className="contact-each" >
                    <a  className="connect-content" rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/rittik-haldar">
                        <FaLinkedin />
                    </a>
                    <a  className="connect-content" rel="noopener noreferrer" target="_blank" href="mailto:rttkhaldar@gmail.com">
                        <FaEnvelope />
                    </a>
                    <a  className="connect-content" rel="noopener noreferrer" target="_blank" href="https://github.com/rittik24">
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