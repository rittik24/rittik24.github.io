
import {
    SiCss3, SiNpm, SiHtml5, SiJavascript,
    SiRedux, SiReact, SiMaterialui, SiNodedotjs,
    SiGithub, SiVisualstudiocode, SiNextdotjs, SiChakraui, SiTypescript, SiNetlify, SiMongodb, SiExpress
} from "react-icons/si";
import "./skills.css";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const Skills = () => {

    const { Themes, currentTheme } = useContext(ThemeContext);
    return (
        <section id="skillsID" className="section-skills" style={currentTheme === "light" ? Themes.light.home : Themes.dark.home}>
            <div className="main-skills">
                <h1 className="skills-head">Skills</h1>
                <div className="skills-cont">
                        <div className="skill" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar} >
                            <div className="badge html">
                                <SiHtml5 />
                            </div>
                            <p className="skill-ptag">HTML</p>
                        </div>
                        <div className="skill" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar} >
                            <div className="badge css">
                                <SiCss3 />
                            </div>
                            <p className="skill-ptag">CSS</p>
                        </div>
                        <div className="skill" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar}>
                            <div className="badge JavaScript">
                                <SiJavascript />
                            </div>
                            <p className="skill-ptag">JavaScript</p>
                        </div>
                        <div className="skill" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar} >
                            <div className="badge react">
                                <SiReact />
                            </div>
                            <p className="skill-ptag">React</p>
                        </div>
                        <div className="skill" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar} >
                            <div className="badge redux">
                                <SiRedux />
                            </div>
                            <p className="skill-ptag">Redux</p>
                        </div>
                        <div className="skill" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar} >
                            <div className="badge chakra">
                                <SiChakraui />
                            </div>
                            <p className="skill-ptag">Chakra-UI</p>
                        </div>
                        <div className="skill" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar} >
                            <div className="badge next">
                                <SiMaterialui />
                            </div>
                            <p className="skill-ptag">Material-UI</p>
                        </div>
                        <div className="skill" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar} >
                            <div className="badge chakra">
                                <SiTypescript />
                            </div>
                            <p className="skill-ptag">Typescript</p>
                        </div>
                        <div className="skill" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar} >
                            <div className="badge nodejs">
                                <SiNodedotjs />
                            </div>
                            <p className="skill-ptag">Node JS</p>
                        </div>
                        <div className="skill" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar} >
                            <div className="badge chakra">
                                <SiNextdotjs />
                            </div>
                            <p className="skill-ptag">Next JS</p>
                        </div>
                        <div className="skill" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar} >
                            <div className="badge chakra">
                                <SiExpress />
                            </div>
                            <p className="skill-ptag">Express JS</p>
                        </div>
                        <div className="skill" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar} >
                            <div className="badge chakra">
                                <SiMongodb />
                            </div>
                            <p className="skill-ptag">MongoDB</p>
                        </div>
                     
                </div>
                
                <h1 className="skills-head">Tools</h1>
                <div className="skills-cont">
                        <div className="skill" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar} >
                            <div className="badge chakra">
                                <SiNetlify />
                            </div>
                            <p className="skill-ptag">Netlify</p>
                        </div>
                        <div className="skill" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar} >
                            <div className="badge next">
                                <SiGithub />
                            </div>
                            <p className="skill-ptag">GitHub</p>
                        </div>
                        <div className="skill" style={currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar} >
                            <div className="badge chakra">
                                <SiVisualstudiocode />
                            </div>
                            <p className="skill-ptag">VS-Code</p>
                        </div>
                    </div>
            </div>
        </section>
    )
}