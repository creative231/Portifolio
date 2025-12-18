export function Home() {
 return (
   <>
 {/* <div id="name">
    <b>Wendy Gerrar Otu</b>
 </div> */}
 <img
  src="/images/IMG_4987.jpeg"
  alt="Wendy Gerrar Otu"
  className="profile-pic"
/>
  <div>
   <h2>
     Hi, I'm Wendy
   </h2> 
 </div>
     

     {/* What I Do Section */}
     <div>
       <p>
        Frontend Developer · Graphic Designer · Geospatial Analyst
       </p>
     </div>

     <div>
        <p>
        I create functional, visual, and data-driven digital solutions by
        combining frontend development, graphic design, and geospatial
        analysis—turning ideas and data into clear, usable experiences.
        </p>
     </div>

     <div>
        <a>
            View My Projects
        </a>
        <a>
            Get In Touch
        </a>
     </div>

     <div>
        <h3>
            Frontend Development
        </h3>
        <p>
            Building responsive web applications using React, JavaScript,
            and Tailwind CSS with clean components and strong UX.
        </p>
     </div>

        <div>
        <h3>
            Graphic Design
        </h3>
        <p>
            Crafting visual identities, marketing materials, and digital
            assets using Adobe Creative Suite to communicate brand stories.
        </p>
     </div>

        <div>
        <h3>
            Geospatial Analysis
        </h3>
        <p>
            Working with GIS tools, spatial datasets, and mapping techniques
            to analyze and visualize geographic information.
        </p>
        </div>
   </>
 );
};

export default Home;