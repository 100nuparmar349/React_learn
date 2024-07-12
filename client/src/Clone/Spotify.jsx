import React from 'react'

const Spotify = () => {
  return (
    <div className='h-screen w-screen p-0 m-0 flex flex-row'>
        <div className=' max-w-80 w-full h-screen box-border'> 
            <div className='bg-customGray p-3'>
                <div className='ml-4'>
                <a href="/" className='text-white font-medium '>Spotify</a>
                <ul>
                    <li className='text-white font-medium m-4  p-3'> <i class="fa-solid fa-house"></i><p className='ml-3 inline-block'>Home</p></li>
                    <li className='text-white font-thin m-4 p-3'> <i class="fa-brands fa-searchengin"></i><p className='ml-3 inline-block'>Search</p></li>
                </ul>

                </div>
               
            </div>





            <div className='bg-customGray mt-5 h-60 overflow-auto   relative'>

              
                <div className='fixed max-w-80  w-full  bg-bg100 z-10 p-1 flex items-center justify-between'>
    <i class="fa-solid fa-bookmark text-xl p-1"></i>
    <button className='ml-3 p-1 font-medium'>Your Library</button>
    <span className='text-2xl font-medium p-1 mr-2 float-right'>+</span>
  </div>


  

  <div className='mt-16 p-2 m-2 bg-bg100 rounded-lg'>
    <div className='ml-2'>
      <h1 className='text-white font-bold mt-2 text-xl'>Create your first playlist</h1>
      <h3 className='text-white text-xs mt-3 font-medium leading-3 tracking-wider'>It's easy, we'll help you</h3>
      <button className='bg-white text-black mt-3 p-2 font-medium text-xs rounded-full'>Create playlist</button>
    </div>
  </div>

  <div className='bg-bg100 p-2 m-2 rounded-lg'>
    <div className='ml-2'>
      <h1 className='font-bold text-xl'>Let's find some podcasts to follow</h1>
      <h2 className='font-semibold text-sm m-1'>We'll keep you updated on new episodes</h2>
      <button>Browse podcasts</button>
    </div>
  </div>



  <div>
   
  </div>
</div>

<div className='bg-customGray mt-11  '> 

<div className='m-4 flex justify-between flex-wrap w-60'>
    <div className='m-2'>
        <a href="" className='text-white text-xs font-thin '>Legal</a>
    </div>
    <div className='m-2'>
        <a href="" className='text-white text-xs font-thin '>Safety and Privacy Center</a>
    </div> 
    <div className='m-2'>
        <a href="" className='text-white text-xs font-thin '>Privacy Policy</a>
    </div>
     <div className='m-2'>
        <a href="" className='text-white text-xs font-thin '>Cookies</a>
    </div> 
    <div className='m-2'>
        <a href="" className='text-white text-xs font-thin '>About Ada</a>
    </div>
     <div className='m-2'>
        <a href="" className='text-white text-xs font-thin '>Accessibility</a>
    </div>
</div>
<div className='m-5'>
    <button className='bg-black text-white p-2 rounded-full font-extrabold text-base border border-white'>English</button></div>
</div>



          
        </div>



       

      
    </div>
  )
}

export default Spotify
