import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormAlbumComponent } from './form-album/form-album.component';
import { FormComponent } from './form/form.component';
import { MainAlbumComponent } from './main-album/main-album.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full',component: MainComponent},
  { path: 'createArtist', component: FormComponent },
  { path: 'albums', component: MainAlbumComponent },
  { path: 'createAlbum', component: FormAlbumComponent },
  { path: 'editArtist/:id', component: FormComponent },
  { path: 'editAlbum/:id', component: FormAlbumComponent },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
