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

export type CustomButtonProps = {
  children: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type WrapperCardProps = {
  title: string;
  subtitle?: string; 
  children: React.ReactNode;
}
export type ContainerProps = {
  children: React.ReactNode;
  styles: React.CSSProperties;
};

export type User = {
name: string;
email: string;
}
export type CartItem = {
  id: string;
  name: string;
  price: number;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
};