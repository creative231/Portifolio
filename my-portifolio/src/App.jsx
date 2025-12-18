import { Routes, Route } from "react-router-dom";
import { Home} from './pages/Home';
import {About} from './pages/About';
import {Projects} from './pages/Projects';
import { Contact} from './pages/Contact';
import {UserUsername} from './components/UserUsername';
import { Navbar } from './components/Navbar';
// import {Images} from "../images/IMG_4987.jpeg";

<img
  src={Images}
  alt="Wendy Gerrar Otu"
  className="profile-pic"
/>



export default function App(){
return (
    <section>

        <div>
    <h1>Portifolio</h1>
    </div>
 <Navbar />
      {/* <div>
            <h1>My Portfolio</h1>
           </div> */}
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>


{/* <div>
    <h1>Portifolio</h1>
     <Home />
     <div id ="about-me">
            <h2>About Me</h2>
            <p>
             I'm a multidisciplinary professional with experience in frontend
        development, graphic design, and geospatial analysis. My background
        allows me to approach problems from both technical and visual
        perspectives.   
            </p>
            </div>
              
              <div>
            <p>
              As a frontend developer, I build scalable interfaces using React and
        modern CSS frameworks. As a graphic designer, I create visual materials
        such as flyers, posters, and certificates. As a geospatial analyst, I
        work with GIS systems, spatial data, and mapping tools to extract
        meaningful insights.  
            </p>
            </div>

             <div>
                <h3>
                Tools & Technologies    
                </h3>
              </div>  

                <div>
                <ul>
                    <li>HTML, CSS, JavaScript</li>
                     <li>React, Vite</li>
                     <li>Tailwind CSS</li>
                     <li>Figma, Adobe Illustrator, Photoshop</li>
                     <li>GIS tools (QGIS / ArcGIS), spatial data analysis, mapping</li>
                     <li>Git & GitHub</li>
                </ul>
                </div>
      <div>
        <h2> Projects</h2>
        </div>

        <div>
        <p>
        Selected projects across frontend development, graphic design,
        and geospatial analysis.
        </p>
        </div>
     <div>
        <h2>Contact</h2>
        </div>

        <div>
        <p>
        I'm open to opportunities in frontend development, graphic design,
        and geospatial analysis. Let's connect.
        </p>
        </div>

        <div>
            <a href= "wgerrar2002@gmail.com">
                Email
            </a>
            </div>

            
           <div> 
            <a href= "https://www.linkedin.com/in/wendy-gerrar-otu-283752246">
                LinkedIn
            </a>
            </div>
            
            <div> 
            <a href= "https://github.com/creative231">
                GitHub
            </a>
        </div>
</div> */}
    </section>
);
}