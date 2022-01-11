import { Action, createAction, props } from '@ngrx/store';
import { Cart, PastDays, TopSel, TopUniqueSel } from 'types';

export const CartsActions = {


    GetCartsAction: createAction('[Carts] Get Carts'),
    GetCartsSuccessAction: createAction('[Carts] Get Carts Success', props<{ carts: Cart[] }>()),
    GetCartsFailureAction: createAction('[Carts] Get Carts Failure', props<{ error: any }>()),


    AddCartAction: createAction('[Carts] Add Cart', props<{ title:string,price:number }>()),
    AddCartSuccessAction: createAction('[Carts] Add Cart Success', props<{ isAdded: boolean }>()),
    AddCartFailureAction: createAction('[Carts] Add Cart Failure', props<{ error: any }>()),

    DeleteCartAction: createAction('[Carts] Delete Cart'),
    DeleteCartSuccessAction: createAction('[Carts] Delete Cart Success', props<{ isDelete: boolean }>()),
    DeleteCartFailureAction: createAction('[Carts] Delete Cart Failure', props<{ error: any }>()),


    GetTotalAction: createAction('[Carts] Get Total'),
    GetTotalSuccessAction: createAction('[Carts] Get Total Success', props<{ total: number }>()),
    GetTotalFailureAction: createAction('[Carts] Get Total Failure', props<{ error: any }>()),

}
