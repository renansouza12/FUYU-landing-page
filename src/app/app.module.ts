import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursorComponent } from './components/ui/cursor/cursor.component';
import { HeroComponent } from './components/sections/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    CursorComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
