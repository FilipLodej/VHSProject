import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        let movies=[
            {
        id: 1,
        title: 'The Shawshank Redemption',
        year: "1994",
        genre: 'Drama',
        director: 'Frank Darabont',
        actors: 'Morgan Freeman, Tim Robbins, Bob Gunton',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        rating: 5,
        coverUrl:'1.jpg',
        status: 'free',
        rentDate:''
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
        coverUrl:'2.jpg',
        status: 'free',
        rentDate:''
    },
    {
        id: 3,
        title: 'The Dark Knight',
        year: "2008",
        genre: 'Action',
        director: 'Christopher Nolan',
        actors: 'Christian Bale, Heath Ledger, Aaron Eckhart',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the Dark Knight must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
        rating: 4,
        coverUrl:'3.jpg',
        status: 'free',
        rentDate:''
    },
    {
        id: 4,
        title: '12 Angry Men',
        year: "1957",
        genre: 'Crime',
        director: 'Sidney Lumet',
        actors: 'Henry Fonda, Lee J. Cobb, Martin Balsam',
        description: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
        rating: 3,
        coverUrl:'4.jpg',
        status: 'free',
        rentDate:''
    },
    {
        id: 5,
        title: 'Schindlers List',
        year: "1993",
        genre: 'Drama',
        director: 'Steven Spielberg',
        actors: 'Liam Neeson, Ralph Fiennes, Ben Kingsley',
        description: 'In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.',
        rating: 4,
        coverUrl:'5.jpg',
        status: 'free',
        rentDate:''
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
        coverUrl:'6.jpg',
        status: 'rented',
        rentDate:'09.04.2017'
    }
        ];
        return {movies};
    }
}