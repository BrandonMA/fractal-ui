import { MutableRefObject, useRef, useEffect, Dispatch, SetStateAction } from 'react';

export function useAudioEffect(
    audioRef: MutableRefObject<HTMLAudioElement | undefined>,
    audioSrc: string,
    setIsPlaying: Dispatch<SetStateAction<boolean>>,
    setCurrentTime: Dispatch<SetStateAction<number>>,
    setDuration: Dispatch<SetStateAction<number>>,
    checkIfShouldGoToNextTrack: () => void
): void {
    const isReady = useRef(false);
    useEffect(() => {
        if (audioRef.current) audioRef.current.pause();

        audioRef.current = new Audio(audioSrc);
        const audioCurrentRef = audioRef.current;

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            setCurrentTime(0);
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }

        const onLoadedData = (): void => {
            if (audioRef.current) {
                const { duration } = audioRef.current;
                if (!isNaN(duration)) setDuration(duration * 1000);
            }
        };

        const onEnded = (): void => {
            checkIfShouldGoToNextTrack();
        };

        const onTimeUpdate = (): void => {
            if (audioRef.current) setCurrentTime(audioRef.current.currentTime * 1000);
        };

        audioRef.current.addEventListener('loadeddata', onLoadedData);
        audioRef.current.addEventListener('ended', onEnded);
        audioRef.current.addEventListener('timeupdate', onTimeUpdate);

        return () => {
            audioCurrentRef?.pause();
            audioCurrentRef?.removeEventListener('loadeddata', onLoadedData);
            audioCurrentRef?.removeEventListener('ended', onEnded);
            audioCurrentRef?.removeEventListener('timeupdate', onTimeUpdate);
        };
    }, [audioRef, audioSrc, checkIfShouldGoToNextTrack, setCurrentTime, setDuration, setIsPlaying]);
}
