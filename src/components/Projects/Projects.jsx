import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Projects = () => {
  return (
    <div className="p-10 bg-gray-100">
          <NavBar />
      <h2 className="text-4xl bg-black text-white py-2 mt-5 font-bold text-center mb-10">
        Projects I Have Built
      </h2>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="card  bg-base-200  shadow-xl w-[1300px]">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl -mt-16 font-bold">Machine-World</h2>
            <p className="text-gray-600 mt-4">
              Machine World is an employee management system for tracking tasks,
              wages, and agreements. Employees can post workflow updates, and HR
              Executives can oversee these updates and manage payments.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Features:</h3>
              <ul className="list-disc list-inside text-left mt-2 text-gray-700">
                <li>
                  Developed a responsive company website with signup and login
                  forms, dashboard, and contact info page.
                </li>
                <li>
                  Implemented dashboard functionality for employee, HR, and
                  admin with payment options.
                </li>
                <li>
                  Ensured a seamless user experience through user-friendly
                  design.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Technologies:</h3>
              <p className="text-gray-700">
                {" "}
                React.js, Tailwind CSS, DaisyUI, Firebase, Express.js, MongoDB,
                Stripe, and various npm packages used for functionality.
              </p>
            </div>
            <div className="mt-4 flex gap-5 justify-center items-center">
              <h3 className="text-lg font-semibold">Links:</h3>
              <p className="text-blue-600">
                <a
                  href="https://machine-world.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Project
                </a>
              </p>
              <p className="text-blue-600">
                <a
                  href="https://github.com/Emrandu1989/a12-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Client
                </a>
              </p>
              <p className="text-blue-600">
                <a
                  href="https://github.com/Emrandu1989/a12-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Server
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="card  bg-base-200  shadow-xl w-[1300px]">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl -mt-9  font-bold">Epicurean-Arena</h2>
            <p className="text-gray-600 mt-4">
            Epicurean Arena is a community platform that reduces food waste and encourages food sharing. Users can easily donate surplus food, request donations, and manage contributions.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Features:</h3>
              <ul className="list-disc list-inside text-left mt-2 text-gray-700">
                <li>
                  Developed a responsive Restaurant website with signup and
                  Login form.
                </li>
                <li>
                  Implement Add Food, Available Food and Single Food Details
                  Page
                </li>
                <li>
                  Ensured a seamless user experience through intuitive design
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Technologies:</h3>
              <p className="text-gray-700">
                {" "}
                React.js, Tailwind CSS, DaisyUI, Firebase, Express.js, MongoDB,
                various npm packages used for functionality.
              </p>
            </div>
            <div className="mt-4 flex gap-5 justify-center items-center">
              <h3 className="text-lg font-semibold">Links:</h3>
              <p className="text-blue-600">
                <a
                  href="https://epicurian-arena.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Project
                </a>
              </p>
              <p className="text-blue-600">
                <a
                  href="https://github.com/Emrandu1989/a11-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Client
                </a>
              </p>
              <p className="text-blue-600">
                <a
                  href="https://github.com/Emrandu1989/a11-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Server
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="card  bg-base-200 shadow-xl w-[1300px]">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl -mt-9 font-bold">Regal Residences</h2>
            <p className="text-gray-600 mt-4">
            Epicurean Arena is a community platform that reduces food waste and encourages food sharing. Users can easily donate surplus food, request donations, and manage contributions.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Features:</h3>
              <ul className="list-disc list-inside text-left mt-2 text-gray-700">
                <li>
                Developed a luxurious hotel Website with Home , About & Contact Pages .
                </li>
                <li>
                Home Page have navbar , banner , tab section and a footer.
                </li>
                <li>
                Make the website responsive and design the the site eye catching for attracting tourist.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Technologies:</h3>
              <p className="text-gray-700">
                {" "}
                React, Tailwind CSS, Daisy UI, Firebase, MongoDB, Animista.
              </p>
            </div>
            <div className="mt-4 flex gap-5 justify-center items-center">
              <h3 className="text-lg font-semibold">Links:</h3>
              <p className="text-blue-600">
                <a
                  href="https://regalresidence.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Project
                </a>
              </p>
              <p className="text-blue-600">
                <a
                  href="https://github.com/programming-hero-web-course-4/b9a9-real-estate-Emrandu1989"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Link
                </a>
              </p>
            
            </div>
          </div>
        </div>
      </div>
       <Footer />
    </div>
  );
};

export default Projects;
