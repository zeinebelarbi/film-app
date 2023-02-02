import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FilmService {
readonly API_URL ="http://localhost:8086" 
readonly ENDPOINT_FILMS ="/films"
  constructor(private httpClient: HttpClient) {

   }
   getFilms(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_FILMS)
   }
}
