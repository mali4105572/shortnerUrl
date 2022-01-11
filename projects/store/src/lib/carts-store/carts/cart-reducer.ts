
import { Action, createReducer, on } from '@ngrx/store';
import { CartsState } from './cart-state';
import { CartsActions } from './cart-actions';


const reducer = createReducer(
    new CartsState(),
    on(CartsActions.GetCartsSuccessAction, (state, { carts }) => ({ ...state, carts })),
    on(CartsActions.AddCartSuccessAction, (isAdded ) => ( isAdded)),
    on(CartsActions.DeleteCartSuccessAction, (isDelete) => ( isDelete)),
    on(CartsActions.GetTotalSuccessAction, (total) => (total)),
)

export function CartsReducer(state: CartsState | undefined, action: Action) {
    return reducer(state, action);
}



