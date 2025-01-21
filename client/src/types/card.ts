export interface ProductCardProps {
  id: string;
  imageUrl: string;
  name: string;
}

export interface ProductCardListProps {
  products: ProductCardProps[];
}
