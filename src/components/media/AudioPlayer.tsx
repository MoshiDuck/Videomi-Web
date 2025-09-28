// Todo : src/components/media/AudioPlayer.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Howl } from 'howler';
import { Play, Pause, Volume2 } from 'lucide-react';
import type { AudioMetadata } from '@/types/media';

interface AudioPlayerProps {
    media: AudioMetadata;
    className?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ media, className = '' }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(0.7);
    const soundRef = useRef<Howl | null>(null);

    useEffect(() => {
        soundRef.current = new Howl({
            src: [media.fileUrl],
            html5: true,
            volume: volume,
            onplay: () => setIsPlaying(true),
            onpause: () => setIsPlaying(false),
            onend: () => {
                setIsPlaying(false);
                setProgress(0);
            },
            onloaderror: (id, error) => {
                console.error('Load error:', error);
            },
            onplayerror: (id, error) => {
                console.error('Play error:', error);
            }
        });

        return () => {
            if (soundRef.current) {
                soundRef.current.unload();
            }
        };
    }, [media.fileUrl]);

    const togglePlay = () => {
        if (!soundRef.current) return;

        if (isPlaying) {
            soundRef.current.pause();
        } else {
            soundRef.current.play();
        }
    };

    const handleVolumeChange = (newVolume: number) => {
        setVolume(newVolume);
        if (soundRef.current) {
            soundRef.current.volume(newVolume);
        }
    };

    return (
        <div className={`flex items-center gap-4 p-4 bg-white rounded-lg shadow ${className}`}>
            <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>

            <div className="flex-1">
                <div className="text-sm font-medium">{media.title}</div>
                <div className="text-xs text-muted-foreground">
                    {media.artist || 'Unknown Artist'}
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-muted-foreground" />
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="w-20"
                />
            </div>
        </div>
    );
};