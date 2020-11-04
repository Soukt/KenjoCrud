import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailAlbumComponent } from './detail-album/detail-album.component';
import { DetailArtistComponent } from './detail-artist/detail-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    ListComponent,
    NavbarComponent,
    DetailAlbumComponent,
    DetailArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
