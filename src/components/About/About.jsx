import React from "react";
import Skills from "../Skills/Skills";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
          <NavBar />
         <div className="flex flex-col justify-center items-center">
         <div>
               <Skills />
          </div>
      <div className="bg-base-200  py-5 lg:px-12 rounded-xl">
      <h2 className="text-3xl text-center font-bold text-cyan-600">My Education</h2>
    <div className="lg:flex  lg:gap-12 -mt-5 lg:my-12">
    <div className="card bg-base-00 my-5  w-[500px] shadow-xl">
        <figure>
          <img 
            src="https://images.prothomalo.com/prothomalo-english/2021-07/2c69fa94-e8a0-423f-a270-8c7443e72b98/du.webp?w=1200&h=675&auto=format%2Ccompress&fit=max"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-bold">MSS(Political Science)</h2>
          <h2 className="text-lg font-bold">University Of Dhaka</h2>
           <h3 className="text-lg font-bold">CGPA: 3.33 (out of 4)</h3>
           <h4 className="text-lg font-bold">Duration: 2013-2014</h4>
        
        </div>
      </div>
      <div className="card bg-base-200  w-[500px]  shadow-xl">
        <figure>
          <img className="w-[500px] rounded-xl "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNN_XRqMICYUde_ToDf22MwBodhC1i2aSHJQ&s"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-bold">BSS(Political Science)</h2>
          <h2 className="text-lg font-bold">University Of Dhaka</h2>
          <h3 className="text-lg font-bold">CGPA: 3.18 (out of 4)</h3>
           <h4 className="text-lg font-bold">Duration: 2009-2012</h4>
        </div>
      </div>
    </div>
      </div>
         </div>
        <Footer />
    </div>
  );
};

export default About;
