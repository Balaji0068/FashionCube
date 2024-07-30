import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../../shared/components/product-card'
import { addCart } from '../../../redux/reducer';

export default function Productlist() {
    const list=useSelector((state)=>state.products.list.filter((item,idx)=>idx<8))
    const dispatch=useDispatch();
    // console.log(list)
    function addToCart(arg){
     dispatch(addCart(arg))
    }
   
    
  return (
    <div className='row'>
        {list.map((item)=>(
            <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 g-5'key={item.id}>
                <ProductCard {...item}  data={item} addTocart={addToCart} />
            </div>
        ))}
    </div>
  )
}
