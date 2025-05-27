import React from 'react'
import ProductList from "../components/ProductList";


const About = () => {
  return (
      <div className="max-w-[1140px] mx-auto p-6   mt-8">
          {/* <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">About Us</h1>
          <p className="text-gray-600 leading-relaxed text-lg text-center p-3">
              This is the About page. Here, you can provide detailed information about your
              application or organization. Use this space to explain your mission, vision, or
              any relevant details that users should know.
          </p> */}
          <div className="p-4 bg-gray-400">
              <ProductList />
          </div>
      </div>
      
  )
}

export default About
