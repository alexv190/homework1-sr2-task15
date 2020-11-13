import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M2component1Component } from './m2component1/m2component1.component';
import { M2component2Component } from './m2component2/m2component2.component';
import { Module3Module } from '../module3/module3.module';



@NgModule({
    declarations: [M2component1Component, M2component2Component],
  exports: [
    M2component1Component,
    M2component2Component
  ],
    imports: [
        CommonModule,
        Module3Module
    ]
})
export class Module2Module { }
