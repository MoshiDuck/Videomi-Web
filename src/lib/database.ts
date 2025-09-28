// Todo : src/lib/database.ts
import Dexie from 'dexie';
import type { MediaItem, UserProfile, UploadProgress } from '@/types/media';

export class MediaDatabase extends Dexie {
    mediaItems!: Dexie.Table<MediaItem, string>;
    userProfiles!: Dexie.Table<UserProfile, string>;
    uploadQueue!: Dexie.Table<UploadProgress, string>;
    syncQueue!: Dexie.Table<{id: string, action: string, data: any, timestamp: Date}, string>;

    constructor() {
        super('MediaDatabase');

        this.version(1).stores({
            mediaItems: 'id, title, type, uploadDate',
            userProfiles: 'id, name, isChild',
            uploadQueue: 'id, status',
            syncQueue: 'id, action, timestamp'
        });
    }
}

export const db = new MediaDatabase();