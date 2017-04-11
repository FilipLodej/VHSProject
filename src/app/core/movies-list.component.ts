import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { MovieService } from './movie.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'my-movies',
  templateUrl: 'app/core/movies-list.component.html',
  providers: [MovieService]

})
export class MoviesComponent implements OnInit {
  title = 'Retro VHS';
  movies: Movie[];
  selectedMovie: Movie;
  selectedEditMovie: Movie;
  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  onSelectEdit(movie: Movie): void {
    this.selectedEditMovie = movie;
  }

  getMovies(): void {
    this.movieService.getMovies().then(movies => this.movies = movies);
  }
  ngOnInit(): void {
    this.getMovies();
  }
  save(): void {
    this.movieService.update(this.selectedEditMovie);
  }
  goBack(): void {
    this.location.back();
  }
  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.movieService.create(title)
      .then(movie => {
        movie.status="free";
        this.movies.push(movie);
        this.onSelectEdit(movie);
        this.selectedMovie = null;
      })
  }
  delete(movie: Movie): void {
    this.movieService
      .delete(movie.id)
      .then(() => {
        this.movies = this.movies.filter(h => h !== movie);
        if (this.selectedMovie === movie) { this.selectedMovie = null; }
      });
  }
    rentMovie(movie: Movie, rentDate: string){
    movie.status = "rented";
    movie.rentDate = rentDate;
    this.movieService.update(movie);
  }
}





