import { Component, OnInit } from '@angular/core';
import {Album} from "../shared/album"
import {Artist} from "../shared/artist"
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  pageTitle:string= "MainBody"
  albumList:Album[];
  artistList:Artist[]=[
    {
      "_id": "id",
      "_createdAt":"createdField",
      "_updatedAt":"updateField",

      "name":"Elvis Presley",
    "photoUrl":"https://mexico.as.com/mexico/imagenes/2019/08/16/tikitakas/1565975021_713225_1565975140_noticia_normal.jpg","birthdate":1980,
    "deathDate": 2022},
    {
       "name":"Ringo",
    "photoUrl":"https://mexico.as.com/mexico/imagenes/2019/08/16/tikitakas/1565975021_713225_1565975140_noticia_normal.jpg",
    "birthdate":1980,
    "deathDate": 2021,"_id": "id",
    "_createdAt":"createdField",
    "_updatedAt":"updateField"},

    {
      "name":"AcDc",
      "photoUrl":"https://mexico.as.com/mexico/imagenes/2019/08/16/tikitakas/1565975021_713225_1565975140_noticia_normal.jpg",
      "birthdate":1990,
      "deathDate": 2020,
      "_id": "id",
      "_createdAt":"createdField",
      "_updatedAt":"updateField",},{
        "name":"AcDc",
        "photoUrl":"https://mexico.as.com/mexico/imagenes/2019/08/16/tikitakas/1565975021_713225_1565975140_noticia_normal.jpg",
        "birthdate":1990,
        "deathDate": 2020,
        "_id": "id",
        "_createdAt":"createdField",
        "_updatedAt":"updateField",},{
          "name":"AcDc",
          "photoUrl":"https://mexico.as.com/mexico/imagenes/2019/08/16/tikitakas/1565975021_713225_1565975140_noticia_normal.jpg",
          "birthdate":1990,
          "deathDate": 2020,
          "_id": "id",
          "_createdAt":"createdField",
          "_updatedAt":"updateField",},{
            "name":"AcDc",
            "photoUrl":"https://mexico.as.com/mexico/imagenes/2019/08/16/tikitakas/1565975021_713225_1565975140_noticia_normal.jpg",
            "birthdate":1990,
            "deathDate": 2020,
            "_id": "id",
            "_createdAt":"createdField",
            "_updatedAt":"updateField",},{
              "name":"AcDc",
              "photoUrl":"https://mexico.as.com/mexico/imagenes/2019/08/16/tikitakas/1565975021_713225_1565975140_noticia_normal.jpg",
              "birthdate":1990,
              "deathDate": 2020,
              "_id": "id",
              "_createdAt":"createdField",
              "_updatedAt":"updateField",},{
                "name":"AcDc",
                "photoUrl":"https://mexico.as.com/mexico/imagenes/2019/08/16/tikitakas/1565975021_713225_1565975140_noticia_normal.jpg",
                "birthdate":1990,
                "deathDate": 2020,
                "_id": "id",
                "_createdAt":"createdField",
                "_updatedAt":"updateField",},{
      "name":"AcDc",
      "photoUrl":"https://mexico.as.com/mexico/imagenes/2019/08/16/tikitakas/1565975021_713225_1565975140_noticia_normal.jpg",
      "birthdate":1990,
      "deathDate": 2020,
      "_id": "id",
      "_createdAt":"createdField",
      "_updatedAt":"updateField",},{
      "name":"AcDc",
      "photoUrl":"https://mexico.as.com/mexico/imagenes/2019/08/16/tikitakas/1565975021_713225_1565975140_noticia_normal.jpg",
      "birthdate":1990,
      "deathDate": 2020,
      "_id": "id",
      "_createdAt":"createdField",
      "_updatedAt":"updateField",}
  ]
  ;

  constructor() { }

  ngOnInit(): void {
  }

}
