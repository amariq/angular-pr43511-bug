import { Component, Input, OnInit } from '@angular/core';
import { ValueOf, ValueOrArray } from './lib2.interface';

@Component({
  selector: 'lib-lib2',
  template: `
    <p>
      lib2 works!
      {{ value }}
    </p>
  `,
  styles: [],
})
export class Lib2Component<T = any, V extends ValueOrArray<ValueOf<T>> = any>
  implements OnInit
{
  @Input()
  items!: T[];

  @Input()
  value!: V;

  ngOnInit(): void {
    // hello again!
  }
}
