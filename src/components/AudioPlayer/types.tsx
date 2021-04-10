export interface Track {
    title: string;
    artist: string;
    audioSrc: string | number;
    image: string;
    color: string;
}

export interface AudioPlayerProps {
    tracks: Array<Track>;
}
