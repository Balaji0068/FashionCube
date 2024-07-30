import React, { useState } from 'react';
import styles from './login.module.css';
import { loginSchema } from '../utitlity/pattern';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/reducer';

export default function LoginPage() {
  const dispatch =useDispatch();
  const navigate =useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState({
    email: "",
    password: ""
  });
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const YUPERROR = await loginSchema.validate(form, { abortEarly: false });
      console.log(YUPERROR);
      axios
      .post("http://localhost:8080/fashion/user/api/auth/login",{
         email:form.email,
         password:form.password
      })
    .then((res)=>{
        // console.log(res);
        dispatch(setUser(res.data));
        toast.success('login successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
          setTimeout(()=>{
            navigate("/")
          },1000);

       })
       .catch((err)=>{
        toast.error('email or password given is wrong', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
       })
    } catch (error) {
      console.log(error.errors)
      const newErrors = {};
      error.inner.forEach((error) => {
       
        const key = error.path;
        if (!(key in newErrors)) {
          newErrors[key] = error.message;
        }
      });
      setError(newErrors);
    }}
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [key]: value });
       setError("")
  }
  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginFormContainer}>
        <h3 className='fs-2 text-center'>Login</h3>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control mt-4 rounded-5"
            id="floatingInput"
            placeholder="name@example.com"
            value={form.email}
            name='email'
            onChange={handleChange}
          />
          <label htmlFor="floatingInput" className="form-label">Email address</label>
          {error.email && <small className='text-danger'>{error.email}</small>}
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control mt-4 rounded-5"
            id="floatingPassword"
            placeholder="Password"
            value={form.password}
            name='password'
            onChange={handleChange}
          />
          <label htmlFor="floatingPassword" className="form-label">Password</label>
          {error.password && <small className='text-danger'>{error.password}</small>}
        </div>
        <div className='d-flex justify-content-center'>
          <button 
          onClick={handleLogin}
          className="btn btn-primary w-75 mt-5 rounded-5"
          >Log In</button>
          <ToastContainer/>
        </div>
        <p className='text-center opacity-75 pt-2'>Forgot password?</p>
        <div 
        className='text-center mt-4'
        >Not registered?
        <span 
        style={{cursor:"pointer"}}
        onClick={()=>navigate("/register")}
        className='text-primary'> Create an account</span>
           </div>
      </div>
    </div>
  );
}
