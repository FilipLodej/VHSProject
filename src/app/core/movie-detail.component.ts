import { Component, Input } from '@angular/core';
import { RatingModule } from "ngx-rating";
import { OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';


import { Movie } from './movie';
import { MovieService } from './movie.service';
@Component({
    selector: 'movie-detail',
    templateUrl: 'app/core/movie-detail.component.html',
})
export class MovieDetailComponent {
    @Input() movie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


}
