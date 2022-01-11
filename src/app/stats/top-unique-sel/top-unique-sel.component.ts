import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TopUniqueSel } from 'types';
import { Observable } from 'rxjs';
import { delay, filter, tap } from 'rxjs/operators';
import {  SalesActions, SalesStoreState, topUniqueSelSelector } from 'store';

@Component({
  selector: 'app-top-unique-sel',
  templateUrl: './top-unique-sel.component.html',
  styleUrls: ['./top-unique-sel.component.scss']
})
export class TopUniqueSelComponent implements OnInit {

  @Input() topUniqueSel=[{Title:"pizza",Count:100},{Title:"coffee",Count:55},{Title:"iceCream",Count:77}]

  constructor(private store: Store<SalesStoreState>) { }

  topUniqueSel$: Observable<TopUniqueSel[]> = this.store.pipe(
    select(topUniqueSelSelector),
    delay(0),
    tap(topUniqueSel => console.log('topUniqueSel 1', topUniqueSel)),
    filter(topUniqueSel => !!topUniqueSel)
  )

  ngOnInit() {
    this.store.dispatch(SalesActions.GetTopUniqueSelAction());
  }

}
