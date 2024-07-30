import React, { memo } from 'react'


// jab props change hoga tabhi run karega .
// use memo variable ko memoize karta hai .
const Navbar=({adjective,getadjective})=>{
    console.log("Navbar is rendered")
    return(
        <div>
            i am a {adjective} Navbar
        </div>
    )
}
export default memo(Navbar)