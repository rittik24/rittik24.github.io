
import Navbar from "./Navbar";
import Home from "./Home";

// import About from "./About";
import "./ResumeIndex.css";

function ResumeIndex(){
    return (
        <div >
            <div id="navbarDiv" >
              <Navbar />
            </div>
            <div class="homeDiv">
               <Home />
            </div>   
            {/* <div id="aboutDiv" >
              <About />
            </div>  */}
        </div>       
    )
}

export default ResumeIndex;