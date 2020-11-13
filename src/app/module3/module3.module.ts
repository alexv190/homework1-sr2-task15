import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M3component1Component } from './m3component1/m3component1.component';
import { M3component2Component } from './m3component2/m3component2.component';
import { M3component3Component } from './m3component3/m3component3.component';
import { Module4Module } from '../module4/module4.module';
import {M2component1Component} from '../module2/m2component1/m2component1.component';
import {M2component2Component} from '../module2/m2component2/m2component2.component';



@NgModule({
    declarations: [M3component1Component, M3component2Component, M3component3Component],
  exports: [
    M3component1Component,
    M3component2Component,
    M3component3Component
  ],
    imports: [
        CommonModule,
        Module4Module
    ]
})
export class Module3Module { }
