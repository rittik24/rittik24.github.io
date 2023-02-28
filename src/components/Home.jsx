import "./Home.css";
import hero from "../image/hero.png";
import Resume from "./Resume.pdf"


export const Home = () => {
    const Handleonclick=()=>{
        window.open(`${Resume}`,"_blank");
       }
 
    return (
        <section id="homeID" className="section-home" >
            <div className="home" >
                <div className="name">
                    <h2 className="infoo">Hi, I'am</h2>
                    <h1 className="my-name">RITTIK HALDAR</h1>
                    <h2 className="infoo">Full-Stack web developer</h2>
                    <a href={Resume} download="fw19_0770_Rittik_Haldar_Resume" onClick={Handleonclick} ><button className="resume"  >My Resume</button></a>
                </div>
                <div className="hero">
                    <img src={hero} alt="hero" />
                </div>
            </div>
        </section>
    )
}

