import { User } from "./user.model";

export class Hotel {
  id: number;
  address: string;
  city: string;
  hotel_owner: User;
  img: string;
  link: string;
  name: string;
  price: number;
  rating: string; 
  status: string;
}
