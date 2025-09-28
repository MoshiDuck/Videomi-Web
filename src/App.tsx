import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { HomePage } from '@/pages/HomePage'
import { LibraryPage } from '@/pages/LibraryPage'
import { UploadPage } from '@/pages/UploadPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { AuthProvider } from '@/hooks/useAuth'

function App() {
    return (
        <Router>
            <AuthProvider>
                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
                    <Header />
                    <main className="container mx-auto px-3 sm:px-4 py-4 sm:py-8"> {/* ← Modifié ici */}
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/library" element={<LibraryPage />} />
                            <Route path="/upload" element={<UploadPage />} />
                            <Route path="/profiles" element={<ProfilePage />} />
                        </Routes>
                    </main>
                </div>
            </AuthProvider>
        </Router>
    )
}

export default App