// Todo : src/utils/constants.ts
export const SUPPORTED_VIDEO_FORMATS = [
    'video/mp4', 'video/webm', 'video/ogg', 'video/quicktime'
];

export const SUPPORTED_AUDIO_FORMATS = [
    'audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/flac'
];

export const SUPPORTED_IMAGE_FORMATS = [
    'image/jpeg', 'image/png', 'image/gif', 'image/webp'
];

export const MAX_FILE_SIZE = 5 * 1024 * 1024 * 1024; // 5GB

export const CATEGORIES = {
    video: 'Vidéos',
    audio: 'Musique',
    image: 'Images',
    document: 'Documents',
    archive: 'Archives',
    executable: 'Applications'
} as const;