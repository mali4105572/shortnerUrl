import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'types';
import { CartsActions, CartsStoreState } from 'store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  constructor(private store: Store<any>) { }

  
  @Input() product:Product;

  ngOnInit(): void {
    
  }

  
  Buy(product:Product) {
    console.log(product.Title);
    const title=product.Title;
    const price=product.Price;
    
    this.store.dispatch(CartsActions.AddCartAction({title,price}))
    this.store.dispatch(CartsActions.GetCartsAction());

  }

}
