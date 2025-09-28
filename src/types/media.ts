// Todo : src/types/media.ts
export interface MediaItem {
    id: string;
    title: string;
    description?: string;
    fileUrl: string;
    thumbnailUrl?: string;
    type: 'video' | 'audio' | 'image' | 'document' | 'archive' | 'executable';
    size: number;
    duration?: number;
    uploadDate: Date;
    metadata?: {
        tmdbId?: string;
        spotifyId?: string;
        genre?: string[];
        year?: number;
        rating?: number;
        director?: string;
        cast?: string[];
    };
}

export interface SubtitleTrack {
    id: string;
    label: string;
    language: string;
    src: string;
}

export interface VideoMetadata extends MediaItem {
    type: 'video';
    subtitles?: SubtitleTrack[];
    chapters?: Array<{
        time: number;
        title: string;
    }>;
}

export interface AudioMetadata extends MediaItem {
    type: 'audio';
    artist?: string;
    album?: string;
    trackNumber?: number;
}

export interface UserProfile {
    id: string;
    name: string;
    avatar?: string;
    isChild: boolean;
    restrictions?: {
        maxRating: number;
        allowedGenres: string[];
        blockedGenres: string[];
    };
}

export interface UploadProgress {
    fileId: string;
    progress: number;
    status: 'uploading' | 'completed' | 'error';
    error?: string;
}