import React from 'react';

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                {/* <p className='text-xl mt-20 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos soluta maxime, architecto non, quo voluptatem quasi numquam officia consequuntur assumenda, enim quod eius! Accusamus libero iusto ipsum doloremque eligendi voluptatum eaque corporis voluptatibus? Suscipit mollitia at, facilis nulla nihil magnam consequuntur voluptas dolores? Sunt esse eaque quas deserunt deleniti?</p> <br />
                <p className='text-xl'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid id temporibus quia, fugit soluta illum nam exercitationem nihil in quibusdam.</p> */}
                <p className='text-xl mt-20 '>I completed my BSc from AIUB Which is one of the top ranking private University of Bangladesh. My Department was software Engineering, I also done my desired MERN full stack Course from Programming Hero Community which is online platform where the Complete guide for building a website is present. There I had to complete 12 Projects Where 4 Projects ware based on Complete Full Client And Server site</p> <br />
                <p className='text-xl'>There I used tools like style framework like scss/ Bootstrap tailwind Meterial UI, In the backend I learned Node.Js Firebase Auth, Context API, Axios, Currently I'm also Learning GraphQL and Next.JS framework Course of Udemy .</p>
            </div>
        </div>
    );
};

export default About;