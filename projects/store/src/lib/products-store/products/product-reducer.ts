import { ProductsState } from './product-state';
import { ProductsActions } from './product-actions';
import { Action, createReducer, on } from '@ngrx/store';


const reducer = createReducer(
    new ProductsState(),
    on(ProductsActions.GetProductsSuccessAction, (state, { products }) => ({ ...state, products })),
    on(ProductsActions.AddProductSuccessAction, (state, { isAdded }) => ({ ...state, isAdded })),
    on(ProductsActions.DeleteProductSuccessAction, (state, { isDelete }) => ({ ...state, isDelete })),
    on(ProductsActions.EditProductSuccessAction, (state, { isEdit }) => ({ ...state, isEdit }))

)

export function ProductsReducer(state: ProductsState | undefined, action: Action) {
    return reducer(state, action);
}



