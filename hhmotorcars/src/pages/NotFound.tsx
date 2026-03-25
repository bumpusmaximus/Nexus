import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Layout>
            <section className="h-screen flex flex-col items-center justify-center text-center space-y-6">
                <h1 className="text-8xl md:text-[12rem] font-display font-light text-foreground/10 select-none">404</h1>
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-4xl font-display font-light">Off the Map</h2>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/40">The page you're searching for is beyond our reach.</p>
                </div>
                <Link to="/" className="pt-8 px-12 py-3 border border-foreground/20 hover:bg-foreground hover:text-black transition-all text-[10px] tracking-[0.3em] uppercase font-light">
                    Back to Collection
                </Link>
            </section>
        </Layout>
    );
};

export default NotFound;
