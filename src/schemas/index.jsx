import * as Yup from "yup";

export const shippingDataSchema = Yup.object({
  fullname: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .matches(/^[^0-9]*$/, "Name should not include numbers")
    .required("Please enter your name"),

  mobile: Yup.string()
    .matches(/^9\d{9}$/, "Should be a 10-digit number starting from 9")
    .required("A phone number is required"),

  email: Yup.string()
    .email("Invalid Email")
    .required("Please enter your email"),
  province: Yup.string().required("Please select a province"),

  city: Yup.string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .matches(/^[^0-9]*$/, "City should not include numbers")
    .required("Please enter your city"),

  area: Yup.string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .required("Please enter your area"),

  address: Yup.string()
    .min(2, "Too Short!")
    .max(80, "Too Long!")
    .required("Please enter your address"),

    landmark: Yup.string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .nullable(),
  });