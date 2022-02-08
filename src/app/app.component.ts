import { HttpClient } from '@angular/common/http';
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

  data: any[] = [];
  /**
   *
   */
  // 透過注入方式
  // 服務元件使用方式;元件來自另一個模組
  constructor(private http: HttpClient) {
    http.get<any[]>('/api/article.json').subscribe({
      next: (data) => {this.data = data;}
    })
  }




  doSearch(value: string) {
    this.result = value;
  }
}
