import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/primeng';
import { DialogFormComponent } from './dialog-form.component';



@NgModule({
  declarations: [DialogFormComponent],
  imports: [
    CommonModule,
    DialogModule,
    
  ],
  exports:[DialogFormComponent]
})
export class DialogFormModule { }
