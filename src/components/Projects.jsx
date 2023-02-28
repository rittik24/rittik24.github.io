import "./Projects.css";
import mg from "../image/1mg.png";
import Zappos from "../image/Zappos.png";
import zee5 from "../image/zee5.png"
import NDTV from "../image/NDTV.png"
import Quiker from "../image/GoBazzar.com.png"
export const Project = () => {
    const projectCont = [
        {
            name: "Quiker.com Clone",
            description: "GoBazzar.com, It is a E-commerce website where user can sell and buy their products. It is a Collaborative project build in 5 days. My task is to build the navbar section.",
            tech: "Tech-Stack: HTML | CSS | JavaScript | React | Redux | MongoBD | Node.js",
            image: Quiker,
            imageAlt: "Quiker image",
            git: "https://github.com/rittik24/Gobazzar.com-clone",
            live: "https://gobazzar.vercel.app/",
        },
        {
            name: "Zee5.com Clone",
            description: "ZEE5.COM is a subscription based streaming website that allows users to watch TV shows, movies, web series and News on an internet connected device. It is a Collaborative project build in 5 days. My task is to build the navbar section.",
            tech: "Tech-Stack: HTML | CSS | JavaScript | React | ChakraUI | Firebase",
            image: zee5,
            imageAlt: "zee5 image",
            git: "https://github.com/rittik24/Zee5.com.clone",
            live: "https://comfy-dragon-c64b1f.netlify.app",
        },
        {
            name: "Zappos.com Clone",
            description: "Zappos.com is an E-commerce website where you can buy clothing, handbags, accessories, and more. It is a Collaborative project build in 5 days. My task is to build the cart page and payment page.",
            tech: "Tech-Stack: HTML | CSS | JavaScript",
            image: Zappos,
            imageAlt: "Zappos image",
            git: "https://github.com/arijeet8008/excited-roof-1669",
            live: "https://zappos-clone-de21a7.netlify.app",
        },   
        {
            name: "NDTV.com Clone",
            description: "NDTV.com is an Indian news media company, focusing on broadcast and digital news publication. It is a collaborative project build in 5 days. It is an API based project.",
            tech: "Tech-Stack: HTML | CSS | JavaScript",
            image: NDTV,
            imageAlt: "Ndtv image",
            git: "https://github.com/rittik24/NDTV.com-clone",
            live: "https://dazzling-duckanoo-e64812.netlify.app",
        },   
        {
            name: "TATA 1mg Clone",
            description: "TATA 1mg.com is an e-commerce website that provides e-pharmacy, diagnostics, e-consultation and healthcare solutions related service all across india. It is an indivitual project build in 4 days. In this project i tried my best to clone this website.",
            tech: "Tech-Stack: HTML | CSS | JavaScript | React.js",
            image: mg,
            imageAlt: "tata mg image",
            git: "https://github.com/rittik24/yielding-tongue-8280",
            live: "https://rad-axolotl-7d8ff0.netlify.app/",
        },
    ]
    return (
        <section id="projectsID" className="section-pro" >
            <h1 className="heading-project">Projects</h1>
            <div className="main-projects">

                <div className="projects" >
                    {
                        projectCont.map((ele, j) => {
                            return (
                                <div key={`project${j}`} className="pro" >
                                    <div className="data">
                                        <h2 className="pro-head">{ele.name}</h2>
                                        <p className="desc">{ele.description}</p>
                                        <p className="tech-stack"> {ele.tech}
                                        </p>
                                      
                                        <p className="repo">
                                            <a href={ele.git} rel="noopener noreferrer" target="_blank"><span >GitHub</span></a>
                                            <a href={ele.live} rel="noopener noreferrer" target="_blank"><span >Live</span></a>
                                        </p>
                                    </div>
                                    <div className="img">
                                        <img src={ele.image} alt={ele.imageAlt} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}