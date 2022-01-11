import { Action, createAction, props } from '@ngrx/store';
import { TopSel } from 'types';
import { Cart, PastDays, TopUniqueSel } from 'types';

export const SalesActions = {

    AddSaleAction: createAction('[Sales] Add Sales', props<{ title:string,count:number,total:number}>()),
    AddSaleSuccessAction: createAction('[Sales] Add Sales Success', props<{ isAdded: boolean }>()),
    AddSaleFailureAction: createAction('[Sales] Add Sales Failure', props<{ error: any }>()),

      
    GetTopSelAction: createAction('[Sales] Get Top Sel'),
    GetTopSelSuccessAction: createAction('[Sales] Get Top Sel Success', props<{ topSel: TopSel[] }>()),
    GetTopSelFailureAction: createAction('[Sales] Get Top Sel Failure', props<{ error: any }>()),


    GetTopUniqueSelAction: createAction('[Sales] Get Top Unique Sel'),
    GetTopUniqueSelSuccessAction: createAction('[Sales] Get Top Unique Sel Success', props<{ topUniqueSel: TopUniqueSel[] }>()),
    GetTopUniqueSelFailureAction: createAction('[Sales] Get Top Unique Sel Failure', props<{ error: any }>()),

    GetPastDaysAction: createAction('[Sales] Get Past Days'),
    GetPastDaysSuccessAction: createAction('[Sales] Get Past Days Success', props<{ pastDays: PastDays[] }>()),
    GetPastDaysFailureAction: createAction('[Sales] Get Past Days Failure', props<{ error: any }>()),

  

}
