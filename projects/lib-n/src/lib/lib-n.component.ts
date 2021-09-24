import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-libN',
  template: `
    <p>lib-n works!</p>

    <lib-lib2 [items]="someItems" [value]="someValue"></lib-lib2>
  `,
  styles: [],
})
export class LibNComponent implements OnInit {
  someItems = [{ id: 123 }, { id: 456 }] as MyItem[];
  someValue = 123;

  ngOnInit(): void {
    // here we are...
  }
}

export type MyItem = {
  id: number;
  text?: string;
};
