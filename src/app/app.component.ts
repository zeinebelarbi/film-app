import { Component } from '@angular/core';
import { FilmService } from './film.service';
import{OnInit} from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FilmService]

})
export class AppComponent implements OnInit {
  title = 'film-app';
  films:any
  constructor (private filmservice:FilmService){

  }
  ngOnInit() {
    console.log('On init.....')
  this.filmservice.getFilms().subscribe((datas)=>{
    this.films =datas;

  })
  }
}
