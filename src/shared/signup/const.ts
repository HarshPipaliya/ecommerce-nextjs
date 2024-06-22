import * as yup from "yup";

export enum SignupInputs {
  FIRSTNAME = "first_name",
  LASTNAME = "last_name",
  MOBILE_NUMBER = "mobile_number",
  EMAIL = "email",
  PASSWORD = "password",
}

export const singupSchema = yup.object({
  [SignupInputs.FIRSTNAME]: yup.string().required("Firstname is required"),
  [SignupInputs.LASTNAME]: yup.string().required("Lastname is required"),
  [SignupInputs.MOBILE_NUMBER]: yup.string().required("Mobile is required"),
  [SignupInputs.EMAIL]: yup.string().required("Email is required"),
  [SignupInputs.PASSWORD]: yup.string().required("Password is required"),
});

export interface ISingupInputs {
  [SignupInputs.FIRSTNAME]: string;
  [SignupInputs.LASTNAME]: string;
  [SignupInputs.MOBILE_NUMBER]: string;
  [SignupInputs.EMAIL]: string;
  [SignupInputs.PASSWORD]: string;
}
