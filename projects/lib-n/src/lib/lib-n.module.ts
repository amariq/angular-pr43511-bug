import { NgModule } from '@angular/core';
import { Lib2Module } from 'lib2';
import { LibNComponent } from './lib-n.component';

@NgModule({
  declarations: [LibNComponent],
  imports: [Lib2Module],
  exports: [LibNComponent],
})
export class LibNModule {}
