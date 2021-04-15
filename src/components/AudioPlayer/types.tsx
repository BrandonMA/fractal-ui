import { LayerProps } from '../containers/Layer/types';

export interface Track {
    title: string;
    artist: string;
    audioSrc: string | number;
    image: string;
    color: string;
}

export interface AudioPlayerProps extends Omit<LayerProps, 'flexDirection'> {
    tracks: Array<Track>;
}
