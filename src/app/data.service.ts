import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }
  public getAllAlbums(){
    return this.httpClient.get(this.REST_API_SERVER+'albums/all');
  }
  public getAllArtists(){
    return this.httpClient.get(this.REST_API_SERVER+'artists/all');
  }
  public getArtist(id){
    return this.httpClient.get(this.REST_API_SERVER+'artist/'+id);
  }
  public getAlbum(id){
    return this.httpClient.get(this.REST_API_SERVER+'album/'+id);
  }
  public updateArtist(id, object){
    return this.httpClient.put(this.REST_API_SERVER+'artist/'+id, object);

  }
  public deleteArtist(id){
    console.log("estas en data service")
    return this.httpClient.delete(this.REST_API_SERVER+'artist/'+id);
  }

  public createArtist(object){
    return this.httpClient.post(this.REST_API_SERVER+'artist', object);
  }


}
