import React from 'react';
import cycleImage from './cycle.png';
import ritikImage from './ritik.png'
import laptopImage from './Laptop.png'
import pictureImage from './Photo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Flipkart = () => {
  return (
    <div className='bg-slate-100 p-2 w-screen grid items-center '>

   
    <div className='w-full'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary flex justify-between ">
  <div class="container-fluid">
    <a class="navbar-brand ml-2 mt-30" href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <form className="d-flex w-6/12" role="search">
    <div className='w-full bg-slate-200 flex items-center  '>
     <button className='ml-2  '><span><svg width="24" height="24" class="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg> </span></button> 
       
     <input type="text" className='w-9/12 bg-slate-200 p-2 rounded text-lg   outline-none text-black' placeholder='Search for Products , Brands and More'/>
       
    </div>
    
      </form>
    <div class=" w-4/12 mr-3 " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex justify-between items-center">
      <li class="nav-item dropdown">
     
      <div className='flex flex-row hover:bg-blue-700 rounded group '> 
  <img className='hover:text-white' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="" />
  <a className="nav-link dropdown-toggle font-medium no-underline  group-hover:text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Login
  </a>
</div>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">My Profile</a></li>
            <li><a class="dropdown-item" href="#">Flipkart Plus Zone</a></li>
            <li><a class="dropdown-item" href="#">Order</a></li>
            <li><a class="dropdown-item" href="#">Rewards</a></li>
            <li><a class="dropdown-item" href="#">Gift Cards</a></li>
          </ul>
        </li>
        <li class="nav-item  p-1 flex ">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="" />

          <a class="text-[1.2rem] text-black  no-underline  " aria-current="page" href="#">Cart</a>
        </li>
        <li class="nav-item flex">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="" />
          <a class="text-[1.2rem] text-black no-underline " href="#">Become a Seller</a>
        </li>
      
       
       
      </ul>
     
    </div>
  </div>
</nav>

{/* // Main Container  */}
<div className='max-w-full w-full'>
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={laptopImage} class="d-block w-100" alt="..." /> 
      <div class="carousel-caption d-none d-md-block">
 
      </div>
    </div>
    <div class="carousel-item">
      <img src={ritikImage} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item">
      <img src={cycleImage} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>




{/* card Desing */}

<div className='w-screen'>

  
<div className='border border-slate-400 mt-3 p-3 bg-white w-full'>


{/* // Card template 1*/}
{/* Heading */}
<div className=''> <h3>Best Deals on SmartPhone</h3> </div>


<div className='w-full flex flex-wrap box-content mt-4 ml-2'>

<div class="w-60 h-64 border border-slate-900 p-2 ">
<img src="https://rukminim1.flixcart.com/image/70/70/xif0q/monitor/c/n/8/-original-imahf4rbgwtzquxh.jpeg?q=90" class="card-img-top"/>

<div class=" mt-4 grid place-items-center ">
<p className='font-medium m-0'>Monitor</p>
<p className=''>From $6599</p>

</div>
</div>

{/* 2 */}
<div class="h-64 w-52 border border-slate-900 p-2 ml-4 grid place-items-center">

<img class="h-48 w-40 object-contain card-img-top"  src="https://rukminim1.flixcart.com/image/70/70/xif0q/monitor/n/r/g/-original-imagyr8vrpzzgrac.jpeg?q=90"/>

<div class="text-center">
<p className='font-medium m-0'>Monitor</p>
<p className='font-medium '>From $9934</p>

</div>
</div>

{/* 3 */}
<div class="h-64 w-60 border border-slate-900 p-2 ml-4  grid place-items-center">

<img class="h-48 w-40 object-contain card-img-top"  src="https://rukminim1.flixcart.com/image/70/70/xif0q/monitor/n/r/g/-original-imagyr8vrpzzgrac.jpeg?q=90"/>

<div class="text-center">
<p className='font-medium m-0'>Monitor</p>
<p className='font-medium '>From $9934</p>

</div>
</div>


{/* 4 */}

<div class="h-64 w-60 border border-slate-900 p-2 ml-4  grid place-items-center">

<img class="h-48 w-40 object-contain" src="https://rukminim2.flixcart.com/image/70/70/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=90" />

<div class="text-center">
<p class="font-medium m-0 text-sm">Poco M6 Pro 5g</p>
<p class="text-sm">From $6599</p>
</div>
</div>


{/* 5*/}
<div class="h-64 w-52 border border-slate-900 p-2 ml-4  grid place-items-center ">

<img className='h-36  object-fill' src="https://rukminim2.flixcart.com/image/70/70/xif0q/mobile/g/b/x/-original-imagtt4h4ptmxgwn.jpeg?q=90"
class="card-img-top"/>

<div class="text-center ">
<p className='font-medium  m-0'>vivo T2 Pro 5g</p>
<p className=''>From $250</p>

</div>
</div>

{/* 6 */}
<div class="h-64 w-52 border border-slate-900 p-2 ml-4 grid place-items-center">

<img className='h-36 object-contain' src="https://rukminim2.flixcart.com/image/70/70/xif0q/mobile/j/b/n/-original-imahyuhfzvybhaat.jpeg?q=90"
class="card-img-top"/>

<div class="text-center">
<p className=' m-0 font-medium'>RealMe P1 5g</p>
<p className=''>From $200</p>

</div>
</div>

</div>
</div>


<div className=' border  mt-3 p-3 w-full bg-white '>


{/* // Card template 1*/}
{/* card w-52  border border-slate-500 p-3 m-1 */}


{/* Heading */}

<div className=''> <h4>Best Fashion Brand For you</h4> </div>


<div className='w-full flex flex-wrap  box-content  mt-4  '>


{/* 1 */}
<div class="h-64 w-52 border border-slate-900 p-2 ml-4  grid place-items-center">

<img className='h-40 object-contain' src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/9/j/d/5-rd570-5-roadster-pink-original-imahyq6zxnq6ryy8.jpeg?q=70"
class="card-img-top"/>

<div class="text-center">
<p className=' m-0 font-medium'>Adidas, Puma & More</p>
<p className=''>From $100</p>

</div>
</div>

{/* 2 */}
<div class="h-64 w-52 border border-slate-900 p-2 ml-4  grid place-items-center ">

<img className='object-contain h-40 card-img-top' src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/d/0/2/4-rlo166-red-tape-black-original-imagvwnnh3zhwn7d.jpeg?q=70"/>

<div class="text-center">
<p className='font-medium m-0'>Woodland, Crocs, Red Tape...</p>
<p className='font-medium '>From $10</p>

</div>
</div>

{/* 3 */}
<div class="h-64 w-52 border border-slate-900 p-2 ml-4 grid place-items-center">

<img class="h-48 object-contain card-img-top" src="https://rukminim1.flixcart.com/fk-p-flap/70/70/image/e8f3384b2fb4f508.jpg?q=90"/>

<div class="text-center">
<p className='font-medium m-0'>Branded Kurtas</p>
<p className='font-medium '>From ₹399</p>

</div>
</div>


{/* 4 */}

<div class="h-64 w-60 border border-slate-900 p-2 ml-4  grid place-items-center">

<img class="h-48  object-contain card-img-top" src="https://rukminim1.flixcart.com/image/70/70/ktszgy80/sandal/x/t/y/6-35-4561-39-mochi-28-antique-gold-original-imag72h92cyrp86p.jpeg?q=90"  />

<div class="text-center">
<p class="font-medium m-0 text-sm">Metro Mochi</p>
<p class="text-sm">From ₹999</p>
</div>
</div>


{/* 5*/}
<div class="h-64 w-60 border border-slate-900 p-2 ml-4 grid place-items-center">


<img className='h-48 object-contain card-img-top' src="https://rukminim2.flixcart.com/image/70/70/xif0q/dress/a/s/p/xl-ttj6006315-tokyo-talkies-original-imagh2kfvhyqq9by.jpeg?q=90"/>

<div class="text-center">
<p className='font-medium  m-0'>Dhamak Offer on Brands</p>
<p className=''>Under ₹399</p>

</div>
</div>

{/* 6 */}
<div class="h-64 w-60 border border-slate-900 p-2 ml-4 grid place-items-center">

<img className='h-48 object-contain' src="https://rukminim2.flixcart.com/fk-p-flap/70/70/image/27e3d591616e68ba.jpg?q=90"
class="card-img-top"/>

<div class="text-center">
<p className=' m-0 font-medium'>Kurti</p>
<p className=''>From ₹399</p>

</div>
</div>

</div>
</div>


{/* Third Component */}

<div className=' border  mt-3 p-3 w-full bg-white '>


{/* // Card template 1*/}
{/* card w-52  border border-slate-500 p-3 m-1 */}


{/* Heading */}

<div className=''> <h4>Top Deals on Fashion</h4> </div>


<div className='w-full flex flex-wrap justify-center items-center box-content  mt-4  '>


{/* 1 */}
<div class="h-64 w-52 border border-slate-900 p-2 ml-2  grid place-items-center">

<img className=' w-32 object-contain ' src="https://rukminim2.flixcart.com/flap/70/70/image/fb6b7ecf57d73e82.jpg?q=90"
class="card-img-top"/>

<div class="text-center">
<p className=' m-0 font-medium'>Bata, Red chief</p>
<p className=''>Under ₹1000</p>

</div>
</div>

{/* 2 */}
<div class=" h-64 w-52 border border-slate-900 p-2 ml-2 grid place-items-center ">

<img className='w-40 h-40 object-contain card-img-top'src="https://rukminim2.flixcart.com/image/70/70/xif0q/top/e/e/c/xl-tttp007785-tokyo-talkies-original-imagm3ggrs3adgbv.jpeg?q=90" />

<div class="text-center mt-2 w-full">
<p className='font-medium m-0 overflow-hidden'>Top, Trousers,Nightsuit</p>
<p className=''>Under ₹599</p>

</div>
</div>

{/* 3 */}
<div class="h-64 w-60 border border-slate-900 p-2 ml-2 grid place-items-center">

<img class="h-48 w-40 object-contain card-img-top" src="https://rukminim2.flixcart.com/image/70/70/xif0q/dress/p/o/f/xs-ttj6008720-tokyo-talkies-original-imagrbme7cmmphzb.jpeg?q=90"/>

<div class="text-center">
<p className='font-medium m-0'>Dresses, Top, Jeans</p>
<p className=''>Under ₹399</p>

</div>
</div>


{/* 4 */}

<div class="h-64 w-60 border border-slate-900 p-2 ml-2 mt-3">

  <div className='grid place-items-center'>
  <img class="h-48 w-40 object-contain" src="https://rukminim2.flixcart.com/image/70/70/l16rde80/kids-track-pant/k/m/d/0-3-months-blnpaj125-billion-original-imagct3fz4ymhbhx.jpeg?q=90"  />

  <div class="text-center">
<p class="font-medium m-0 text-sm">Kids Jeans</p>
<p class="text-sm">Under ₹299</p>
</div>

  </div>



</div>


{/* 5*/}
<div class="h-64 w-60 border border-slate-900 p-2 ml-2 mt-3 grid place-items-center">


<img className='h-48 w-52 object-contain card-img-top' src="https://rukminim2.flixcart.com/image/70/70/xif0q/jumpsuit/q/d/s/l-ttjs000014-tokyo-talkies-original-imagzdheexbfpztu.jpeg?q=90"/>

<div class="text-center">
<p className='font-medium  m-0'>Jumpsuits, Skirts, Dresses</p>
<p className=''>Upto 80% Off</p>

</div>
</div>

{/* 6 */}
<div class="h-64 w-60 border border-slate-900 p-2 ml-2 mt-3 grid place-items-center">

<img className='h-48  object-contain' src="https://rukminim2.flixcart.com/flap/70/70/image/4398b53c0596430f.jpg?q=90"
class="card-img-top"/>

<div class="text-center">
<p className=' m-0 font-medium'>Kids Clothing</p>
<p className=''>Min. 60% Off</p>

</div>
</div>

</div>
</div>


<div className='mt-4 bg-white w-full flex justify-center flex-wrap items-center p-1'>
<img src={pictureImage} alt="" />

</div>




</div>

{/* Another Template Design */}
<div className='w-full flex  bg-black p-4'>
  <div className='w-1/2 flex justify-center '>
  <div className='w-32 m-3'>
    <p className='text-white font-light'>About Us</p>
    <p className=' font-semibold text-[12px] leading-4  text-white m-1'>Contact Us </p>
    <p className=' font-semibold text-[12px] leading-4  text-white m-1'> Careers</p>
    <p className=' font-semibold text-[12px] leading-4  text-white m-1'> Flipkart Stories</p>
    <p className=' font-semibold text-[12px] leading-4  text-white m-1'>Press </p>
    <p className=' font-semibold text-[12px] leading-4  text-white m-1'>Corporate </p>
    <p className=' font-semibold text-[12px] leading-4  text-white m-1'> Information</p>
  </div>
  <div className='m-3'>
  <p className='text-white font-light text-[13px]'>GROUP COMPANIES</p>
    <p className=' font-semibold text-[12px] leading-4 text-white m-0'>Myntra </p>
    <p className=' font-semibold text-[12px] leading-4 text-white m-0'>Cleartrip</p>
    <p className=' font-semibold text-[12px] leading-4 text-white m-0 '>Shopsy</p>
    
  </div>
  <div className='m-3'>
  <p className='text-white font-light'>HELP</p>
    <a className=' font-semibold text-[12px] leading-4 text-white m-0 no-underline'>Payments </a>
    <a className=' font-semibold text-[12px] leading-4 text-white m-0 no-underline'>Shipping</a>
   <br />
    <a className=' font-semibold text-[12px] leading-4 text-white m-0 no-underline'>Cancellation</a>
    <br />
    <a className=' font-semibold text-[12px] leading-4 text-white m-0 no-underline'>Returns</a>
    <br />
    <a  className=' font-semibold text-[12px] leading-4 text-white m-0 no-underline'>FAQ</a>
    <br />
    <a  className=' font-semibold text-[12px] leading-4 text-white m-0 no-underline'>Report Infringement</a>
  </div>
  <div className='m-3'>
  <p className='text-white font-light'>CONSUMER POLICY</p>
    <p className=' font-semibold text-[12px] leading-4 text-white m-0'>Contact Us </p>
    <p className=' font-semibold text-[12px] leading-4 text-white m-0'> Careers</p>
    <p className=' font-semibold text-[12px] leading-4 text-white m-0 '> Flipkart Stories</p>
    <p className=' font-semibold text-[12px] leading-4 text-white m-0'>Press </p>
    <p className=' font-semibold text-[12px] leading-4 text-white m-0'>Corporate </p>
    <p className=' font-semibold text-[12px] leading-4 text-white m-0'> Information</p>
  </div>
  
  </div>
  <div>

  </div>
 
  {/* Another 1/2 div */}
<div>
  
</div>

</div>


    </div>
    </div>
  );
}

export default Flipkart;
