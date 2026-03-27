import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Sun, Moon } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    // Check localStorage on mount or default to true (Dark Theme)
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('hhmotorcars-theme');
        return savedTheme ? savedTheme === 'dark' : true;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.remove('light');
            localStorage.setItem('hhmotorcars-theme', 'dark');
        } else {
            document.documentElement.classList.add('light');
            localStorage.setItem('hhmotorcars-theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 transition-colors duration-500 relative">
            <Navbar />
            <main>{children}</main>
            <footer className="py-20 px-8 border-t border-border bg-foreground/5 text-center mt-20">
                <div className="flex flex-col items-center gap-8">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 space-y-2">
                        <p>16 East 72nd Street, Cincinnati, OH, 45216</p>
                        <p>513.909.0280 • hhmotorcars@gmail.com</p>
                    </div>
                    <div className="flex gap-8 text-[10px] tracking-widest uppercase text-foreground/60">
                        <a href="https://www.instagram.com/hhmotorcars/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
                        <a href="https://www.facebook.com/hhmotorcarsllc/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a>
                    </div>
                    <div className="flex gap-6 text-[9px] tracking-[0.2em] uppercase text-foreground/30 mt-2">
                        <a href="/privacy" className="hover:text-foreground/60 transition-colors">Privacy</a>
                        <a href="/terms" className="hover:text-foreground/60 transition-colors">Terms</a>
                    </div>
                    <p className="text-[9px] tracking-widest text-foreground/20 uppercase mt-4">© {new Date().getFullYear()} HH Motorcars. All Rights Reserved.</p>
                </div>
            </footer>

            {/* Theme Matcher Button */}
            <button 
                onClick={toggleTheme}
                className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-foreground/5 backdrop-blur border border-foreground/10 text-foreground hover:bg-foreground/10 hover:border-primary transition-all duration-300 z-50 shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                aria-label="Toggle Theme"
            >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </div>
    );
};
