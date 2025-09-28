// Todo : src/hooks/useMedia.ts
import { useState, useEffect } from 'react';
import { db } from '@/lib/database';
import type { MediaItem } from '@/types/media';

export const useMedia = () => {
    const [media, setMedia] = useState<MediaItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMedia = async () => {
            try {
                const allMedia = await db.mediaItems.toArray();
                setMedia(allMedia);
            } catch (error) {
                console.error('Error loading media:', error);
            } finally {
                setLoading(false);
            }
        };

        loadMedia();
    }, []);

    const addMedia = async (mediaItem: MediaItem) => {
        try {
            await db.mediaItems.add(mediaItem);
            setMedia(prev => [...prev, mediaItem]);
        } catch (error) {
            console.error('Error adding media:', error);
            throw error;
        }
    };

    return { media, loading, addMedia };
};