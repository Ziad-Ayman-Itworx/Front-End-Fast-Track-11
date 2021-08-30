import Mustache from 'mustache';

const template = `
<div class="now-playing-card">
    <img class="now-playing-card-image" src="{{backdropImageUrl}}" alt="{{title}}">
    <div class="now-playing-card-overlay"></div>
    <div class="now-playing-card-caption">
        <h6 class="now-playing-card-label">Now Playing</h6>
        <h1 class="now-playing-card-title">{{title}}</h1>
        <h5 class="now-playing-card-sub-caption">{{genresText}}</h5>
    </div>
</div>
`;

export class NowPlayingCardComponent {
    constructor(parentElement, movie) {
        this.parentElement = parentElement;
        this.model = movie;
    }

    init() {
        this.render();
    }

    render() {
        this.parentElement.innerHTML = Mustache.render(template, this.model);
    }
}