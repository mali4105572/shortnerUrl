import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'types';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { select, Store } from '@ngrx/store';
import { ProductsActions, productsSelector, ProductsStoreState } from 'store';
import { delay, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isClicked=false;
  imgPath=environment.imagePath
  constructor(private store: Store<any>) { }

  @Input() products=[{Title:'coffee',Price:12,Desc:"saf",Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UD5VkqnKk6rRVNnnP0gqgBtCbnHfeC2ifC-aVN0NeEykZJ78gz-xetvILg&usqp=CAc'}
  ,{Title:'pizza',Price:77,Desc:"saf",Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UD5VkqnKk6rRVNnnP0gqgBtCbnHfeC2ifC-aVN0NeEykZJ78gz-xetvILg&usqp=CAc'}
  ,{Title:'burger',Price:77,Desc:"saf",Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UD5VkqnKk6rRVNnnP0gqgBtCbnHfeC2ifC-aVN0NeEykZJ78gz-xetvILg&usqp=CAc'}];

  products$: Observable<Product[]> = this.store.pipe(
    select(productsSelector),
    delay(0),
    tap(products => console.log('products 1', products)),
    filter(products => !!products)
  )
  
  
  ngOnInit(): void {
    this.store.dispatch(ProductsActions.GetProductsAction());
  }

  shoppingCart(){
    if(this.isClicked)
      this.isClicked=false;
    else
      this.isClicked=true;
    
  }

}
