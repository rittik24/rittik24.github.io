import "./About.css";
import Rittik from "../image/rittik.JPG";
export const About = () => {
    
    return (
        <section id="aboutID" className="section-about" >
            <div className="main-about">
                <div className="about aboutClass">
                    <h1 className="about-head">About me</h1>

                    <p className="about-data">Hello, I am Rittik Haldar from Kolkata,WestBengal</p>
                    <p className="about-data">
                        I'm a Full Stack Web Developer. I'm a quick learner, enthusiastic person, a team player and passionate about coding.
                        I have 1500+ hours of hands on coding.
                        I worked on various projects some of them you can check in the projects section.</p>
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