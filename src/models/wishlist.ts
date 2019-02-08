import { User } from "./user";
import { Product } from "./product";

export class WishList {
    id?: string;
    user: User;
    product: Product;
}
