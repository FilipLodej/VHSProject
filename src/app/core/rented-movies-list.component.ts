import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { MovieService } from './movie.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'rented-movies',
    templateUrl: 'app/core/rented-movies-list.component.html',
    providers: [MovieService]

})
export class RentedMoviesComponent implements OnInit {
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
    returnMovie(movie: Movie) {
        movie.status = "free";
        movie.rentDate = "";
        this.movieService.update(movie);
    }
}





