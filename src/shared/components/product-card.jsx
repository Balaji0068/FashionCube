import React, { useState } from 'react'
import { getDiscountedPrice } from '../../utitlity'
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';

export default function ProductCard({ thumbnail, title, price, discountPercentage, addTocart, data }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  function toggleBasket() {
    setShow((show)=>!show)
  }

  function handleCard() {
    navigate(`/${data.id}`);
  }
function handleAddTocart(e){
  addTocart(data)
  e.stopPropagation();
  toast.success(' Your item Add to Cart', {
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });
  
}
  return (
    <div
      style={{ cursor: "pointer" }}
      className="card"
      onMouseEnter={toggleBasket}
      onMouseLeave={toggleBasket}
      onClick={handleCard}
    >
      <img src={thumbnail} className="card-img-top" height={150} alt="..." />
      <div className="card-body text-center">
        <p className="card-text text-truncate">{title}</p>
        <span className='text-danger fs-6'>₹{getDiscountedPrice(price, discountPercentage)}</span>
        <span className='text-decoration-line-through ms-2 opacity-50'>₹{price}</span>
        <div>
          {show && (
            <>
            <button
              className='btn btn-danger mt-2'
              onClick={handleAddTocart}
           
            >
              Add To Cart
             
            </button>
            <ToastContainer/>
           
             </>
          )}
         
          
        </div>
       
      </div>
    
    </div>
  );
}

ProductCard.defaultProps = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/1/1.jpg",
    "https://cdn.dummyjson.com/product-images/1/2.jpg",
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/1/4.jpg",
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
  ]
};