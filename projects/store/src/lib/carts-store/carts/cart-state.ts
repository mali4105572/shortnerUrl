import { Cart} from 'types';

export class CartsState {
    carts: Cart[] = [];
    isAdded: boolean;
    isDelete: boolean;
    total: number;
}