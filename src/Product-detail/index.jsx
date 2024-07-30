import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDiscountedPrice } from "../utitlity";
import StarRting from "../shared/components/star-rating";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/reducer";
import { Bounce, ToastContainer, toast } from "react-toastify";

export default function ProductDetailPage() {
  const { productID } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productID}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  }, [productID]);

  if (loading) {
    return <div className="fs-1"> loading.........</div>;
  }
  if (error) {
    return <div className="fs-1">{error}</div>;
  }
  if (!product) {
    return <div className="fs-1">invalid product !!!!!</div>;
  }

  function addCartItem(arg) {
    dispatch(addCart(arg));
  }
  const notify=()=>{
    toast.success('Your item added to Cart', {
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
    <div className="container">
      <div className="card mt-5">
        <div className="row g-0">
          <div className="col-lg-6 d-flex 
          align-items-center 
          justify-content-center">
            <img
             style={{height:"80%" ,width:"70%"}} 
              src={product.thumbnail}
              className="border rounded-3  
               bg-body-tertiary "
              alt="..."
            />
          </div>
          <div className="col-lg-6 ">
            <div className="card-body">
              <h5 className="fs-3">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <div className="position-relative">
                <span style={{position:"relative",left:"70%"}} className="badge rounded-pill text-bg-primary">
                  f-assured
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-5 p-2 bg-body-tertiary">
                <span className="material-icons-outlined">local_shipping</span>
                <span className="ms-2">FREE DELIVERY</span>
              </div>
              <div className="text-decoration-line-through opacity-50 pt-4">
                ₹ {product.price}
              </div>
              <div className="text-danger pt-1 fs-4">
                ₹ {getDiscountedPrice(product.price, product.discountPercentage)}
                <div className="row">
                  <div className="col-12 col-md-3">
                    <StarRting rating={product.rating} />
                  </div>
                  <div className="col d-flex align-items-center">
                    <div className="badge text-bg-success align-items-center pt-2">
                      {product.rating}
                      <span className="material-icons text-light fs-6">star</span>
                    </div>
                    <span className="fs-6 ps-2 opacity-75 text-dark">ratings</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 d-flex flex-column flex-md-row">
      <button
       className="btn btn-danger w-100 w-md-25 me-0 me-md-5 mb-3 mb-md-0 mx-md-5"
       onClick={() => {
      addCartItem(product);
      notify();
     }}
       >
      Add to Cart
       </button>
        <ToastContainer />
        <button className="btn btn-warning w-100 w-md-25">Buy Now</button>
        </div>
        </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}