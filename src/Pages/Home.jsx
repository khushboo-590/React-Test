import React from 'react';
import dp from '../assets/images/png/dp.webp'
import ProfileCard from "../components/ProfileCard";


const Home = () => (
    <div className="max-w-[1140px] mx-auto p-6   mt-10 ">
        <div className="min-h-screen  p-6 bg-gray-400">
            <ProfileCard
                name="Khushboo"
                image={dp}
                bio="Frontend Developer | Learner"
                contact="khushbook48879@gmail.com"
            />
        </div>
       
    </div>
);

export default Home;
