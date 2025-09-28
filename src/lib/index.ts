// Todo : src/lib/index.ts
export { app, auth, db as firestoreDb } from './firebase';
export { db as indexedDb, MediaDatabase } from './database';

export type { User } from 'firebase/auth';