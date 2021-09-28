import { NgModule } from '@angular/core';
import { Lib2Module } from 'lib2';
import { Lib1Component } from './lib1.component';

@NgModule({
  declarations: [
    Lib1Component
  ],
  imports: [
    Lib2Module
  ],
  exports: [
    Lib1Component
  ],
})
export class Lib1Module { }
