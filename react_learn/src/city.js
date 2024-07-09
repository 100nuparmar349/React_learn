import React, { useState } from 'react'

function City(){
    let [city,setcity]=useState("Bhopal");
    function fun(){
        setcity("Delhi");
        if(city==="Delhi"){
            setcity("Bhopal");
        }

    }

    return(
        <div>
            <p>{city}</p>
            <button onClick={fun}>Click</button>
        </div>
    )

}

export default City