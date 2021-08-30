import Mustache from 'mustache';
import { getNowPlayingMovies } from '../shared-scripts/api-service'
import { NowPlayingCardComponent } from './now-playing-card'
import Splide from '@splidejs/splide';

const template = `
<div class="now-playing">
    <div class="splide">
        <div class="splide__track">
            <ul class="splide__list">
                {{#movies}}
                <li class="splide__slide">
                    <div id="nowPlayingMovie_{{id}}" class="now-playing-card-container"></div>
                </li>
                {{/movies}}
            </ul>
        </div>
    </div>
</div>
`;

export class NowPlayingComponent {
    constructor(parentElement) {
        this.parentElement = parentElement;
        this.model = {};
    }

    init() {
        this.populate().then(() => this.render());
    }

    populate() {
        return getNowPlayingMovies().then(nowPlayingMovies => {
            this.model.movies = nowPlayingMovies.map((m, i) => ({
                movie: m,
                id: m.id,
                activeClassName: i == 0 ? "active" : ""
            }));
        });
    }

    render() {
        let $parentElement = $(this.parentElement);
        $parentElement.html(Mustache.render(template, this.model));
        this.model.movies.forEach(m => {
            new NowPlayingCardComponent($parentElement.find(`#nowPlayingMovie_${m.id}`).get(0), m.movie).init();
        });
        
        new Splide($parentElement.find("div.splide").get(0), {
            type   : 'loop',
            padding: {
                right: '10%',
                left : '10%',
            },
            arrows: false,
            pagination: false,
            autoplay: false
        }).mount();
    }
}