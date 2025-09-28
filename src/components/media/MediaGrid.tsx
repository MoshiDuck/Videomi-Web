import React from 'react';
import { MediaCard } from './MediaCard';
import type { MediaItem } from '@/types/media';

interface MediaGridProps {
    mediaItems: MediaItem[];
    onMediaClick?: (media: MediaItem) => void;
}

export const MediaGrid: React.FC<MediaGridProps> = ({ mediaItems, onMediaClick }) => {
    if (mediaItems.length === 0) {
        return (
            <div className="text-center py-8 sm:py-12">
                <div className="text-muted-foreground">Aucun média trouvé</div>
                <div className="text-sm text-muted-foreground mt-2">
                    Commencez par ajouter vos premiers fichiers
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {mediaItems.map((media) => (
                <MediaCard
                    key={media.id}
                    media={media}
                    onClick={() => onMediaClick?.(media)}
                />
            ))}
        </div>
    );
};