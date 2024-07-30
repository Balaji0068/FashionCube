
import { useSelector } from 'react-redux'

import ProductCard from '../shared/components/product-card';

export default function SearchPage() {
    const {productList} =useSelector((state)=>state.products)
  return (
    <>
    <div className='row container mx-auto'>
       {productList.map((item)=>(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 g-5" key={item.id}>
        <ProductCard data={item} {...item}/>
        </div>
       ))}
    </div>
    <br />
    <br />
    </>
  )
}
