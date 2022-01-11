import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Product } from 'types';
import { CartsActions, ProductsActions } from 'store';
import { NavigationService } from 'src/app/services/navigation.service';
//import { CartsStoreState } from 'store';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnChanges {
  value = "kfk"
  formGroup: FormGroup;
  
  
  @Input() isEdit:boolean;
  @Input() selectedProduct:Product;

  
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private nav: NavigationService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    const { selectedProduct } = changes;
    if (selectedProduct) {
      const { currentValue } = selectedProduct
      if (currentValue) {
        this.formGroup.setValue(currentValue)
      }
    }
  }

  ngOnInit() {
    this.initForm();
    
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      ProductId: this.formBuilder.control('', [Validators.required]),
      Title: this.formBuilder.control('', [Validators.required]),
      Price: this.formBuilder.control('', [Validators.required]),
      Description: this.formBuilder.control('', [Validators.required]),
      Image: this.formBuilder.control('', [Validators.required]),
    })
  }
 
  
  save() {
    const product = this.formGroup.value;
    const title = product.Title;
    const price = product.Price;
    const description = product.Description;
    const image = product.Image;
    console.log(image);
    

    if(this.isEdit){ 
      const id:number= product.ProductId;
      this.store.dispatch(ProductsActions.EditProductAction({title,price,description,image, id }));
      this.store.dispatch(ProductsActions.GetProductsAction());
      this.formGroup.reset();
      this.nav.clear();
      console.log("editttttttttttt");
    }
    else{
        this.store.dispatch(ProductsActions.AddProductAction({ title,price,description,image }));
        this.store.dispatch(ProductsActions.GetProductsAction());
        this.formGroup.reset();
        this.nav.clear();
        console.log("adddddddddddd");
    }
  }
}
