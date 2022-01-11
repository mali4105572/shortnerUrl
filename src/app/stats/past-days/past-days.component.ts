import { getLocaleDateFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay, filter, tap } from 'rxjs/operators';
import { pastDaysSelector, SalesActions, SalesStoreState } from 'store';
import { dateTimeFormats, PastDays } from 'types';

@Component({
  selector: 'app-past-days',
  templateUrl: './past-days.component.html',
  styleUrls: ['./past-days.component.scss']
})
export class PastDaysComponent implements OnInit {

  @Input() pastDays=[{Date:"08.09.21",Price:600},{Date:"09.09.21",Price:455},{Date:"10.09.21",Price:866},]

  
  pastDays$: Observable<PastDays[]> = this.store.pipe(
    select(pastDaysSelector),
    delay(0),
    tap(pastDays => console.log('pastDays 1', pastDays)),
    filter(pastDays => !!pastDays)
  )


  constructor(private store: Store<any>) { }

  ngOnInit() {
    
    this.store.dispatch(SalesActions.GetPastDaysAction());
  }


}
