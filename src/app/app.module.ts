import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Grid1Component } from './grid1/grid1.component';
import { Grid2Component } from './grid2/grid2.component';
import { Grid3Component } from './grid3/grid3.component';
import { Grid4Component } from './grid4/grid4.component';
import { Grid5Component } from './grid5/grid5.component';
import { Grid6Component } from './grid6/grid6.component';
import { Grid7Component } from './grid7/grid7.component';
import { Grid8Component } from './grid8/grid8.component';
import { Grid9Component } from './grid9/grid9.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Grid1Component,
    Grid2Component,
    Grid3Component,
    Grid4Component,
    Grid5Component,
    Grid6Component,
    Grid7Component,
    Grid8Component,
    Grid9Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
