import { useSelector } from "react-redux";

export default function User(){
  const user =useSelector((state)=>state.products.user)
   return(
    <>
     <div className="container card">
        <h1>Your profile</h1>
        <h3>{user.userName}</h3>
        <h2>{user.email}</h2>
     </div>
    </>
   )
}