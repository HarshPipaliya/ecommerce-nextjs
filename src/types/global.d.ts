export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export type JwtPayload = {
  _id: string;
  email: string;
  role: string;
  exp: Date;
  iat: Date;
  nbf: Date;
};
