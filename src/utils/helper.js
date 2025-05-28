import React from 'react';
import img1 from '../assets/images/png/images.jpeg'
import img2 from '../assets/images/png/images 2.jpeg'
import img3 from '../assets/images/png/images 3.jpeg'
import img4 from '../assets/images/png/images 4.jpeg'
import tv1 from '../assets/images/png/tv1.webp'
import tv2 from '../assets/images/png/tv2.jpg'
import remote from '../assets/images/png/remote.png'



export const imageData = [
    { image: img1, title: "Image 1" },
    { image: img2, title: "Image 2" },
    { image: img3, title: "Image 3" },
    { image: img4, title: "Image 4" },
];
  

export const products = [
    {
        id: 1,
        name: "Samsung Smart TV",
        price: "$599",
        image: tv1,
        features: ["4K UHD", "55 inch", "Tizen OS"],
    },
    {
        id: 2,
        name: "LG OLED TV",
        price: "$899",
        image:  tv2,
        features: ["OLED Display", "Smart Features", "Wall Mountable"],
    },
    {
        id: 4,
        name: "TV Remote (Universal)",
        price: "$25",
        image: remote,
        features: ["Infrared", "Battery Included", "Compatible with all brands"],
    }
   
];

    
  