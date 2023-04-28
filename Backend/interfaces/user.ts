export interface user {
  id?:string,
  firstName:string,
  lastName:string,
  email:string,
  password:string,
  isAdmin:boolean
}

export interface fullUser {
  '$__': _;
  '$isNew': boolean;
  _doc: Doc;
}

export interface Doc {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface _ {
  activePaths: ActivePaths;
  skipId: boolean;
}

interface ActivePaths {
  paths: Paths;
  states: States;
}

interface States {
  require: Require;
  default: Require;
  init: Init;
}

interface Init {
  _id: boolean;
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
  isAdmin: boolean;
  createdAt: boolean;
  updatedAt: boolean;
  __v: boolean;
}

interface Require {
}

interface Paths {
  password: string;
  email: string;
  lastName: string;
  firstName: string;
  isAdmin: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
}