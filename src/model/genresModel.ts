export interface GenresModel {
    count:    number;
    next:     string;
    previous: string;
    results:  Genres[];
}

export interface Genres {
    id:               number;
    name:             string;
    slug:             string;
    games_count:      number;
    image_background: string;
}
