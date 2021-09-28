import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib1',
  template: `
    <p>lib1 works!</p>
    <lib-lib2 [items]="[]" [value]="null"></lib-lib2>
  `,
})
export class Lib1Component
  implements OnInit
{
  ngOnInit(): void {
    // hello there!
  }
}
