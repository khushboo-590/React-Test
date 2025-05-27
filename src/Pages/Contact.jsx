import React from 'react';

const Contact = () => {


    return (
        <div className="max-w-[1140px] mx-auto p-6 mt-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-black">Contact Us</h1>

            <form  className="max-w-xl mx-auto space-y-4 bg-white p-6 rounded-lg shadow-md">
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="your Email"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>

                <div>
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-3 border border-gray-300 rounded-lg h-22"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
