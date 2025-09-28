// Todo : src/pages/LibraryPage.tsx
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { MediaGrid } from '@/components/media/MediaGrid';
import { useMedia } from '@/hooks/useMedia';

export const LibraryPage: React.FC = () => {
    const { media, loading } = useMedia();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredMedia = media.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-lg text-muted-foreground">Chargement de la bibliothèque...</div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Bibliothèque</h1>

                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button className="p-2 border rounded-lg hover:bg-slate-50">
                        <Filter className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <MediaGrid mediaItems={filteredMedia} />
        </div>
    );
};