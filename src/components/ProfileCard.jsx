import React from 'react';

const ProfileCard = ({ name, image, bio, contact }) => {
    const handleClick = () => {
        alert("Fill your contact number");
    };

    return (
        <div className="px-4 py-6"> 
            <h1 className="text-3xl md:text-5xl text-blue-600 font-bold text-center mb-4 md:mb-6">
                Profile Card
            </h1>

            <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-2 md:p-6 text-center">
                <img
                    src={image}
                    alt={name}
                    className="mx-auto rounded-full w-28 h-28 md:w-50 md:h-50 object-cover mb-3"
                />

                <h2 className="text-xl md:text-2xl font-bold text-green-700">{name}</h2>

                <p className="text-sm md:text-base text-gray-600 mt-1">{bio}</p>

                <p className="text-sm text-blue-600 mt-2 cursor-pointer break-all">
                    {contact}
                </p>

                <button
                    onClick={handleClick}
                    className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                >
                    Contact
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
