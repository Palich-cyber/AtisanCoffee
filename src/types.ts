export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: string;
  origin: string;
  roast: string;
  notes: string[];
  weight: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  items: CartItem[];
  total: number;
  customerName: string;
  customerEmail: string;
  customerAddress: string;
}
