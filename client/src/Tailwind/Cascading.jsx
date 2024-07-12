import React from 'react'

const Cascading = () => {
  return (
    <div className='w-full h-full flex flex-col m-4 justify-center border border-orange-400'>
      <h1 className='font-medium text-5xl m-4'>Hello</h1>
      <div className='bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 via-purple-200 hover:to-yellow-200'>
        Hello
      </div>

      <h1 className=' font-bold text-base'>Font weight</h1>
      


    <div>
    <h1 className='font-bold text-xl'>Topic : Line Height and Letter spacing</h1>

    <p className='leading-tight tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in, obcaecati laboriosam quaerat tempore maxime dolor pariatur aliquam voluptas, laudantium amet nemo harum. Totam voluptas omnis deserunt eveniet asperiores inventore.</p>

    <p class="-tracking-2 text-[15px] font-bold bg-gradient-to-tr  from-red-200 to-yellow-300 m-3  w-screen">The quick brown fox ...</p>
    </div>

    <div className='p-5'>
      <h1>Box Model</h1>
      <div className='h-32 w-44 bg-slate-300 rounded border-4 border-blue-600 m-7 inline-block font-medium opacity-20 hover:opacity-100  transition delay-500 ease-in-out duration-1000'>
        Hello
      

      </div>
      <button class="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... bg-blue-700 text-white rounded p-2 font-medium ">
  Hover me
</button>
    </div>

    
    </div>
      
  )
}

export default Cascading
