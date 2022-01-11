import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { TableModule } from '../table/table.module';
import { ProductFormModule } from '../product-form/product-form.module';
import { ContextMenuModule } from 'primeng/primeng';
import { MyTableModule, PhDialogModule } from 'design';
import { DialogFormModule } from 'src/app/dialog-form/dialog-form.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    TableModule,
    DialogFormModule,
    ProductFormModule,
    ContextMenuModule,
    MyTableModule,
    PhDialogModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forChild([
      { path: 'admin', component: AdminComponent}
    ]),
  ],
  exports:[AdminComponent]
})
export class AdminModule { }
