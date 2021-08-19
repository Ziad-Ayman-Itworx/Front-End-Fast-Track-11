const Mustache = require("mustache");
const { getNowPlayingMovies } = require("../shared-scripts/api-service");
require("owl.carousel");

const template = `
<div class="owl-carousel">
    {{#movies}}
    <h1>{{title}}</h1>
    {{/movies}}
</div>
`;

class NowPlayingComponent {
    constructor(parentElement) {
        this.parentElement = parentElement;
        this.model = {
            movies: []
        };
    }

    // controlller
    init() {
        this.populate();
    }

    // controller
    populate() {
        getNowPlayingMovies().then(movies => {
            this.model.movies = movies;
            this.render();
        });
    }

    // view
    render() {
        this.parentElement.innerHTML = Mustache.render(template, this.model);
        $(this.parentElement).find(".owl-carousel").owlCarousel();
    }
}

exports.NowPlayingComponent = NowPlayingComponent;