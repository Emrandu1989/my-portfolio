import React from 'react';
import htmlLogo from '../../assets/html.webp';
import cssLogo from '../../assets/css.webp';
import tailwindCssLogo from '../../assets/tailwind-css-hd-logo (1).png';
import daysiUiLogo from '../../assets/daysi.svg';
import javaScriptLogo from '../../assets/javaScript.png';
import reactLogo from '../../assets/react.svg';
import mongoDbLogo from '../../assets/mongoDb.png';
import expressJsLogo from '../../assets/express.png';
import nodeJsLogo from '../../assets/nodejs.png';

const Skills = () => {
    return (
        <div className='my-5 bg-base-200 px-12 py-5 rounded-xl'>
            <div className='text-2xl my-5 font-bold text-cyan-500'>My Skills</div>
            <div className='grid grid-cols-5 gap-4 '>
                <img className='w-24' src={htmlLogo} alt="HTML Logo" />
                <img className='w-24' src={cssLogo} alt="CSS Logo" />
                <img className='w-24' src={tailwindCssLogo} alt="Tailwind CSS Logo" />
                <img className='w-24' src={daysiUiLogo} alt="DaisyUI Logo" />
                <img className='w-24' src={javaScriptLogo} alt="JavaScript Logo" />
                <img className='w-24' src={reactLogo} alt="React Logo" />
                <img className='w-24' src={mongoDbLogo} alt="MongoDB Logo" />
                <img className='w-32' src={expressJsLogo} alt="Express.js Logo" />
                <img className='w-24' src={nodeJsLogo} alt="Node.js Logo" />
            </div>
        </div>
    );
};

export default Skills;