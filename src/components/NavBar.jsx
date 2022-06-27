import React from 'react';
import { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import Logo from '../assets/logoAb.png';
import {Link} from 'react-scroll';

const NavBar = () => {

    const [nav,setNav] = useState(false);

    const links = [
        {id: 1,
            link: 'home'
        },
        {id: 2,
            link: 'about'
        },
        {id: 3,
            link: 'portfolio'
        },
        {id: 4,
            link: 'experience'
        },
        {id: 5,
            link: 'contact'
        },
    ]
    return (
        <div className='flex justify-between items-center  h-20 bg-slate-300 p-2 pb-5'>
            <div>
                <img className='-mb-20 -ml-10 w-80' src={Logo} alt="" />
                <h1 className='ml-40 text-5xl font-signature'>mern Devoloper</h1>
            </div>
            <ul className='md:flex hidden'>
            {
                links.map(({id,link})=>(
                    <li key={id} className='capitalize px-4 cursor-pointer text-gray-500 font-medium hover:scale-105 duration-200 hover:text-red-400'>
                        <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                ))
            }
            </ul>
            <div onClick={()=>setNav(!nav)} className=" text-gray-500 cursor-pointer z-10 md:hidden">
                {nav? <FaTimes size={30}/> :<FaBars size={30}/> }
                
            </div>
            {
                nav && 
            <ul className='flex flex-col h-screen bg-gradient-to-b from-black to-gray-400 w-full justify-center items-center absolute top-0 left-0'>
            {
                links.map(({id,link})=>(
                    <li key={id} className='capitalize py-2 px-4 text-4xl cursor-pointer text-gray-200 font-medium hover:scale-105 duration-200 hover:text-red-400'>
                        <Link to={link} smooth duration={800} onClick={()=>setNav(!nav)}>
                        {link}
                        </Link>
                    </li>
                ))
            }
            </ul>
            }
           
        </div>
    );
};

export default NavBar;