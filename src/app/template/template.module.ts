import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import {LayoutModule} from "../layout/layout.module";
import {MonTestComponent} from "../mon-test/mon-test.component";


@NgModule({
  declarations: [
    TemplateComponent,

    MonTestComponent,
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    LayoutModule
  ]
})
export class TemplateModule { }
