import { Track } from "./track";

export interface Album {
    name :string;
    releaseDate :string;
    coverImamge :string;
    tracks :Track[];
}
