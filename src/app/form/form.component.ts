import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { ActivatedRoute } from "@angular/router";
import { Artist } from '../shared/artist';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  parametro:string;
  constructor(private route: ActivatedRoute,private dataService: DataService) { }
  clickUpdateArtist(id){
    console.log("estas intentando añadir un artista")
    let artista={
      "name":"pedro sanchez",
      "photoUrl":"https://www.biography.com/.image/t_share/MTQ3NjM5MTEzMTc5MjEwODI2/eminem_photo_by_dave_j_hogan_getty_images_entertainment_getty_187596325.jpg",
      "birthdate":1990,
      "deathDate": 2020}
      this.dataService.updateArtist(id, artista).subscribe(((data:Artist)=>console.log("artista updateado")))
  }
  clickAddArtist():void{
    console.log("estas intentando añadir un artista")
    let artista={
      "name":"m&m",
      "photoUrl":"https://www.biography.com/.image/t_share/MTQ3NjM5MTEzMTc5MjEwODI2/eminem_photo_by_dave_j_hogan_getty_images_entertainment_getty_187596325.jpg",
      "birthdate":1990,
      "deathDate": 2020}
      this.dataService.createArtist(artista).subscribe(((data:Artist)=>console.log("artista añadido")))
  }
// this.dataService.
//   deleteClick(idArtist):void{
//     console.log(idArtist);
//     let artist
//      this.dataService.getArtist(idArtist).subscribe((data:Artist)=>{

//          if(confirm("estas seguro de que quieres borrar a "+data.name))
//        this.dataService.deleteArtist(data._id).subscribe((removed)=> console.log(removed))
// window.location.reload();
//      }


//     );
  // }




  ngOnInit(): void {
    this.parametro = this.route.snapshot.paramMap.get("id")
  }

}
