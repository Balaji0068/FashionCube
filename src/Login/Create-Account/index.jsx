import { useNavigate } from "react-router-dom"
import registerStyles from "./register.module.css"
import { useState } from "react";
import { RegisterSchema } from "../../utitlity/patten2";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function CreateAccount(){
    const navigate =useNavigate();
    const [form ,setForm]=useState({
        name:"",
        email:"",
        password:""
    })
    const [error,setError]=useState({
        name:"",
        email:"",
        password:"",
    })
  
   async function handleCreateClick(e){
    e.preventDefault();
      try{
      const YUPERROR=await RegisterSchema.validate(form,{abortEarly:false})
      console.log(YUPERROR)
       axios
          .post("http://localhost:8080/fashion/user/api/auth/new",{
            userName:form.name,
             email:form.email,
             password:form.password
          })
           .then((res)=>{
            console.log(res);
            toast.success('Account created successfully', {
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
                navigate("/login")
              },1000);
           })
           .catch((err)=>{
            // console.log(err)
           })
           
      }catch(error){
    //    console.log(error.errors)
    //    console.log(error.inner)
       const newError={}
       error.inner.forEach(error => {
        const key =error.path;
        if(!(key in newError)){
          newError[key]=error.message;
        }
       });
       setError(newError)
      }
    }
    function handleFormChange(e){
        const key =e.target.name;
        const value=e.target.value;
        setForm({...form,[key]:value});
        setError("")
    }
    return(
        <div className={registerStyles.registerPagecontainer}>
            <div className={registerStyles.registerForm}>
            <h3 className="fs-2 text-center mb-5">Create Account</h3>
           <div className="form-floating mb-3">
           <input
            type="name"
            className="form-control mt-4 rounded-5"
            id="floatingInput"
            placeholder="name@example.com"
            name="name"
           value={form.name}
           onChange={handleFormChange}
          />
          <label htmlFor="floatingInput" className="form-label">Name</label>
          {error.name&&<span className="text-danger">{error.name}</span>}
         </div>
           <div className="form-floating mb-3">
           <input
            type="email"
            className="form-control mt-4 rounded-5"
            id="floatingInput"
            placeholder="name@example.com"
            value={form.email}
            name="email"
            onChange={handleFormChange}
          />
          <label htmlFor="floatingInput" className="form-label">Email</label>
          {error.email&&<span className="text-danger">{error.email}</span>}
         </div>
         <div className="form-floating mb-3">
           <input
            type="password"
            className="form-control mt-4 rounded-5"
            id="floatingInput"
            placeholder="name@example.com"
            value={form.password}
            name="password"
            onChange={handleFormChange}
          />
          <label htmlFor="floatingInput" className="form-label">Password</label>
          {error.password&&<span className="text-danger">{error.password}</span>}
         </div>
         <div className="d-flex justify-content-center mt-5">
          <button 
          onClick={handleCreateClick}
          className="btn btn-primary w-75 rounded-5">CreateAccount
          </button>
          <ToastContainer/>
          </div>
          <div className="text-center mt-3">Already have an Account? 
            <span style={{cursor:"pointer"}}
            onClick={()=>navigate("/login")}
            className="text-primary"> Login</span></div>
        </div>
        </div>
    )
}