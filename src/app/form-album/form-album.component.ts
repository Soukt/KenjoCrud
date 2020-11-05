import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-album',
  templateUrl: './form-album.component.html',
  styleUrls: ['./form-album.component.css']
})
export class FormAlbumComponent implements OnInit {

  constructor() { }
addAlbum():void{
  console.log("Has hecho click en addAlbum");
}
  ngOnInit(): void {
  }

}
