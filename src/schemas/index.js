import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("please enter your name"),
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string().min(6).required("please enter your password"),
  role: Yup.string().required("please enter your role"),
});
export const loginSchema = Yup.object({
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string().min(6).required("please enter your password"),
});

export const userSchema = Yup.object({
  title: Yup.string().max(20).required("please enter your title"),
  description: Yup.string().required("please enter your description"),
  estimatedtime: Yup.number()
    .required("Required")
    .moreThan(0, "Estimated Time should not be zero or less than zero")
    .lessThan(121, "Estimated Time should not be more than 120 Min"),
  date: Yup.string().required("please enter date"),
  amount: Yup.number().required("Required"),
  count: Yup.number().required("Required"),
});
