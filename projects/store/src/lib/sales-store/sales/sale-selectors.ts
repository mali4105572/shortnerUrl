import { createFeatureSelector, MemoizedSelector, createSelector } from '@ngrx/store';
import {  PastDays,  TopSel, TopUniqueSel } from 'types';
import { SalesState } from './sale-state';

const salesFeatureSelector: MemoizedSelector<object, SalesState> =
    createFeatureSelector<SalesState>('sales');

export const addSaleSelector: MemoizedSelector<object, boolean> =
    createSelector(salesFeatureSelector, ({ isAdded }) => isAdded);



export const topSelSelector: MemoizedSelector<object, TopSel[]> = 
    createSelector(salesFeatureSelector, ({ topSel }) => topSel);

export const topUniqueSelSelector: MemoizedSelector<object, TopUniqueSel[]> =
    createSelector(salesFeatureSelector, ({ topUniqueSel }) => topUniqueSel);

export const pastDaysSelector: MemoizedSelector<object, PastDays[]> =
    createSelector(salesFeatureSelector, ({ pastDays }) => pastDays);




 
 