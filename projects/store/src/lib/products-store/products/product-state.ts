import {  Product } from 'types';

export class ProductsState {
    products: Product[] = [];
    isAdded:boolean;
    isEdit:boolean;
    isDelete:boolean;
} 