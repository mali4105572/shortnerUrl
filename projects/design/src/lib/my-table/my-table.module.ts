import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTableComponent } from './my-table.component';
import { FormsModule } from '@angular/forms';
import { DisplayValueModule } from '../display-value/display-value.module';
import { TooltipModule, PaginatorModule, ContextMenuModule, DropdownModule } from 'primeng/primeng';
import { TableModule } from 'primeng/components/table/table';
// import { InlineLabelSpanModule } from '../controls/inline-label-span/inline-label-span.module';
// import { PhFilterModule } from '../controls/ph-filter/ph-filter.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    DropdownModule,
    ContextMenuModule,
    DisplayValueModule,
    TooltipModule,
    // InlineLabelSpanModule,
    // PhFilterModule
  ],
  declarations: [MyTableComponent],
  exports: [MyTableComponent]
})
export class MyTableModule { }
