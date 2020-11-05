import { Component, NgModule, OnInit } from '@angular/core';
import {Album} from "../shared/album"
import {Artist} from "../shared/artist"
import { DataService } from '../data.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  pageTitle:string= "MainBody"
  albumList:Album[];

  artistList:Artist[];

  constructor(private dataService: DataService) { }
   deleteClick(idArtist):void{
     console.log(idArtist);
     let artist;
      this.dataService.getArtist(idArtist).subscribe((data:Artist)=>{

          if(confirm("Yes, I want to delete "+data.name))
        this.dataService.deleteArtist(data._id).subscribe((removed)=> console.log(removed))
window.location.reload();
      }


     );
   }
  ngOnInit(): void {
    this.dataService.getAllAlbums().subscribe((data: any[])=>{

      this.albumList = data;

    })
    this.dataService.getAllArtists().subscribe((data:Artist[])=>{
      this.artistList = data;})
  }

}
