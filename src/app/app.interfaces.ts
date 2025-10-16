export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
}
export interface ProductFake {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}
