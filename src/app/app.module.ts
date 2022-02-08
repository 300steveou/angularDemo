import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  // 宣稱註冊
  // 宣告跟view有關的元件
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  // 註冊 module就是封裝component
  // 宣告要匯入此模組的外部模組
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  // 依序啟動
  bootstrap: [AppComponent]
})

export class AppModule { }
