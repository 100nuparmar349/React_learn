import React, { useState } from 'react';
// filename app.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const To = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit() {
    if (value.trim()) {
      setTodos([...todos, value]);
      setValue('');
    }
  }

  return (
    <div class='w-screen h-screen grid place-content-center bg-slate-300'>
      <div className='max-w-80 w-full '>
    
     
      <input type="text" value={value} onChange={handleChange} placeholder="Enter todo" />
      {/* <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    Bootstrap button
                </a> */}
      <button className='bg-blue-800 text-white p-1 m-1 rounded-md ' onClick={handleSubmit}>Submit</button>
      <ul>
        {todos.map((todo, index) => (
          <li className='bg-purple-300 mt-1' key={index}>{todo}</li>
        ))}
      </ul>

      </div>
     
    </div>
  );
};

export default To;
