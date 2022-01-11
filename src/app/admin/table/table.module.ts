import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatButtonModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';
import { ProductFormModule } from '../product-form/product-form.module';
import { ContextMenuModule } from 'primeng/primeng';
import { MyTableModule, PhDialogModule} from 'design';
import { DialogFormModule } from 'src/app/dialog-form/dialog-form.module';
import { PipesModule } from 'core';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    DialogFormModule,
    ProductFormModule,
    ContextMenuModule,
    MyTableModule,
    PhDialogModule,
    MatInputModule,
    MatIconModule,
    PipesModule
  ],
  exports:[TableComponent]
}) 
export class TableModule { } 
