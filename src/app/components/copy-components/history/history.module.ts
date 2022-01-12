import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { DeleteModule } from '../../common-components/delete/delete.module';
import { BoardModule } from '../../common-components/board/board.module';
import { MatMenuModule } from '@angular/material/menu'

@NgModule({
  declarations: [
    HistoryComponent
  ], 
  imports: [
    CommonModule,
    DeleteModule,
    BoardModule,
    MatMenuModule
  ],
  exports: [
    HistoryComponent
  ]
})
export class HistoryModule { }
