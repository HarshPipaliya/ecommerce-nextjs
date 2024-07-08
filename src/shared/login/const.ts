import * as yup from "yup";

export enum LoginInputs {
  USERNAME = "username",
  PASSWORD = "password",
}

export const loginSchema = yup.object({
  [LoginInputs.USERNAME]: yup.string().required("Username is required"),
  [LoginInputs.PASSWORD]: yup.string().required("Password is required"),
});

export interface ILoginInputs {
  [LoginInputs.USERNAME]: string;
  [LoginInputs.PASSWORD]: string;
}
