import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { MovieSearchService } from './movie-search.service';
import { MovieService } from './movie.service';
import { Movie } from './movie';

@Component({
    selector: 'movie-search',
    templateUrl: './movie-search.component.html',
    providers: [MovieSearchService, MovieService]
})
export class MovieSearchComponent implements OnInit {
    movies: Observable<Movie[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private movieSearchService: MovieSearchService,
        private router: Router) { }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.movies = this.searchTerms
            .debounceTime(300) 
            .distinctUntilChanged() 
            .switchMap(term => term ? this.movieSearchService.search(term)
                // or the observable of empty heroes if there was no search term
                : Observable.of<Movie[]>())
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Movie[]>([]);
            });
    }
}