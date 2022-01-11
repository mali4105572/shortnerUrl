import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay, filter, map, takeWhile, tap } from 'rxjs/operators';
import { NavigationService } from 'src/app/services/navigation.service';
import { ProductsActions, productsSelector, ProductsStoreState } from 'store';
import { Product } from 'types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  header = 'edit the product'
  selectedProduct
  TitleDelete = ''
  num=99



  products$: Observable<Product[]> = this.store.pipe(
    select(productsSelector),
    delay(0),
    tap(products => console.log('products 1000', products)),
    filter(products => !!products)
  )

  constructor(
    private store: Store<ProductsStoreState>,
    public nav: NavigationService) { }

  @Input() products: Product[] = [{ProductId:1, Title: "ss", Price: 12, Description: "g", Image: "hfje" }, {ProductId:2, Title: "aa", Price: 22, Description: "g", Image: "hfje" }]

  ngOnInit() {
    const Title = ""
    this.store.dispatch(ProductsActions.GetProductsAction());

  }


  edit(product) {
    this.selectedProduct = product
    console.log(this.selectedProduct);
    this.nav.clear();
    this.nav.showEditDialog = true;
    this.nav.displayDialog = 'editProduct';
  }

  onShow() {

  }
  onHide() {

  }

  delete(product) {
    console.log(product);
    this.TitleDelete = product.Title;
    const id =  product.ProductId
    this.store.dispatch(ProductsActions.DeleteProductAction({ id }));
    this.store.dispatch(ProductsActions.GetProductsAction());
  }

}
