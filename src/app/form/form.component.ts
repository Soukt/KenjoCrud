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
  pageTitle:string="Add Artist"
  parametro:string;
  artistToUpdate:any;
  artistToBe={
    name:"",
    birthdate:"",
    deathDate:"",
    photoUrl:""
  }

  constructor(private route: ActivatedRoute,private dataService: DataService) { }
  clickUpdateArtist(id){
    console.log(id)
        this.dataService.updateArtist(id, this.artistToBe).subscribe(((data:Artist)=>console.log("artista updateado")));
        window.location.replace("")
  }

  onKey(event) {
    let field=event.target.name;

    this.artistToBe[field]=event.target.value;
    console.log(this.artistToBe);
  }
  clickAddArtist(event):void{
console.log(this.artistToBe);

    console.log("estas intentando añadir un artista");
      // this.artistToBe.birth= new Date(this.artistToBe.birth)+"";
      // this.artistToBe.death= new Date(this.artistToBe.death)+"";
      console.log(this.artistToBe);
       this.dataService.createArtist(this.artistToBe).subscribe(((data:Artist)=>console.log("artista añadido")));
  }




  ngOnInit(): void {
    this.parametro = this.route.snapshot.paramMap.get("id");
    if(this.parametro){this.pageTitle="Edit Artist"};



  }

}
