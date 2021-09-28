import { Component, Input, OnInit } from '@angular/core';

export type FieldOf<T> = keyof T & string;

export type ValueOf<T, K extends FieldOf<T> = FieldOf<T>> = T | T[K];

@Component({
  selector: 'lib-lib2',
  template: `
    <p>
      lib2 works!
      {{ value }}
    </p>
  `,
})
export class Lib2Component<T = any, V extends ValueOf<T> = any>
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
