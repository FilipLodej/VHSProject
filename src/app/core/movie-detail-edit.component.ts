import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RatingModule } from "ngx-rating";
import { OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";


import { Movie } from './movie';
import { MovieService } from './movie.service';
@Component({
  selector: 'movie-detail-edit',
  templateUrl: 'app/core/movie-detail-edit.component.html',
})
export class MovieDetailEditComponent {
  @Input() movie: Movie;
  public myForm: FormGroup;


  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location,
    private _fb: FormBuilder
  ) { }

  save(selectedEditMovie: Movie): void {
    this.movieService.update(selectedEditMovie);
  }
}

