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


import { RouterTestingModule } from '@angular/router/testing';
import { tick } from "@angular/core/testing";


describe('MovieDetailComponent', () => {
    let de: DebugElement;
    let comp: MovieDetailComponent;
    let fixture: ComponentFixture<MovieDetailComponent>;
    let el: HTMLElement;

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
        }]

    beforeEach(async(() => {
        TestBed.configureTestingModule({

            declarations: [MovieDetailComponent, MovieDetailEditComponent],

            imports: [RouterTestingModule, FormsModule, HttpModule],

            providers: [MovieService, FormBuilder],
        })

            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieDetailComponent);

        comp = fixture.componentInstance;

        comp.movie = testMovies[0];
        fixture.detectChanges();

    });

    it('should set movie to show details from onSelect movie', () => {
        //given
        //when
        comp.movie = testMovies[0];
        
        //then
        expect(testMovies[0]).toBe(comp.movie);
    });

    it('should show movie title text in h2 element', () => {
        de = fixture.debugElement.query(By.css('h2'));
        let a = de.nativeElement;
        expect(a.innerText).toMatch('The Shawshank Redemption');
    });

    it('should show movie genre', () => {
        de = fixture.debugElement.query(By.css('#genre'));
        let a = de.nativeElement;
        expect(a.innerText).toMatch('Drama');
    });


    it('should show movie rating', () => {
        de = fixture.debugElement.query(By.css('#rating'));
        let a = de.nativeElement;
        expect(a.innerText).toMatch('5');
    });

});
