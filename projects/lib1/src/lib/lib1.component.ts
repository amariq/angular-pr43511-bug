import { Component, OnInit } from '@angular/core';
import { Lib2Component, ValueOf } from 'lib2';

@Component({
  selector: 'lib-lib1',
  template: ` <p>lib1 works! {{ value }}</p> `,
  styles: [],
})
export class Lib1Component<T = any, V extends ValueOf<T> = ValueOf<T>>
  extends Lib2Component<T, V[]>
  implements OnInit
{
  ngOnInit(): void {
    // hello there!
  }
}
