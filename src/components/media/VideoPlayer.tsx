// Todo : src/components/media/VideoPlayer.tsx
import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import type { VideoMetadata } from '@/types/media';

interface VideoPlayerProps {
    media: VideoMetadata;
    autoplay?: boolean;
    className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
                                                            media,
                                                            autoplay = false,
                                                            className = ''
                                                        }) => {
    const videoRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<any>();

    useEffect(() => {
        if (!videoRef.current) return;

        playerRef.current = videojs(videoRef.current, {
            autoplay,
            controls: true,
            responsive: true,
            fluid: true,
            sources: [{
                src: media.fileUrl,
                type: 'video/mp4'
            }],
            tracks: media.subtitles?.map(subtitle => ({
                kind: 'subtitles',
                src: subtitle.src,
                srclang: subtitle.language,
                label: subtitle.label
            })) || []
        });

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
            }
        };
    }, [media, autoplay]);

    return (
        <div data-vjs-player className={className}>
            <div ref={videoRef} className={`video-js vjs-big-play-centered ${className}`} />
        </div>
    );
};