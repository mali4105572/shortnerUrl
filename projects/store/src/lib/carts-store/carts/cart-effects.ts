import { HttpClient } from '@angular/common/http';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { exhaustMap, catchError, map } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { EnvironmentTOKEN } from 'core';
import { CartsHttpService } from 'api';
import { CartsActions } from './cart-actions';
import { Cart } from 'types';

@Injectable()
export class CartsEffects {


    @Effect() getCarts$ = createEffect(() => this.actions$.pipe(
        ofType(CartsActions.GetCartsAction),
        exhaustMap(() => this.cartsHttp.getCarts$().pipe(
            map((carts) => CartsActions.GetCartsSuccessAction( {carts} )),
            catchError(error => of(CartsActions.GetCartsFailureAction({ error }))
            )),

        )
    ));

    @Effect() addCart$ = createEffect(() => this.actions$.pipe(
        ofType(CartsActions.AddCartAction),
        exhaustMap(({ title,price }) => this.cartsHttp.addCart$( title,price ).pipe(
            map((isAdded) => CartsActions.AddCartSuccessAction({ isAdded })),
            catchError(error => of(CartsActions.AddCartFailureAction({ error }))
            )),
        )
    ));


    @Effect() deleteCart$ = createEffect(() => this.actions$.pipe(
        ofType(CartsActions.DeleteCartAction),
        exhaustMap(() => this.cartsHttp.deleteCart$().pipe(
            map((isDelete) => CartsActions.DeleteCartSuccessAction({ isDelete })),
            catchError(error => of(CartsActions.DeleteCartFailureAction({ error }))
            )),
        )
    ));


   

    @Effect() getTotal$ = createEffect(() => this.actions$.pipe(
        ofType(CartsActions.GetTotalAction),
        exhaustMap(() => this.cartsHttp.getTotal$().pipe(
            map((total) => CartsActions.GetTotalSuccessAction({ total })),
            catchError(error => of(CartsActions.GetTotalFailureAction({ error }))
            )),
        )
    ));

    


    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private http: HttpClient,
        private cartsHttp: CartsHttpService,
        @Inject(EnvironmentTOKEN) private env: any
    ) { }
}