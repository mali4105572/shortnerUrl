import { Action, createAction, props } from '@ngrx/store';
import { Product } from 'types';

export const ProductsActions = {

    GetProductsAction: createAction('[Products] Get Products'),
    GetProductsSuccessAction: createAction('[Products] Get Products Success', props<{ products: Product[] }>()),
    GetProductsFailureAction: createAction('[Products] Get Products Failure', props<{ error: any }>()),

    AddProductAction: createAction('[Products] Add Products', props<{ title:string,price:number,description:string,image:string }>()),
    AddProductSuccessAction: createAction('[Products] Add Products Success', props<{ isAdded: boolean }>()),
    AddProductFailureAction: createAction('[Products] Add Products Failure', props<{ error: any }>()),

    DeleteProductAction: createAction('[Products] Delete Products', props<{ id: number }>()),
    DeleteProductSuccessAction: createAction('[Products] Delete Products Success', props<{ isDelete: boolean }>()),
    DeleteProductFailureAction: createAction('[Products] Delete Products Failure', props<{ error: any }>()),

    EditProductAction: createAction('[Products] Edit Products', props<{ title:string,price:number,description:string,image:string  , id: number }>()),
    EditProductSuccessAction: createAction('[Products] Edit Products Success', props<{ isEdit: boolean }>()),
    EditProductFailureAction: createAction('[Products] Edit Products Failure', props<{ error: any }>()),

}
