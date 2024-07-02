import React from 'react';

const Banner = () => {
    return (
        <>
              <div
  className="hero h-[800px]"
  style={{
    backgroundImage: "url(https://t4.ftcdn.net/jpg/02/83/46/33/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Hello there <br /> I'm</h1>
       <h1 className='text-4xl font-bold'>Md Emran Hossain</h1>
       <h5 className='text-2xl font-bold'>Junior Web Developer</h5>
       <p>
       I am a passionate and skilled web developer specializing in the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS). With a solid foundation in both front-end and back-end technologies, I have successfully completed several full-stack projects. I am committed to continuous learning and professional growth, aiming to contribute effectively to innovative and dynamic web development projects.
       </p>
     
    </div>
  </div>
</div>
        </>
    );
};

export default Banner;