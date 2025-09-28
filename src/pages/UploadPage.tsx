import React, { useState } from 'react';
import { Upload, File, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const UploadPage: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (selectedFiles: FileList | null) => {
        if (!selectedFiles) return;

        const newFiles = Array.from(selectedFiles).filter(file =>
            file.size <= 5 * 1024 * 1024 * 1024
        );

        setFiles(prev => [...prev, ...newFiles]);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        handleFileSelect(e.dataTransfer.files);
    };

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="animate-fade-in">
            <h1 className="text-2xl/3xl font-bold text-slate-900 mb-4 sm:mb-6 md:mb-8">Upload de fichiers</h1>

            {/* Drag & Drop Zone */}
            <div
                className={`border-2 border-dashed rounded-lg ~p-4/8 lg:p-12 text-center transition-colors min-h-[200px] flex flex-col items-center justify-center ${
                    isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
                <p className="text-base sm:text-lg md:text-xl font-medium mb-2 text-center">Glissez vos fichiers ici</p>
                <p className="text-muted-foreground mb-3 sm:mb-4">ou</p>

                <input
                    type="file"
                    id="file-upload"
                    multiple
                    onChange={(e) => handleFileSelect(e.target.files)}
                    className="hidden"
                />
                <label htmlFor="file-upload" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto">
                        Parcourir les fichiers
                    </Button>
                </label>

                <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 text-center">
                    Fichiers jusqu'à 5GB - Vidéos, musiques, images, documents
                </p>
            </div>

            {/* File List */}
            {files.length > 0 && (
                <div className="mt-6 sm:mt-8">
                    <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Fichiers à uploader ({files.length})</h2>

                    <div className="space-y-2 sm:space-y-3">
                        {files.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg shadow">
                                <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                                    <File className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm sm:text-base font-medium truncate">{file.name}</p>
                                        <p className="text-xs sm:text-sm text-muted-foreground">
                                            {(file.size / (1024 * 1024)).toFixed(2)} MB
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => removeFile(index)}
                                    className="p-1 hover:bg-red-50 rounded flex-shrink-0 ml-2"
                                >
                                    <X className="w-4 h-4 text-red-500" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 sm:mt-6 flex justify-center sm:justify-end">
                        <Button icon={Upload} disabled={files.length === 0} className="w-full sm:w-auto">
                            Commencer l'upload
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};