// Todo : src/hooks/useAuth.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import {
    type User as FirebaseUser,
    onAuthStateChanged,
    signInAnonymously,
    signOut
} from 'firebase/auth';
import type { User } from '@/types/user';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    signIn: async () => {},
    signOut: async () => {}
});

const mapFirebaseUser = (firebaseUser: FirebaseUser | null): User | null => {
    if (!firebaseUser) return null;

    return {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        isAnonymous: firebaseUser.isAnonymous
    };
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const signIn = async () => {
        try {
            await signInAnonymously(auth);
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            setUser(mapFirebaseUser(firebaseUser));
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, signIn, signOut: handleSignOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);