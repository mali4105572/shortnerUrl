import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhDialogComponent } from './ph-dialog.component';
import { DialogModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DialogModule
  ],
  declarations: [PhDialogComponent],
  exports: [PhDialogComponent],
})
export class PhDialogModule { }
