import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // 元件css
  styleUrls: ['./app.component.scss']
})
// 命名規則 pascalcase
export class AppComponent {
  title = 'Steve Ou First Angular Demo';
  keyword = '123';
  result = '';

  doSearch(value: string) {
    this.result = value;
  }
}
