import { Injectable } from '@angular/core';
export type dialogType =   'editProduct' | 'addProduct'
@Injectable()
export class NavigationService {
  showDialog = false;
  showEditDialog = false;
  showAddDialog = false;
  displayDialog: dialogType = 'addProduct';

  constructor() { }
 
  clear() {
    this.showDialog = false;
    this.showEditDialog = false;
    this.showAddDialog = false;
    this.displayDialog = 'addProduct';
  }
}
