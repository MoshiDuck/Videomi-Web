import React from 'react';
import { Play, Image, FileText, Archive, Settings } from 'lucide-react';
import type { MediaItem } from '@/types/media';

interface MediaCardProps {
    media: MediaItem;
    onClick?: () => void;
}

const getMediaIcon = (type: MediaItem['type']) => {
    switch (type) {
        case 'video': return Play;
        case 'audio': return Play;
        case 'image': return Image;
        case 'document': return FileText;
        case 'archive': return Archive;
        case 'executable': return Settings;
        default: return FileText;
    }
};

export const MediaCard: React.FC<MediaCardProps> = ({ media, onClick }) => {
    const Icon = getMediaIcon(media.type);

    return (
        <div
            className="group relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            onClick={onClick}
        >
            {media.thumbnailUrl ? (
                <img
                    src={media.thumbnailUrl}
                    alt={media.title}
                    className="w-full h-32 sm:h-40 md:h-48 object-cover"
                />
            ) : (
                <div className="w-full h-32 sm:h-40 md:h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500" />
                </div>
            )}

            <div className="p-2 sm:p-3 md:p-4">
                <h3 className="font-medium text-xs sm:text-sm md:text-base mb-1 truncate">{media.title}</h3>
                <div className="flex justify-between items-center text-[10px] sm:text-xs text-muted-foreground">
                    <span className="capitalize">{media.type}</span>
                    <span>{(media.size / (1024 * 1024)).toFixed(1)} MB</span>
                </div>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
            </div>
        </div>
    );
};