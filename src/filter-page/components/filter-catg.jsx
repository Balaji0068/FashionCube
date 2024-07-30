
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCatg, setSelectedCatg,} from '../../redux/reducer';

export default function FilterCatg() {
  const { catg, selCatg } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/categories')
      .then((res) => {
        // console.log(res)
        dispatch(setCatg(res.data));
      })
      .catch(() => {
        console.error("Something went wrong");
      });
  }, [dispatch]);

  function handleSelection(arg) {
    dispatch(setSelectedCatg(arg))
  }

  return (
    <>
      <h5>Product Category</h5>
      {catg.map((item) => (
        <div
          key={item.id} 
          className='my-2 fs-6'
          style={{ cursor: "pointer" }}
          onClick={() => handleSelection(item.slug)}
        >
          {selCatg === item.slug? (
            <span className='text-danger'>>>{item.slug}</span>
          ) : (
            <span>{item.slug}</span>
          )}
        </div>
      ))}
      <br />
      <br />
    </>
  );
}
