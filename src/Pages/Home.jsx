import React from 'react';
import img from '../assets/images/png/dp.webp'
import ProfileCard from "../components/ProfileCard";


const Home = () => (
    <div className="max-w-[1140px] mx-auto   mt-10 ">
        <div className=" bg-gray-400">
            <ProfileCard
                name="Khushboo"
                image={img}
                bio="Frontend Developer / Learner"
                contact="khushbook48879@gmail.com"
            />
        </div>
       
    </div>
);

export default Home;
