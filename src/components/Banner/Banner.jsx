import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";

const Banner = () => {
    return (
        <>
              <div
  className="hero h-[1000px] lg:h-[800px]"
  style={{
    backgroundImage: "url(https://t4.ftcdn.net/jpg/02/83/46/33/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content flex flex-col-reverse lg:flex-row  text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl lg:text-4xl font-bold">Hello there <br /> I'm</h1>
       <h1 className='text-2xl lg:text-4xl font-bold'>Md Emran Hossain</h1>
       <h5 className='text-lg lg:text-2xl font-bold'>Junior Web Developer</h5>
       <p>
       I am a passionate and skilled web developer specializing in the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS). With a solid foundation in both front-end and back-end technologies, I have successfully completed several full-stack projects. I am committed to continuous learning and professional growth, aiming to contribute effectively to innovative and dynamic web development projects.
       </p>
       <div className="flex mt-9 justify-center items-center gap-5">
            <a
              href="../../../public/EmranResume.pdf"
              download
              className="inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              Download Resume
            </a>

            <div className="flex justify-center items-center gap-5">
              <a className="flex justify-center items-center text-center p-2 rounded-full bg-red-500 text-white text-xl" href="https://facebook.com/emrandu1989">
                <FaFacebook></FaFacebook>
              </a>
              <a className="flex justify-center items-center text-center p-2 rounded-full bg-red-500 text-white text-xl" href="https://www.linkedin.com/in/md-emran-hossain-659012314">
                <FaLinkedin/>
              </a>
              <a className="flex justify-center items-center text-center p-2 rounded-full bg-red-500 text-white text-xl" href="">
                <FaInstagram></FaInstagram>
              </a>
              <a className="flex justify-center items-center text-center p-2 rounded-full bg-red-500 text-white text-xl" href="">
                <FaTelegram></FaTelegram>
              </a>
              <a className="flex justify-center items-center text-center p-2 rounded-full bg-red-500 text-white text-xl" href="https://youtube.com">
                <FaYoutube></FaYoutube>
              </a>
            </div>
          </div>
     
    </div>
    <div >
       <img  className="border-red-500 lg:ml-72 border-4 w-48 h-48 md:w-[500px] md:h-[500px] rounded-[300px] object-cover" src="https://i.ibb.co/hdQ4XX6/unnamed.jpg" alt="" />
    </div>
    
  </div>
  
</div>

        </>
    );
};

export default Banner;