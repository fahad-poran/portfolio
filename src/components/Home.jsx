import React from 'react';
import heroImage from '../assets/heroImage.jpeg';
import {AiOutlinePaperClip} from 'react-icons/ai';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center text-white h-full px-4 md:flex-row '>
                <div className='flex flex-col h-full justify-center'>
                    <h2 className='text-4xl sm:text-7xl font-bold'>I'm A full stack Developper</h2>
                    <p className='py-4 max-w-md'>MERN Stack Developer | Seeking Entry Level Software Engineer Position | Experienced with PHP & .NET Framework Student at American International University-Bangladesh </p>
                    <div><Link to={'portfolio'} smooth duration={500} className='cursor-pointer group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-400 hover:scale-105 duration-300'>Portfolio<span className='pl-2 group-hover:rotate-45 duration-500'> <AiOutlinePaperClip size={25}/>
                        </span></Link></div>
                </div>
            <img src={heroImage} alt="" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    );
};

export default Home;