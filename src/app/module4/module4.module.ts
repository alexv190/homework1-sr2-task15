import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M4component1Component } from './m4component1/m4component1.component';
import { M4component2Component } from './m4component2/m4component2.component';
import { M4component3Component } from './m4component3/m4component3.component';
import { M4component4Component } from './m4component4/m4component4.component';
import { M4component5Component } from './m4component5/m4component5.component';
import {M2component1Component} from '../module2/m2component1/m2component1.component';
import {M2component2Component} from '../module2/m2component2/m2component2.component';



@NgModule({
  declarations: [M4component1Component, M4component2Component, M4component3Component, M4component4Component, M4component5Component],
  exports: [
    M4component1Component,
    M4component2Component,
    M4component3Component,
    M4component4Component,
    M4component5Component
  ],
  imports: [
    CommonModule
  ]
})
export class Module4Module { }
