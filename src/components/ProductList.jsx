import React from 'react';
import { products } from '../utils/helper';

const ProductList = () => {
    return (
        <div className="max-w-[1140px] mx-auto p-4">
            <h2 className="text-center text-blue-600 text-5xl font-bold my-5">Product List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 hover:bg-white text-center"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />

                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-700 mb-3 text-md">
                            <strong>Price:</strong> {product.price}
                        </p>
                        <ul className="list-disc text-gray-600 space-y-1 text-left pl-5">
                            {product.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
