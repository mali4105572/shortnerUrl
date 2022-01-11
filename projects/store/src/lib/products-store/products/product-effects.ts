import { HttpClient } from '@angular/common/http';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';

import { exhaustMap, catchError, map } from 'rxjs/operators';

import { Injectable, Inject } from '@angular/core';
import { EnvironmentTOKEN } from 'core';
import { ProductsActions } from './product-actions';
import { ProductsHttpService } from 'api';
import { Product } from 'types';


@Injectable()
export class ProductsEffects {

    @Effect() getProducts$ = createEffect(() => this.actions$.pipe(
        ofType(ProductsActions.GetProductsAction),
        exhaustMap(() => this.productsHttp.getProducts$().pipe(
            map((products) => ProductsActions.GetProductsSuccessAction( {products} )),
            catchError(error => of(ProductsActions.GetProductsFailureAction({ error }))
            )),

        )
    ));

    @Effect() addProduct$ = createEffect(() => this.actions$.pipe(
        ofType(ProductsActions.AddProductAction),
        exhaustMap(({ title,price,description,image }) => this.productsHttp.addProduct$( title,price,description,image ).pipe(
            map((isAdded) => ProductsActions.AddProductSuccessAction({isAdded})),
            catchError(error => of(ProductsActions.AddProductFailureAction({ error }))
            )),
        )
    ));

    @Effect() editProduct$ = createEffect(() => this.actions$.pipe(
        ofType(ProductsActions.EditProductAction),
        exhaustMap(({  title,price,description,image ,id }) => this.productsHttp.editProduct$( title,price,description,image  , id).pipe(
            map((isEdit) => ProductsActions.EditProductSuccessAction({isEdit})),
            catchError(error => of(ProductsActions.EditProductFailureAction({ error }))
            )),
        )
    ));


    @Effect() deleteProduct$ = createEffect(() => this.actions$.pipe(
        ofType(ProductsActions.DeleteProductAction),
        exhaustMap(({ id }) => this.productsHttp.deleteProduct$( id ).pipe(
            map((isDelete) => ProductsActions.DeleteProductSuccessAction({isDelete})),
            catchError(error => of(ProductsActions.DeleteProductFailureAction({ error }))
            )),
        )
    ));

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private http: HttpClient,
        private productsHttp: ProductsHttpService,
        @Inject(EnvironmentTOKEN) private env: any
    ) { }
}