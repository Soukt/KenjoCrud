import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { FormAlbumComponent } from './form-album/form-album.component';
import { MainAlbumComponent } from './main-album/main-album.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    NavbarComponent,
    FormAlbumComponent,
    MainAlbumComponent,


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
