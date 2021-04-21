import { LayerProps } from '../containers/Layer/types';
import { MinimalTrackData } from './useAudioPlayer/types';
export interface AudioPlayerProps extends Omit<LayerProps, 'flexDirection'> {
    tracks: Array<MinimalTrackData>;
}
