import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Cart } from 'types';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartsActions,  CartsStoreState, getTotalSelector, SalesActions,   } from 'store';
import { delay, filter, map, takeWhile, tap } from 'rxjs/operators';
import { cartsSelector } from 'store';
import { Title } from '@angular/platform-browser';
import { SalesState } from 'dist/store/lib/sales-store/sales/sale-state';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  private _isAlive = true;
  
  constructor(private store: Store<any>) { }

  @Input() Total=214;
  @Input() element=[{Title:"aaa",Count:4,Price:12},{Title:"bbb",Count:4,Price:44},{Title:"ccc",Count:4,Price:99}];

  carts$: Observable<Cart[]> = this.store.pipe(
    select(cartsSelector),
    delay(0),
    tap(carts => console.log('cart 1', carts)),
    filter(carts => !!carts),
    takeWhile(_ => this._isAlive)
    
  )


  total$: Observable<number> = this.store.pipe(
    select(getTotalSelector),
    delay(0),
    tap(total => console.log('total 1', total)),
    takeWhile(_ => this._isAlive)
  )


  

  ngOnInit(): void {
    this.store.dispatch(CartsActions.GetCartsAction());
    this.store.dispatch(CartsActions.GetTotalAction());
  }


  Pay(){

    // this.carts$.subscribe(result => ( this.len=result.length));
    // console.log(this.len);
    // console.log("this.len");
    // console.log(this.len);

    



    // this.carts$.forEach((cart)=>{
    //   this.len=cart.length;
    //   const title:string=this.c.Title;
    //   const count:number=this.c.Count;
    //   const total:number=this.c.Price;
    //   console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",title,count,total);
      
    //   this.store.dispatch(SalesActions.AddSaleAction({title,count,total}));
    // })




    // this.carts$.forEach((cart)=>{this.len=cart.length;})
    // console.log(this.len);
    

    // const i:number=0;
    // for(;i<this.len;i=i++){
    //   const title=this.carts$[i].Title;
    //   const count:number=this.carts$[i].Count;
    //   const price:number=this.carts$[i].Price;
    //   this.store.dispatch(SalesActions.AddSaleAction(title))
    // }

    
      
      
      // (this.store.dispatch(SalesActions.AddSaleAction({ cart.Title,count,total }));))
    

    


   

    // // if(this.isEdit){ 
    // //   const id:number= product.ProductId;
    // //   this.store.dispatch(ProductsActions.EditProductAction({title,price,description,image, id }));
    // //   this.store.dispatch(ProductsActions.GetProductsAction());
    // //   this.formGroup.reset();
    // //   this.nav.clear();
    // //   console.log("editttttttttttt");
    // // }
    // // else{

    //  this.carts$.forEach((cart)=>{
      
    //   const carts:Cart[]=cart
    //   console.log(carts);
    //   this.store.dispatch(SalesActions.AddSaleAction({carts}));
    // })
    

    // const carts:Cart[]=this.carts$;




    const title = "mali";
    const count = 12;
    const total = 111;
    this.store.dispatch(SalesActions.AddSaleAction({ title,count,total }));








    this.store.dispatch(CartsActions.DeleteCartAction());
    this.store.dispatch(SalesActions.GetPastDaysAction());
    this.store.dispatch(SalesActions.GetTopSelAction());
    this.store.dispatch(SalesActions.GetTopUniqueSelAction());
    this.store.dispatch(CartsActions.GetCartsAction());

  }

  ngOnDestroy() {
    this._isAlive = false;
  }

}
