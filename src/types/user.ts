// Todo : src/types/user.ts
export interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    isAnonymous: boolean;
}

export interface AppSettings {
    language: 'fr' | 'en';
    theme: 'light' | 'dark' | 'auto';
    maxUploadSize: number;
    allowedFileTypes: string[];
}