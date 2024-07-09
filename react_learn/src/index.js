import React from 'react';
import ReactDOM from 'react-dom';
// import City from './city';
// import App from './App';
// import Counter from './Counter';
import App from './props/Apps'




 
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//  const toggle="light";
// const element=(
//     <div>
// How to set attribute in html
//         <h1 className={toggle}>Jai shree Ram</h1>
//         <h1>Hanuman</h1>
//         <h2>Sonu</h2>
//     </div>
// )


// let name=Boolean(prompt("Press 1 to login  and 0 to exit"));
// const login=true;

// let login=Boolean(prompt("Press 1 for login and 0 for exit"));
// let name=prompt("Enter you name ");


// let Designation;
// if(login){
//     alert("Welcome to our company");
//     Designation=prompt("Enter your Designation")
// }else{
//     alert("Please login first")
// }

// const element=(
//     <div>
//         <h1>Hello {login?name:"user"}</h1>
//         {(login)?<p>Entered as {Designation}</p>:<p>Tell</p>}
//     </div>
// )

// Event Handling.
// 


// function handleclick(){
//     alert("Click the Button ")

// }

// const element=(
//     <div>
//         <h1>Sonu parmar</h1>
      
//         <button onClick={handleclick}>Click me</button>
//     </div>
// )

// p tag is block scope 
// let element=(
//     <div>
//         {/* {[10,20,30]} */
//         [<p key={1}>Item 1</p>,<p key={2}>Item 2</p>,<p key={3}>Item 1</p>,<p key={4}>Item 1</p>]}
//         </div>
// )

// map run in loop.
// let cnt=0;

// let name=['virat','dhoni','bumrah','virat']
// let cnt=0;
// const element=(
//     <div>
//         {name.map((n)=>{
//            return  <li key={cnt++}>{n}</li>
//         })}
//     </div>
// )

// let element = (
//     <div>
//         <App />
//     </div>
// )

// let root = document.getElementById("root");

// ReactDOM.render(element, root);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App/>
  
);


