import { useDispatch, useSelector } from "react-redux";
import TitleUnderline from "../shared/components/title-underline";
import { getDiscountedPrice } from "../utitlity";
import { decreaseQty, increaseQty, removeCart } from "../redux/reducer";

export default function CartPage() {
    const { cart } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const handleIncrease = (id) => {
        dispatch(increaseQty({ id }));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseQty({ id }));
    };

    const handleDelete = (id) => {
        dispatch(removeCart({ id }));
    };

    const subTotal = cart.reduce((acc, item) => {
        return acc + getDiscountedPrice(item.price, item.discountPercentage) * item.qty;
    }, 0);

    const shipping = 10;
    const taxRate = 0.20;
    const taxes = subTotal * taxRate;
    const Total = subTotal + shipping + taxes;

    return (
        <>
            <div style={{width:"90vw"}}  className="container border rounded mt-4 mx-auto">
                <TitleUnderline label="Your Shopping Cart" />
                {cart.length === 0 ? (
                    <h3 className="text-secondary text-center">Your cart is empty!!!</h3>
                ) : (
                    cart.map((item) => (
                <div className="row mb-4" key={item.id}>
                <div className="col-md-6">
                <div className="card border-0">
                <div className="row g-0">
                <div className="col-md-4">
                <img
                 src={item.thumbnail}
                className="img-fluid rounded-start rounded"
                alt="img"
                />
                </div>
            <div className="col-md-8">
                 <div className="card-body ms-4 mt-4">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="py-2">Quantity: {item.qty}</h6>
                    <h6>Price: ₹{getDiscountedPrice(item.price, item.discountPercentage) * item.qty}</h6>
                    </div>
                 </div>
            </div>
            </div>
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
     <span className="ms-5 ps-5">Quantity: </span>
    <div className="btn-group ms-3 p-4" role="group" aria-label="Quantity control">
    <button onClick={() => handleDecrease(item.id)} className="btn btn-outline-secondary px-3">-</button>
    <button className="btn btn-outline-secondary px-3">{item.qty}</button>
        <button onClick={() => handleIncrease(item.id)} className="btn btn-outline-secondary px-3">+</button>
        </div>
     <div className="d-flex justify-content-around mt-3">
    <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
     Remove Cart
        </button>
    </div>
    </div>
   <hr className="w-100" />
    </div>
             ))
)}
        {cart.length !== 0 && (
        <div className="d-flex flex-column align-items-end mt-3 me-5">
        <h6>SubTotal: <span className="text-danger">₹{subTotal.toFixed(2)}</span></h6>
        <h6>Shipping: <span className="text-danger">₹{shipping}</span></h6>
        <h6>Taxes: <span className="text-danger">₹{taxes.toFixed(2)}</span></h6>
        <h3>Total: <span className="text-danger">₹{Total.toFixed(2)}</span></h3>
        <button className="btn btn-danger mt-4">Confirm Checkout</button>
        </div>
                )}
                <br />
                <br/>
            </div>
            <br />
            <br />
            <br />
        </>
    );
}

