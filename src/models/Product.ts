export interface Product {
  id: string;
  title: string;
  image: any; // Local require or URL
}

export interface User {
  username: string;
  password?: string;
}