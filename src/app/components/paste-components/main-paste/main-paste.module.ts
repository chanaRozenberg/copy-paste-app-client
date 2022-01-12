import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPasteComponent } from './main-paste.component';
import { RouterModule } from '@angular/router';
import { BoardModule } from '../../common-components/board/board.module';



@NgModule({
  declarations: [
    MainPasteComponent
  ],
  imports: [
    CommonModule,
    BoardModule,
    RouterModule.forChild([
      { path: 'controlc/:id', component: MainPasteComponent, pathMatch: 'full' }
    ]),
  ],
  exports: [
    MainPasteComponent
  ]
})
export class MainPasteModule { }
