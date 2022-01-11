import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ColumnValueTypes } from './model/column-value-types';
import { dateFormats, dateTimeFormats } from 'types';

@Component({
  selector: 'lib-display-value',
  templateUrl: './display-value.component.html',
  styleUrls: ['./display-value.component.scss']
})
export class DisplayValueComponent implements OnInit {
  dateFormats = dateFormats;
  dateTimeFormats = dateTimeFormats
  ColumnValueTypes = ColumnValueTypes;


  @HostBinding('class.ellipsis') ellipsis = true;
  @Input() value: any;
  @Input() columnValueTypes: ColumnValueTypes = ColumnValueTypes.string;
  @Input() color: string = 'black';

  constructor() { }

  ngOnInit() {
  }

}
