import React, { useEffect } from 'react'
import Carousel from '../../../core/components/carousel'
import ImageOverText from '../../../shared/components/image-over-text'
import TitleUnderline from '../../../shared/components/title-underline'
import { useDispatch } from 'react-redux'
import axios from "axios"
import { setProduct, setSelectedCatg } from '../../../redux/reducer'
import Productlist from './product-list'
import { useNavigate } from 'react-router-dom'
export default function Homepage() {
  const dispatch=useDispatch();
  const navigate =useNavigate();
  useEffect(()=>{
axios
  .get('https://dummyjson.com/products')
  .then((res)=>{
    // console.log(res.data.products)
    dispatch(setProduct(res.data.products))
  })
  .catch((err)=>{})
  });
  const handleClick=(catg)=>{
      axios
        .get(`https://dummyjson.com/products/category/${catg}`)
        .then((res)=>{
          // console.log(res.data.products)
          dispatch(setProduct(res.data.products))
        })
        .catch((err)=>{})
        };
        const handleAllClick=()=>{
          axios
          .get('https://dummyjson.com/products')
          .then((res)=>{
          dispatch(setProduct(res.data.products)) 
           })                                       
         .catch((err)=>{})
        }
        function handleCatg(arg){
          dispatch(setSelectedCatg(arg))
          navigate("/catg")
         }
  return (
    <>
    <Carousel/>
    <div className='container'>
    <div className='row mt-4'>
        <div className='col-lg-4 col-md-6 mb-4'>
          <ImageOverText 
          handleSetCatg={()=>handleCatg("tops")}  
          image="./images/banner_1.jpg" 
          label="Women's"/>
          </div>
        <div className='col-lg-4 col-md-6 mb-4'>
          <ImageOverText 
          handleSetCatg={()=>handleCatg("womens-bags")} 
          image="./images/banner_2.jpg" 
          label="Accessories's"
           />
          </div>
        <div className='col-lg-4 col-md-6 mb-4'>
          <ImageOverText 
          handleSetCatg={()=>handleCatg("mens-shirts")} 
          image="./images/banner_3.jpg" 
          label="Men's"/></div>
    </div>
    <TitleUnderline label="New Arraivals"/>   
<div className='text-center'>
    <div className="btn-group opacity-75 mt-5 mb-3" role="group" aria-label="Basic outlined example">
  <button 
  onClick={handleAllClick}
  type="button" 
  className="btn btn-outline-dark">All</button>
  <button
  onClick={()=>handleClick("womens-dresses")}
   type="button" 
  className="btn btn-outline-dark">Women's</button>
  <button
  onClick={()=>handleClick("mens-shirts")}
   type="button" 
   className="btn btn-outline-dark">Mens's</button>
 </div>
 </div>
     <Productlist/>
     <br />
    <br />
    <br />
    <br />
    </div>
   
    </>
  )
}
