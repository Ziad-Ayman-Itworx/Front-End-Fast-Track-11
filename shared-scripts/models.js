export class Movie {
    constructor(id, title, resolvedBackdropUrl, resolvedPosterUrl, resolvedGenresNames) {
        this.id = id;
        this.title = title;
        this.backdropImageUrl = resolvedBackdropUrl;
        this.posterImageUrl = resolvedPosterUrl;
        this.genersNames = resolvedGenresNames;
    }

    genresText() {
        return this.genersNames.join(" | ");
    }
}