import { RentedMoviesComponent } from './rented-movies-list.component'

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

describe('RentedMoviesComponent', () => {
    let de: DebugElement;
    let comp: RentedMoviesComponent;
    let fixture: ComponentFixture<RentedMoviesComponent>;
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
            status: 'rented',
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

            declarations: [RentedMoviesComponent, MovieDetailComponent, TitleFilterPipe,
                DirectorFilterPipe, YearFilterPipe, GenreFilterPipe, MovieDetailEditComponent],

            imports: [RouterTestingModule, FormsModule, HttpModule],

            providers: [MovieService, FormBuilder],
        })

            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RentedMoviesComponent);

        comp = fixture.componentInstance;

        movieService = fixture.debugElement.injector.get(MovieService);


    });


    it('checks length of list of movies and called method getMovies', () => {
        //given
        let spy = spyOn(movieService, 'getMovies')
            .and.returnValue(Promise.resolve(comp.movies = testMovies));
        fixture.detectChanges();
        //when
        //then
        expect(spy.calls.any()).toBe(true, 'getMovies called');
        expect(testMovies.length).toBe(comp.movies.length);
    });


    it('get to component list of movies', () => {
        //given
        let spy = spyOn(movieService, 'getMovies')
            .and.returnValue(Promise.resolve(comp.movies = testMovies));
        fixture.detectChanges();
        //when
        //then
        expect(testMovies).toBe(comp.movies);
    });

    it('shows list of movies with rented status checks length of list', () => {
        //given
        let spy = spyOn(movieService, 'getMovies')
            .and.returnValue(Promise.resolve(comp.movies = testMovies));
        fixture.detectChanges();
        //when
        let elements = fixture.debugElement.queryAll(By.css('#status'));
        let element = fixture.debugElement.query(By.css('#status'));
        //then
        let e = element.nativeElement;
        expect(2).toBe(elements.length);



    });

    it('shows list of movies without free status', () => {
        //given
        let spy = spyOn(movieService, 'getMovies')
            .and.returnValue(Promise.resolve(comp.movies = testMovies));
        fixture.detectChanges();
        //when
        let elements = fixture.debugElement.queryAll(By.css('#status'));
        //then
        elements.forEach(element => {
            let e = element.nativeElement;
            expect(e.innertext).toBeFalsy('free');
        });

    });

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

    it('should test return calculator when return is delayed', () => {
        //given
        let broken: boolean = false;
        let notRewind: boolean = false;
        let delayed: boolean = true;
        //when
        comp.returnCalculator(broken, notRewind, delayed);
        //then
        expect(10).toBe(comp.returnPayment);
    });

    it('should test return calculator when return is broken', () => {
        //given
        let broken: boolean = true;
        let notRewind: boolean = false;
        let delayed: boolean = false;
        //when
        comp.returnCalculator(broken, notRewind, delayed);
        //then
        expect(15).toBe(comp.returnPayment);
    });


    it('should test return calculator when return is notRewind', () => {
        //given
        let broken: boolean = false;
        let notRewind: boolean = true;
        let delayed: boolean = false;
        //when
        comp.returnCalculator(broken, notRewind, delayed);
        //then
        expect(5).toBe(comp.returnPayment);
    });

    it('should test return calculator when return is broken, not rewind and delayed', () => {
        //given
        let broken: boolean = true;
        let notRewind: boolean = true;
        let delayed: boolean = true;
        //when
        comp.returnCalculator(broken, notRewind, delayed);
        //then
        expect(30).toBe(comp.returnPayment);
    });

        it('should change status and rent date after return movie', () => {
        //given 
        let secondTestMovie=testMovies[1];   
         let spy = spyOn(movieService, 'update')
            .and.returnValue(Promise.resolve(secondTestMovie));
        fixture.detectChanges();   
        //when
        comp.returnMovie(secondTestMovie);
        //then
        expect('free').toMatch(secondTestMovie.status);
        expect('').toMatch(secondTestMovie.rentDate);
    });


});