import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M1component1Component } from './m1component1/m1component1.component';
import { Module2Module } from '../module2/module2.module';



@NgModule({
  declarations: [M1component1Component],
  exports: [
    M1component1Component
  ],
  imports: [
    CommonModule,
    Module2Module
  ]
})
export class Module1Module { }
