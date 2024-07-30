import { object, string } from "yup";

 export const loginSchema=object({
    email:string().email().required(),
    password:string("invalid password").required().min(8)
        .matches(
            /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!#$%&?]).{8,}$/,
            "password doesn't met the reqirement",
          )
    
})