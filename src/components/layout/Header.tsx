import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Library, Upload, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';

const navigation = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Bibliothèque', href: '/library', icon: Library },
    { name: 'Upload', href: '/upload', icon: Upload },
    { name: 'Profils', href: '/profiles', icon: User },
];

export const Header: React.FC = () => {
    const location = useLocation();
    const { user } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="container mx-auto px-3 sm:px-4">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xs sm:text-sm">V</span>
                        </div>
                        <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Videomi
            </span>
                    </Link>

                    {/* Navigation Desktop */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.href;

                            return (
                                <Link key={item.name} to={item.href}>
                                    <Button
                                        variant={isActive ? 'default' : 'ghost'}
                                        size="sm"
                                        icon={Icon}
                                        className="text-xs sm:text-sm"
                                    >
                                        {item.name}
                                    </Button>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User info */}
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <div className="hidden sm:block text-sm text-muted-foreground">
                            {user?.displayName || 'Utilisateur'}
                        </div>

                        {/* Menu Mobile */}
                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="h-9 w-9"
                            >
                                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Menu Mobile */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t bg-white pb-4">
                        <nav className="flex flex-col space-y-2 pt-4">
                            {navigation.map((item) => {
                                const Icon = item.icon;
                                const isActive = location.pathname === item.href;

                                return (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Button
                                            variant={isActive ? 'default' : 'ghost'}
                                            className="w-full justify-start"
                                            icon={Icon}
                                        >
                                            {item.name}
                                        </Button>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};