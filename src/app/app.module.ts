import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {BufRowComponent} from './buf-row/buf-row.component';
import {UserDataSetService} from './user-data-set.service';
import {LoaderService} from './loader.service';


@NgModule({
  declarations: [
    AppComponent,
    BufRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserDataSetService, LoaderService],
  bootstrap: [AppComponent],
  entryComponents: [BufRowComponent]
})
export class AppModule {
}
