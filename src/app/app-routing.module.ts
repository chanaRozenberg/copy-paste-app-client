import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCopyComponent } from './components/copy-components/main-copy/main-copy.component';
import { MainPasteModule } from './components/paste-components/main-paste/main-paste.module';
const routers: Routes = [
  {path:'', redirectTo:'controlc',pathMatch:'full'},
  {path:'controlc', component: MainCopyComponent},
  {path:'controlc/:id', component: MainPasteModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
