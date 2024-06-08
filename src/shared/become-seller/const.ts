import * as yup from "yup";

export enum SellerSignup {
  FIRSTNAME = "first_name",
  LASTNAME = "last_name",
  MOBINE_NUMBER = "mobile_number",
  EMAIL = "email",
  CITY = "city",
  STATE = "state",
  COUNTRY = "country",
  ZIP = "zip",
  PASSWORD = "password",
}

export const sellerSignupSchema = yup.object({
  [SellerSignup.FIRSTNAME]: yup.string().required(),
  [SellerSignup.LASTNAME]: yup.string().required(),
  [SellerSignup.MOBINE_NUMBER]: yup.string().required(),
  [SellerSignup.EMAIL]: yup.string().required(),
  [SellerSignup.CITY]: yup.string().required(),
  [SellerSignup.STATE]: yup.string().required(),
  [SellerSignup.COUNTRY]: yup.string().required(),
  [SellerSignup.ZIP]: yup.string().required(),
  [SellerSignup.PASSWORD]: yup.string().required(),
});

export interface ISellerSignupForm {
  [SellerSignup.FIRSTNAME]: string;
  [SellerSignup.LASTNAME]: string;
  [SellerSignup.MOBINE_NUMBER]: string;
  [SellerSignup.EMAIL]: string;
  [SellerSignup.PASSWORD]: string;
  [SellerSignup.CITY]: string;
  [SellerSignup.STATE]: string;
  [SellerSignup.COUNTRY]: string;
  [SellerSignup.ZIP]: string;
}
