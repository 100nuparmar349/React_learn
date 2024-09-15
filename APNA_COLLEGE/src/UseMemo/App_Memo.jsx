import React, { useMemo, useState } from 'react';


const App_Memo = () => {
    const [count, setCount] = useState(0);
    const [numbers, setNumbers] = useState(0);
    const [cnt, setCnt] = useState(0);

    // Function to increase count
    const fun = () => {
        setCount(count + 1);
    };

    // Function to increase cnt and update numbers
    const done =()=> {
        setCnt(cnt + 1);
    };

    // useMemo to update numbers when cnt changes
    useMemo(() => {
        setNumbers(numbers + 1); // Update numbers when cnt changes
    }, [cnt]); // Dependency array: execute useMemo when cnt changes

    return (
        <div className='bg-slate-400 text-white'>
            <span className='text-red-800 font-medium text-2xl'>UseMemo Depends on numbers {numbers}</span>
            <button className='bg-blue-700 text-white p-1 w-18 m-2' onClick={done}>Increase</button>
            <br />

            <span className='text-black mr-3 font-medium text-2xl'>{count}</span>
            <button className='bg-blue-700 text-white p-1 w-10' onClick={fun}>Click</button>
            <br />
        </div>
    );
};

export default App_Memo;
