import React from 'react';
import { Link } from 'react-router-dom';
import { HHLogo } from './HHLogo';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-10 bg-transparent">
            <div className="flex gap-16 items-center text-[10px] tracking-[0.4em] font-medium uppercase text-white/40">
                <Link to="/about" className="hover:text-primary transition-colors">About</Link>
                <Link to="/service" className="hover:text-primary transition-colors">Service</Link>
                <Link to="/restoration" className="hover:text-primary transition-colors">Restoration</Link>
            </div>
            
            <Link to="/" className="hover:opacity-80 transition-opacity">
                <HHLogo className="w-16 h-20 text-primary" />
            </Link>

            <div className="flex gap-16 items-center text-[10px] tracking-[0.4em] font-medium uppercase text-white/40">
                <Link to="/why-porsche" className="hover:text-primary transition-colors">Classic</Link>
                <Link to="/for-sale" className="hover:text-primary transition-colors">Inventory</Link>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
        </nav>
    );
};
