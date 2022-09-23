import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplateComponent} from "./template.component";
import {MonTestComponent} from "../mon-test/mon-test.component";

const routes: Routes = [
  {
    path:'',component: TemplateComponent,
    children:[
      {
        path:'montest',component:MonTestComponent
      }

    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
