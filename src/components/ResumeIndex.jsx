import { About } from "./About";
import { Home } from "./Home";
import  Navbar  from "./Navbar";
import { Skills } from "./Skills";
import "./ResumeIndex.css";
import { Project } from "./Projects";
import { Contact } from "./Contact";
import {GitHubStats} from "./GitHubStats";


export const ResumeIndex = () => {
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