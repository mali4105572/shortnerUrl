import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor( public nav: NavigationService
    ) { }
  columns=["Title","Price","Option"]
  header='add new product'

  ngOnInit() {
  }

  onShow(){

  }

  onHide(){

  }
  
  add(){
    this.nav.clear();
    this.nav.showAddDialog = true;
    this.nav.displayDialog = 'addProduct';
  }

}
