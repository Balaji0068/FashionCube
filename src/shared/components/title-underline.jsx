import React from 'react'

export default function TitleUnderline({label}) {
  return (
    <>
    <div className='text-center mt-5'>
        <h4 >{label}</h4>
        <div className='border-bottom border-danger border-5 mt-3' style={{
        width:"70px",
        margin:"auto"}} ></div>
    </div>
    </>
  )
}