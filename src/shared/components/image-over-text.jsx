import React from 'react'
// const center={
//     position:"absolute",
//     top:"50%",
//     let:"50%",
//     transform:"translate(-50%,-50%)"
// }
export default function ImageOverText({image,label,handleSetCatg}) {
  return (
    
    <div className='position-relative text-center '>
     <img src={image} alt={label} height={200} className='w-75' />
       <div className='position-absolute top-50 start-50 translate-middle'>
       <button 
       onClick={handleSetCatg}
        className='btn btn-light' 
        >{label}</button>
        </div>
    </div>
  )
}
