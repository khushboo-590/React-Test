import React from 'react';
import {products} from '../utils/helper'

const ProductList = () => {
    return (
        <div className=' max-w-[1140px] mx-auto '>
            <h2 className=' text-center text-blue-600 text-4xl font-bold my-10'>Product List</h2>
            {products.map((product) => (
                <div
                    key={product.id}
                    className="border rounded-lg shadow-md p-6 mb-6 hover:shadow-xl transition-shadow duration-300"
                >
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-700 mb-3">
                        <strong>Price:</strong> {product.price}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>
    );
        };

export default ProductList;
