import { About } from "./About";
import { Home } from "./Home";
import  Navbar  from "./Navbar";
import { Skills } from "./Skills";
import "./ResumeIndex.css";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';
import { Project } from "./Projects";
import { Contact } from "./Contact";
import GitHubStats from "./GitHubStats";





export const ResumeIndex = () => {
    const { Themes, currentTheme } = useContext(ThemeContext);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 800)
    }, [])

    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Project />
            <GitHubStats />
            <Contact />
        </div>
    )
}