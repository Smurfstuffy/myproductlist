export interface Product {
  _id: string;
  imageUrl: string;
  name: string;
  count: number;
  size: {
    width: number;
    height: number;
  };
  weight: string;
}

export interface ProductState {
  list: Product[];
  loading: boolean;
  error: string | null;
}
