import { Component, NgModule, OnInit } from '@angular/core';
import {Album} from "../shared/album"
import {Artist} from "../shared/artist"
import { DataService } from '../data.service';
@Component({
  selector: 'app-main-album',
  templateUrl: './main-album.component.html',
  styleUrls: ['./main-album.component.css']
})
export class MainAlbumComponent implements OnInit {

  pageTitle:string= "MainBody"
  albumList:Album[];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllAlbums().subscribe((data: any[])=>{

      this.albumList = data;

    })


}
}
