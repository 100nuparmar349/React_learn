import React from 'react';

// data share in unidirectional
// props share the data between one file two another files
function Card(name) {
    console.log(name.a)
    return (
    //    <div>
    //     <h1>{props.title}</h1>
    //     <p>Description</p>
    //    </div>
    <div>{name.a}</div>
    );
}

export default Card
