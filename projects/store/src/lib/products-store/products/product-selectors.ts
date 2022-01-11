import { createFeatureSelector, MemoizedSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './product-state';
import {  Product } from 'types';

const productsFeatureSelector: MemoizedSelector<object, ProductsState> =
    createFeatureSelector<ProductsState>('products');

export const productsSelector: MemoizedSelector<object, Product[]> =
    createSelector(productsFeatureSelector, ({ products }) => products);

// export const getproductsSelector: MemoizedSelector<object, Product[]> =
//     createSelector(productsFeatureSelector, ({ products }) => products);

export const addproductSelector: MemoizedSelector<object, boolean> =
    createSelector(productsFeatureSelector, ({ isAdded }) => isAdded);

export const deleteproductSelector: MemoizedSelector<object, boolean> =
    createSelector(productsFeatureSelector, ({ isDelete }) => isDelete);

    
// export const editproductSelector: MemoizedSelector<object, boolean> =
// createSelector(productsFeatureSelector, ({ isEdit }) => isEdit);




 
 