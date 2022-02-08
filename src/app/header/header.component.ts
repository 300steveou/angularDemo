import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent {

  sitename = 'Hello world';
  sitelogo = '/assets/images/logo.png';
  counter =0;

  constructor() {

  }

  // 用強型別
  changeTitle($event: MouseEvent) {
    console.log('022');
    this.counter++;
    if ($event.ctrlKey) {
      this.sitename = 'xxxx';
    }
  }

  // changeTitle($event: PointerEvent) {
  //   console.log($event);


  // }
}
