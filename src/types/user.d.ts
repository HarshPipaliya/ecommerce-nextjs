export interface IUser {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: string;
  token?: string;
  businessName?: string;
  businessType?: string;
}
