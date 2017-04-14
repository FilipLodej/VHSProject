import { MoviesComponent } from './movies-list.component'

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';


import { FormsModule } from "@angular/forms";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpModule } from "@angular/http"
import { MovieService } from './movie.service';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieDetailEditComponent } from './movie-detail-edit.component';
import { TitleFilterPipe } from './title-filter.pipe';
import { DirectorFilterPipe } from './director-filter.pipe';
import { YearFilterPipe } from './year-filter.pipe';
import { GenreFilterPipe } from './genre-filter.pipe';

import { RouterTestingModule } from '@angular/router/testing';
import { tick } from "@angular/core/testing";


describe('MoviesComponent', () => {
  let de: DebugElement;
  let comp: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let el: HTMLElement;
  let movieService: MovieService;


  let testMovies = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      year: "1994",
      genre: 'Drama',
      director: 'Frank Darabont',
      actors: 'Morgan Freeman, Tim Robbins, Bob Gunton',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      rating: 5,
      coverUrl: '1.jpg',
      status: 'free',
      rentDate: ''
    },
    {
      id: 2,
      title: 'The Godfather',
      year: "1972",
      genre: 'Crime',
      director: 'Francis Ford Coppola',
      actors: 'Marlon Brando, Al Pacino, James Caan',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      rating: 5,
      coverUrl: '2.jpg',
      status: 'free',
      rentDate: ''
    },
    {
      id: 6,
      title: 'Pulp Fiction',
      year: "1994",
      genre: 'Crime',
      director: 'Quentin Tarantino',
      actors: 'John Travolta, Uma Thurman, Samuel L. Jackson',
      description: 'The lives of two mob hit men, a boxer, a gangsters wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      rating: 5,
      coverUrl: '6.jpg',
      status: 'rented',
      rentDate: '09.04.2017'
    }
  ];

  let testMovie = testMovies[0];


  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [MoviesComponent, MovieDetailComponent, TitleFilterPipe,
        DirectorFilterPipe, YearFilterPipe, GenreFilterPipe, MovieDetailEditComponent],

      imports: [RouterTestingModule, FormsModule, HttpModule],

      providers: [MovieService, FormBuilder],
    })

      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);

    comp = fixture.componentInstance;

    movieService = fixture.debugElement.injector.get(MovieService);



  });


  it('checks length of list of movies and called method getMovies', async(() => {
    //given
    let spy = spyOn(movieService, 'getMovies')
      .and.returnValue(Promise.resolve(comp.movies = testMovies));
    fixture.detectChanges();
    //when
    //then
    expect(spy.calls.any()).toBe(true, 'getMovies called');
    expect(testMovies.length).toBe(comp.movies.length);
  }));


  it('get to component list of movies', async(() => {
    //given
    let spy = spyOn(movieService, 'getMovies')
      .and.returnValue(Promise.resolve(comp.movies = testMovies));
    fixture.detectChanges();
    //when
    //then
    expect(testMovies).toBe(comp.movies);
  }));

  it('shows list of movies with free status', async(() => {
    //given
    let spy = spyOn(movieService, 'getMovies')
      .and.returnValue(Promise.resolve(comp.movies = testMovies));
    fixture.detectChanges();
    //when
    let elements = fixture.debugElement.queryAll(By.css('.status'));
    //then
    elements.forEach(element => {
      let e = element.nativeElement;
      expect('free').toBe(e.innertext);
    });

  }));

  it('shows list of movies without rented status', async(() => {
    //given
    let spy = spyOn(movieService, 'getMovies')
      .and.returnValue(Promise.resolve(comp.movies = testMovies));
    fixture.detectChanges();
    //when
    let elements = fixture.debugElement.queryAll(By.css('.status'));
    //then
    elements.forEach(element => {
      let e = element.nativeElement;
      expect('rented').toBeFalsy(e.innertext);
    });

  }));

  it('should test onSelect method', () => {
    //given
    //when
    comp.onSelect(testMovie);
    fixture.detectChanges();
    //then
    expect(testMovie).toBe(comp.selectedMovie);
  });

  it('should test onSelectEdit method', () => {
    //given
    //when
    fixture.detectChanges();
    comp.onSelectEdit(testMovie);

    //then
    expect(testMovie).toBe(comp.selectedEditMovie);
  });

  it('should save movie and call update method on movie service', () => {
    //given
    let movieToUpdate = testMovie[2];
    comp.onSelectEdit = movieToUpdate;
    let spy = spyOn(movieService, 'update');
    //when
    comp.save();
    //then
    expect(spy.calls.any()).toBe(true, 'update called');
    expect(movieToUpdate).toBe(comp.selectedEditMovie);
    fixture.detectChanges();
  });

  it('should add movie and call create method on movie service', (done: any) => {
    //given
    let testMovieTitle = "Movie";
    let testAddMovie = {
      id: 5,
      title: 'Movie',
      year: "",
      genre: '',
      director: '',
      actors: '',
      description: '',
      rating: 1,
      coverUrl: '',
      status: '',
      rentDate: ''
    };
    comp.movies = testMovies;
    fixture.detectChanges();
    let spy = spyOn(movieService, 'create').and.returnValue(Promise.resolve(testAddMovie));
    //when
    comp.add(testMovieTitle);
    //then
    expect(spy.calls.any()).toBe(true, 'create called');
    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      expect(4).toBe(comp.movies.length);
      done();
    });

  });

});