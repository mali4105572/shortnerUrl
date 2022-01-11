import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TopSel } from 'types';
import { Observable } from 'rxjs';
import { delay, filter, tap } from 'rxjs/operators';
import {  SalesActions, SalesStoreState, topSelSelector } from 'store';

@Component({
  selector: 'app-top-sel',
  templateUrl: './top-sel.component.html',
  styleUrls: ['./top-sel.component.scss']
})
export class TopSelComponent implements OnInit {

  @Input() topSel=[{Title:"pizza",Count:100},{Title:"coffee",Count:55},{Title:"iceCream",Count:77}]
  constructor(private store: Store<SalesStoreState>) { }

  topSel$: Observable<TopSel[]> = this.store.pipe(
    select(topSelSelector),
    delay(0),
    tap(topSel => console.log('topSel 1', topSel)),
    filter(topSel => !!topSel)
  )

  ngOnInit() {
    
    this.store.dispatch(SalesActions.GetTopSelAction());
  }

}
