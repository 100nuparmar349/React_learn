import React from 'react'
import Buttonpro from './Buttonpro'

const Apppr = ({data}) => {
  return (
    <div>
     {data}
     <Buttonpro newd={data}/>
    </div>
  )
}

export default Apppr
