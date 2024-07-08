import * as yup from "yup";

export enum SellerSignupInputs {
  // Personal Info.
  FIRSTNAME = "first_name",
  LASTNAME = "last_name",
  MOBILE = "mobile",
  EMAIL = "email",

  // Business Info.
  BUSINESS_NAME = "business_name",
  BUSINESS_TYPE = "business_type",

  // Passwords and Security
  PASSWORD = "password",
}

// export const sellerSignupSchema = yup.object({
//   [SellerSignupInputs.FIRSTNAME]: yup.string().required("Enter firstname"),
//   [SellerSignupInputs.LASTNAME]: yup.string().required("Enter lastname"),
//   [SellerSignupInputs.MOBILE]: yup.string().required("Enter mobile number"),
//   [SellerSignupInputs.EMAIL]: yup.string().required("Enter email"),
//   [SellerSignupInputs.BUSINESS_NAME]: yup
//     .string()
//     .required("Enter bussiness name"),
//   [SellerSignupInputs.BUSINESS_TYPE]: yup
//     .string()
//     .required("Please select business type"),
//   [SellerSignupInputs.PASSWORD]: yup.string().required("Enter password"),
// });
export const sellerSignupSchema = [
  yup.object({
    [SellerSignupInputs.FIRSTNAME]: yup.string().required("Enter firstname"),
    [SellerSignupInputs.LASTNAME]: yup.string().required("Enter lastname"),
    [SellerSignupInputs.MOBILE]: yup.string().required("Enter mobile number"),
    [SellerSignupInputs.EMAIL]: yup.string().required("Enter email"),
  }),
  yup.object({
    [SellerSignupInputs.BUSINESS_NAME]: yup
      .string()
      .required("Enter bussiness name"),
    [SellerSignupInputs.BUSINESS_TYPE]: yup
      .string()
      .required("Please select business type"),
  }),
  yup.object({
    [SellerSignupInputs.PASSWORD]: yup.string().required("Enter password"),
  }),
];

export interface ISellerSignupInputs {
  [SellerSignupInputs.FIRSTNAME]: string;
  [SellerSignupInputs.LASTNAME]: string;
  [SellerSignupInputs.MOBILE]: string;
  [SellerSignupInputs.EMAIL]: string;
  [SellerSignupInputs.BUSINESS_NAME]: string;
  [SellerSignupInputs.BUSINESS_TYPE]: string;
  [SellerSignupInputs.PASSWORD]: string;
}
