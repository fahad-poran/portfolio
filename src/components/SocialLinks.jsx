import React from 'react';
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import {BsPersonLinesFill} from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id:1,
            child: (
                <>
                LinkedIn <FaLinkedin size={40}/>
                </>
            ),
            href: 'https:linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                GitHub <FaGithub size={40}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/fahad-abdullah-14ba63216/',
          
        },
        {
            id:3,
            child: (
                <>
                Gmail <FiMail size={40}/>
                </>
            ),
            href: 'https:linkedin.com',
            
        },
        {
            id:4,
            child: (
                <>
                FaceBook <FaFacebook size={40}/>
                </>
            ),
            href: 'https://www.facebook.com/ehoteparena',
           
        },
        {
            id:5,
            child: (
                <>
                Resume <BsPersonLinesFill size={40}/>
                </>
            ),
            href: '/Abdullah-Al-Fahad.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({id,child,href,style,download})=>(
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-white ml-[-100px] hover:ml-0 duration-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 hover:rounded-md" + "" + style}><a href={href} className='flex justify-between items-center w-full text-white'
                    download={download} target="_blank">{child}</a></li>

                ))}
                
            </ul>
        </div>
    );
};

export default SocialLinks;