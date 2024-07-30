import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, setProduct } from '../../redux/reducer';
import ProductCard from '../../shared/components/product-card';
import Pagination from './pagination';



export default function FilterProducts() {
  const { selCatg, list } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [recordPerPage] = useState(8);

  useEffect(() => {
    if (selCatg) {
      axios
        .get(`https://dummyjson.com/products/category/${selCatg}`)
        .then((res) => {
          dispatch(setProduct(res.data.products));
          setCurrentPage(1)
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
        });
    }
  }, [selCatg, dispatch]);

  const indexOfLastRecord = currentPage * recordPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
  const currentRecords = list.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(list.length / recordPerPage);

  function addTocart(arg){
   dispatch(addCart(arg))
  }
  return (
    <>
      <div className='row g-4 mt-3'>
        {currentRecords.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 " key={item.id}>
            <ProductCard {...item} data={item} addTocart={addTocart} />
          </div>
        ))}
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}


