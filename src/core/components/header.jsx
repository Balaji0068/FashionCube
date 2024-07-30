import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setProductList, setSearch } from '../../redux/reducer';
import axios from 'axios';

export default function Header() {
  const { cart, search ,user} = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSearch(e) {
    dispatch(setSearch(e.target.value))
  }

  function handleSearchClick(e) {
    e.preventDefault();

    if (!search) {
      return console.log("empty")
    }
      axios
      .get('https://dummyjson.com/products/search', {
        params: {
          q: search,
        },
      })
      .then((res) => {
        console.log(res.data); // Log the full response
        dispatch(setProductList(res.data.products));
      })
      .catch((err) => {
        console.log(err.message);
      });
    navigate("/search")
  }
  function stopPropagation(e) {
    e.stopPropagation();
  }
 return (
  <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ height: "17vh", width: "100%" }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          
          <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
          <div className="offcanvas-header">
            <h3 className="offcanvas-title" id="offcanvasScrollingLabel">
          Fashion<span className='text-danger'>Cube</span>
            </h3>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className='d-flex align-items-center'>
              <span className='material-icons mx-2' > home</span>
              <Link to="/" className="nav-link active py-1" aria-current="page">Home</Link>
            </div>
            < div className='d-flex align-items-center'>
            <span className='material-icons mx-2' > category</span>
              <Link to="/catg" className="nav-link active py-1" aria-current="page">Category</Link>
            </div>
            < div className='d-flex align-items-center'>
            <span className='material-icons mx-2' > person</span>
              <Link to="/contact" className="nav-link active py-1" aria-current="page">Contact Us</Link>
            </div>
            < div >
            <Link to="/cart"className="nav-link active py-1 d-flex align-items-center" aria-current="page"  >
                  <span className="material-icons mx-2 ">shopping_bag</span>
                Cart
              </Link>
            </div>
            < div className='d-flex align-items-center'>
            <span className='material-icons mx-2' > person</span>
              <Link to="/login" className="nav-link active py-1" aria-current="page">Login</Link>
            </div>
            </div>
        </div>
        </button>
        {/* Navbar Brand and Links */}
        <div className="collapse navbar-collapse justify-content-around" id="navbarTogglerDemo01">
          <div className="navbar-brand fw-bold">
            Fashion<span className='text-danger text-bold'>Cube</span>
          </div>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/catg" className="nav-link active" aria-current="page">Category</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active" aria-current="page">Contact Us</Link>
            </li>
            <li className="nav-item d-flex align-items-center ms-5">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  defaultValue={search}
                  onChange={handleSearch}
                  onClick={stopPropagation}
                />
              </form>
              <span
                style={{ cursor: "pointer" }}
                onClick={handleSearchClick}
                className="material-icons mx-2">
                search
              </span>
            {user?(<Link to="user">
                <span className="material-icons text-dark mx-2">person</span>
              </Link>): (<Link to="login">
                <span className="material-icons text-dark mx-2">person</span>
              </Link>)}
              <Link to="/cart" className='text-dark'>
                <span className="position-relative mx-2">
                  <span className="material-icons">shopping_bag</span>
                  {cart.length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart.length > 99 ? '99+' : cart.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  )}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);
}