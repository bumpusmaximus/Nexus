import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HHLogo } from './HHLogo';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-6 transition-all duration-500 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-foreground/5 py-4' : 'bg-transparent py-10'}`}>
            <div className="flex gap-16 items-center text-[10px] tracking-[0.4em] font-medium uppercase text-nav-text">
                <Link to="/about" className="hover:text-primary transition-colors">About</Link>
                <Link to="/service" className="hover:text-primary transition-colors">Service</Link>
                <Link to="/restoration" className="hover:text-primary transition-colors">Restoration</Link>
            </div>
            
            <Link to="/" className="hover:opacity-80 transition-opacity">
                <HHLogo className={`transition-all duration-500 text-primary ${isScrolled ? 'w-12 h-16' : 'w-16 h-20'}`} />
            </Link>

            <div className="flex gap-16 items-center text-[10px] tracking-[0.4em] font-medium uppercase text-nav-text">
                <Link to="/why-porsche" className="hover:text-primary transition-colors">Classic</Link>
                <Link to="/for-sale" className="hover:text-primary transition-colors">Inventory</Link>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
        </nav>
    );
};

