import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DeleteComponent
  ],
  imports: [
    CommonModule,      
    MatButtonModule
  ],
  exports:[
    DeleteComponent
  ]
})
export class DeleteModule { }
