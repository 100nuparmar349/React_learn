import React from 'react';
import Card from './Card';


function App(name) {
  //console.log(name.data)
    // const FoodItems = ["Pizza", "Burger", "Icecream", "Poha"]
    return (
        <div>
           
          {/* {
            FoodItems.map((item)=>{
                return <Card title={item}/>
              
            })
          } */}
          <Card a={name.data}/>
           
        </div>
        // <div>{FoodItems[0]}</div>
    );
}

export default App
