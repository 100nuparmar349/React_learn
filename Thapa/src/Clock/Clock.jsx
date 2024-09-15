import React from 'react'

const Clock = () => {
  return (
    <div>
     <section className='todo-container'>
    <header> <h1>Todo List</h1>
    <h2 className='data-time'>Date - Time</h2> </header>

    <section className='form'>
      <form onSubmit={handleform} ></form>
    </section>
    
     </section>


    </div>
  )
}

export default Clock
