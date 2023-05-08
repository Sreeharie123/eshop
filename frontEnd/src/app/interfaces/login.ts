export interface Login {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  AccessToken: string;
}

export interface registerData{

  firstName:string,
  lastName:string,
  email:string,
  password:string,
  confirmPassword:string
}

export interface register{
  createdAt:string,
  email:string,
  firstName:string,
  lastName:string,
  isAdmin:boolean,
  password:string,
  updatedAt:string,
  _id:string
}

export interface categoryList {
  categories: string[];
}
