import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { MovieService } from './movie.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app/movies-list.component.html',
  styleUrls: ['app/movies-list.component.css'],
  providers: [MovieService]

})
export class AppComponent implements OnInit {
  title = 'Retro VHS';
  movies: Movie[];
  selectedMovie: Movie;
  constructor(private movieService: MovieService) { }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
  getMovies(): void {
    this.movieService.getMovies().then(movies=>this.movies=movies);
  }
  ngOnInit(): void {
    this.getMovies();
  }
}





