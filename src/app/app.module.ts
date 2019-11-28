import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IgxNavbarModule, IgxGridModule,IgxExcelExporterService,
         IgxButtonModule, IgxIconModule } from 'igniteui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { PropertyListComponent } from './property-list/property-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent
  ],
  imports: [
    BrowserModule,
    IgxNavbarModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxButtonModule,
    IgxIconModule
  ],
  providers: [IgxExcelExporterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
