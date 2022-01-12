import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardComponent } from './board.component';
import { DeleteModule } from '../delete/delete.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DeleteModule,
    ReactiveFormsModule,  
    MatButtonModule,
    MatInputModule
    
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
