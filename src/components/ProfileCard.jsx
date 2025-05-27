import React from 'react';

const ProfileCard = ({ name, image, bio, contact }) => {
    const handleClick = () => {
        alert(`You clicked on ${name}'s contact`);
    };

    return (
        <div className="max-w-md mx-auto mt-10 ">
            <h1 className="text-5xl text-pink-600 font-bold text-center mb-3">Profile Card</h1>
        <div className="border p-4 rounded-md shadow-md mx-auto bg-white text-center max-w-[520px] h-[500px] mt-20">
            <img src={image} alt={name} className=" mx-auto rounded-full mb-4 w-72 h-72" />
            <h2 className="text-4xl font-bold text-green-700">{name}</h2>
            <p className="text-lg text-gray-600">{bio}</p>
            <p className="text-lg text-blue-600 mt-2  cursor-pointer">{contact}</p>
            <button
                onClick={handleClick}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Contact
            </button>
            </div>
            </div>
    );
};

export default ProfileCard;
