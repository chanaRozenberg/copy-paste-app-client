import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCopyComponent } from './main-copy.component';
import { RouterModule } from '@angular/router';
import { HistoryModule } from '../history/history.module';



@NgModule({
  declarations: [
    MainCopyComponent
  ],
  imports: [
    CommonModule,
    HistoryModule,
    RouterModule.forChild([
      { path: 'controlc', component: MainCopyComponent, pathMatch: 'full' }
    ]),
  ],
  exports: [
    MainCopyComponent
  ]
})
export class MainCopyModule { }
