import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MediaGrid } from '@/components/media/MediaGrid';
import { useMedia } from '@/hooks/useMedia';

export const HomePage: React.FC = () => {
    const { media, loading } = useMedia();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-lg text-muted-foreground">Chargement...</div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
                <div>
                    <h1 className="text-2xl/3xl font-bold text-slate-900">Ma Bibliothèque</h1>
                    <p className="text-muted-foreground mt-1 sm:mt-2 text-sm sm:text-base">
                        {media.length} {media.length === 1 ? 'fichier' : 'fichiers'} disponibles
                    </p>
                </div>
                <Link to="/upload" className="w-full sm:w-auto">
                    <Button icon={Plus} className="w-full sm:w-auto">
                        Ajouter un média
                    </Button>
                </Link>
            </div>

            <MediaGrid
                mediaItems={media}
                onMediaClick={(media) => {
                    console.log('Media clicked:', media);
                }}
            />
        </div>
    );
};