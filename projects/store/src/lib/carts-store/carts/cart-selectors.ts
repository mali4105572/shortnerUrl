import { createFeatureSelector, MemoizedSelector, createSelector } from '@ngrx/store';
import {  Cart, TopSel, PastDays } from 'types';
import { CartsState } from './cart-state';

const cartsFeatureSelector: MemoizedSelector<object, CartsState> =
    createFeatureSelector<CartsState>('carts');
    

export const cartsSelector: MemoizedSelector<object, Cart[]> =
    createSelector(cartsFeatureSelector, ({ carts }) => carts);


export const addCartsSelector: MemoizedSelector<object, boolean> =
    createSelector(cartsFeatureSelector, ({ isAdded }) => isAdded);

export const deleteCartsSelector: MemoizedSelector<object, boolean> =
    createSelector(cartsFeatureSelector, ({ isDelete }) => isDelete);


export const getTotalSelector: MemoizedSelector<object, number> =
    createSelector(cartsFeatureSelector, ({ total }) => total);


