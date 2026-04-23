export interface UserProfile {
  name: string;
  age: number;
  isOnline: boolean;
}

export interface Product {
  _id: string;
  title: string;
  price: number;
  Available:boolean;
}
export interface Character {
  name: string;
  title: string; 
  status: boolean;
  age: number;
}
export type StatusState = "loading" | "success" | "error";