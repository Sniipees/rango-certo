export enum View {
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  DETAILS = 'DETAILS',
  CHECKOUT = 'CHECKOUT',
  ORDERS = 'ORDERS',
  TRACKING = 'TRACKING',
  PROFILE = 'PROFILE',
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  tags: string[];
  price: string;
  distance: string;
  time: string;
  description?: string;
}

export interface Order {
  id: string;
  restaurantName: string;
  image: string;
  date: string;
  price: string;
  status: 'Delivered' | 'Cancelled' | 'Scheduled';
  itemsCount: number;
}
