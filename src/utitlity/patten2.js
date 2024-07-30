
import { object, string } from "yup";

export const RegisterSchema=object({
    name:string().required("name is required"),
    email:string().email().required(),
    password:string().required().min(8)
    .matches(
        /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!#$%&?]).{8,}$/,
        "password doesn't met the reqirement"
      )
})