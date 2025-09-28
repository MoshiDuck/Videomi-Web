// Todo : src/pages/ProfilePage.tsx
import React from 'react';
import { User, Users, Baby } from 'lucide-react'; // ← Correction ici

export const ProfilePage: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Gestion des profils</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Profile cards will be added here later */}
                <div className="text-center p-8 bg-white rounded-lg shadow">
                    <User className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Profil Principal</h3>
                    <p className="text-sm text-muted-foreground">Accès complet</p>
                </div>

                <div className="text-center p-8 bg-white rounded-lg shadow">
                    <Baby className="w-12 h-12 text-green-500 mx-auto mb-4" /> {/* ← Correction ici */}
                    <h3 className="font-semibold mb-2">Profil Enfant</h3>
                    <p className="text-sm text-muted-foreground">Contenu adapté</p>
                </div>

                <div className="text-center p-8 bg-white rounded-lg shadow border-2 border-dashed border-gray-300">
                    <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Nouveau Profil</h3>
                    <p className="text-sm text-muted-foreground">Ajouter un profil</p>
                </div>
            </div>
        </div>
    );
};