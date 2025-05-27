import React, { useState, useEffect } from "react";

const CounterApp = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count is now: ${count}`);
    }, [count]);

    return (
        <div className="flex flex-col items-center justify-center max-[1140px] py-20 mx-auto">
            <h1 className="text-5xl font-bold text-blue-600 mb-6">Counter App</h1>
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm text-center">
                <div className="text-4xl font-semibold mb-6 text-green-900">
                    Count: {count}
                </div>

                <div className="flex justify-center gap-4 mb-6">
                    <button
                        onClick={() => setCount(count + 1)}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        +
                    </button>
                    <button
                        onClick={() => setCount(count - 1)}
                        className="bg-red-500  text-white px-4 py-2 rounded"
                    >
                        -
                    </button>
                </div>

                <div className="relative group">
                    <button
                        onClick={() => setCount(0)}
                        className={`text-white px-4 py-2 rounded ${count === 0 ? "bg-gray-400" : "bg-green-500"}`}
                    >
                        Reset 
                    </button>
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded hidden group-hover:block z-10">
                        Reset position
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CounterApp;
