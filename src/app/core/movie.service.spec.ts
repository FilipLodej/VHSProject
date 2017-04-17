import { MovieService } from './movie.service';
import { Http } from "@angular/http/http";

describe('MovieService', () => {
    let service: MovieService;
    let http: Http;
    let moviesUrl = 'api/movies';

    let testMovie =
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
        };

    beforeEach(() => { service = new MovieService(http);
 });

    it('#getMovie should return movie from movies', () => {

        // expect(Promise.resolve(service.getMovie(testMovie.id))).toBe('real movie');
    });

});