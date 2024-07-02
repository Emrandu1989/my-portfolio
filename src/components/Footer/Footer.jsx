import React from 'react';
import { FaBeer, FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <footer className="footer flex flex-col lg:flex-row justify-between lg:px-36 items-center font-semibold bg-blue-700 text-neutral-content p-10">
                <aside className='flex flex-col space-y-2 justify-center items-center'>
                    <img  className='w-36 rounded-lg' src="https://cdn.sanity.io/images/tlr8oxjg/production/1ca7b34a8d5308a03ae186dfe72caabce0327fe2-1456x816.png?w=3840&q=80&fit=clip&auto=format" alt="" />
                     
                     <h2 className='text-xl'>Current Address</h2>
                    <p className=''>
                        11/A,Dhaka Housing, Adabor
                        <br />
                       Mohammadpur, Dhaka.
                      
                    </p>
                    <p>phone:(+880)1638587670</p>
                    <p>Email:emrandu1989@gamil.com</p>
                </aside>
                <nav className='flex flex-col justify-center items-center'>
                    <h6 className="text-2xl font-semibold text-white mb-2">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://github.com/Emrandu1989" target="_blank" rel="noopener noreferrer">
                        <FaGithub  className='text-2xl'/>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className='text-2xl'/>
                        </a>
                        <a href="https://facebook.com/emrandu1989" target="_blank" rel="noopener noreferrer">
                           <FaFacebook className='text-2xl'/>
                        </a>
                    </div>
                    <div className='mt-5'>
                         <h2 className='text-xl'>Permanent Address</h2>
                         <p>Vill: Mirkamary, post:Joynagar</p>
                         <p>U.P:Ishurdi, Dist:Pabna</p>
                    </div>
                </nav>
            </footer>
        </>
    );
};

export default Footer;