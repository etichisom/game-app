export interface PlatformModel {
    count:    number;
    next:     string;
    previous: string;
    results:  PlatformGameModel[];
}

export interface PlatformGameModel {
    id:        number;
    name:      string;
    slug:      string;
    platforms: Platforms[];
}

export interface Platforms {
    id:               number;
    name:             string;
    slug:             string;
    games_count:      number;
    image_background: string;
    image:            string;
    year_start:       number;
    year_end:         number;
}


