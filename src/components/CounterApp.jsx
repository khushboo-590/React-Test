import React, { useState, useEffect } from "react";

const CounterApp = () => {
    const [count, setCount] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        console.log(`Count is now: ${count}`);
    }, [count]);

    return (
        <div className="flex flex-col items-center justify-center  bg-gray-100 py-20">
            <h1 className="text-5xl font-bold text-gray-800 mb-6"> Counter App</h1>
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm text-center">


                <div className="text-4xl font-semibold mb-6 text-blue-600">Count: {count}</div>

                <div className="flex justify-center gap-4 mb-6">
                    <button
                        onClick={() => setCount(count + 1)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        +
                    </button>

                    <button
                        onClick={() => setCount(count - 1)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                        -
                    </button>
                </div>

                <div
                    className="relative inline-block"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                >
                    <button
                        onClick={() => setCount(0)}
                        className={`text-white px-4 py-2 rounded ${count === 0
                                ? "bg-gray-400 "
                                : "bg-green-500 "
                            }`}                     
                    >
                        Reset
                    </button>

                    {showTooltip && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow-md">
                           count
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CounterApp;
