import React from 'react'
import Content from './Contents';
// import Content from './Contents'

// props component ko resuable banata hai


const user={
    username:"Hedy lemur",
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imagesize:90,
}

const App = () => {
  return (
    <>
    <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4' >Tailwind Test</h1>
    


  
        {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-32 h-32 rounded-full mx-auto" src="https://images.pexels.com/photos/20831561/pexels-photo-20831561/free-photo-of-beautiful-bride-posing-by-the-moonlight-at-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=" Photo Not load" width="384" height="512" />
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg fon">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

        
        {/* <img className='avatar' src={user.imageUrl} alt={'Phot of' + user.username}/>
      
       <Content data={user.username}/> */}
  
    

    </>
  
  );
}

export default App
