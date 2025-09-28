/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    // Contrôle le mode sombre via une classe CSS
    darkMode: 'class',

    // Personnalisation du thème principal
    theme: {
        screens: {
            'xs': '475px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            // Couleurs personnalisées qui s'ajoutent à la palette par défaut
            colors: {
                border: "hsl(214.3 31.8% 91.4%)",
                input: "hsl(214.3 31.8% 91.4%)",
                ring: "hsl(222.2 84% 4.9%)",
                background: "hsl(0 0% 100%)",
                foreground: "hsl(222.2 84% 4.9%)",
                primary: {
                    DEFAULT: "hsl(222.2 47.4% 11.2%)",
                    foreground: "hsl(210 40% 98%)",
                },
                secondary: {
                    DEFAULT: "hsl(210 40% 96%)",
                    foreground: "hsl(222.2 84% 4.9%)",
                },
                destructive: {
                    DEFAULT: "hsl(0 84.2% 60.2%)",
                    foreground: "hsl(210 40% 98%)",
                },
                muted: {
                    DEFAULT: "hsl(210 40% 96%)",
                    foreground: "hsl(215.4 16.3% 46.9%)",
                },
                accent: {
                    DEFAULT: "hsl(210 40% 96%)",
                    foreground: "hsl(222.2 84% 4.9%)",
                },
                card: {
                    DEFAULT: "hsl(0 0% 100%)",
                    foreground: "hsl(222.2 84% 4.9%)",
                },
            },

            // Espacements personnalisés
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },

            // Animations personnalisées
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
            },

            // Keyframes pour les animations
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            },

            // Polices personnalisées
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },

            // Bordures arrondies supplémentaires
            borderRadius: {
                '4xl': '2rem',
            }
        },
    },

    // Plugins supplémentaires
    plugins: [
        require('fluid-tailwind'),
        require('@tailwindcss/container-queries')
    ],
}