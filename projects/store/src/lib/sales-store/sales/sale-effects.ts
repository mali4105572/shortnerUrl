import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { exhaustMap, catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { EnvironmentTOKEN } from 'core';
import { SalesHttpService } from 'api';
import { SalesActions } from './sale-actions';



@Injectable()
export class SalesEffects {


    @Effect() addSale$ = createEffect(() => this.actions$.pipe(
        ofType(SalesActions.AddSaleAction),
        exhaustMap(({ title,count,total }) => this.salesHttp.addSale$( title,count,total ).pipe(
            map((isAdded) => SalesActions.AddSaleSuccessAction({isAdded})),
            catchError(error => of(SalesActions.AddSaleFailureAction({ error }))
            )),
        )
    ));

    
    @Effect() getTopSel$ = createEffect(() => this.actions$.pipe(
        ofType(SalesActions.GetTopSelAction),
        exhaustMap(() => this.salesHttp.getTopSel$().pipe(
            map((topSel) => SalesActions.GetTopSelSuccessAction({ topSel })),
            catchError(error => of(SalesActions.GetTopSelFailureAction({ error }))
            )),

        )
    ));


    @Effect() getUniqueTopSel$ = createEffect(() => this.actions$.pipe(
        ofType(SalesActions.GetTopUniqueSelAction),
        exhaustMap(() => this.salesHttp.getTopUniqueSel$().pipe(
            map((topUniqueSel) => SalesActions.GetTopUniqueSelSuccessAction({ topUniqueSel })),
            catchError(error => of(SalesActions.GetTopUniqueSelFailureAction({ error }))
            )),

        )
    ));

    @Effect() getPastDays$ = createEffect(() => this.actions$.pipe(
        ofType(SalesActions.GetPastDaysAction),
        exhaustMap(() => this.salesHttp.getPastDays$().pipe(
            map((pastDays) => SalesActions.GetPastDaysSuccessAction({ pastDays })),
            catchError(error => of(SalesActions.GetPastDaysFailureAction({ error }))
            )),

        )
    ));

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private http: HttpClient,
        private salesHttp: SalesHttpService,
        @Inject(EnvironmentTOKEN) private env: any
    ) { }
}