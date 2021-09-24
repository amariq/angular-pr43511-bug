import { NgModule } from '@angular/core';
import { Lib2Component } from 'lib2';
import { Lib1Component } from './lib1.component';

@NgModule({
  declarations: [Lib1Component],
  imports: [Lib2Component],
  exports: [Lib1Component],
})
export class Lib1Module {}
