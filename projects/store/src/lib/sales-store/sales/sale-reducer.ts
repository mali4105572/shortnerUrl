
import { Action, createReducer, on } from '@ngrx/store';
import { SalesActions } from './sale-actions';
import { SalesState } from './sale-state';


const reducer = createReducer(
    new SalesState(),
    on(SalesActions.AddSaleSuccessAction, (state, { isAdded }) => ({ ...state, isAdded })),
    on(SalesActions.GetTopSelSuccessAction, (state, { topSel }) => ({ ...state, topSel })),
    on(SalesActions.GetTopUniqueSelSuccessAction, (state, { topUniqueSel }) => ({ ...state, topUniqueSel })),
    on(SalesActions.GetPastDaysSuccessAction, (state, { pastDays }) => ({ ...state, pastDays })),

)

export function SalesReducer(state: SalesState | undefined, action: Action) {
    return reducer(state, action); 
}



