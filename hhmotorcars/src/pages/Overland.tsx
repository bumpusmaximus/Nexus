import React from 'react';
import { Layout } from '../components/Layout';

const Overland = () => {
    return (
        <Layout>
            <section className="pt-40 pb-20 px-8 md:px-20 text-center space-y-4">
                <span className="text-[11px] tracking-[0.4em] uppercase text-foreground/40 font-light">Adventure</span>
                <h1 className="text-4xl md:text-6xl font-display font-light uppercase">Overland & Specialized Builds</h1>
            </section>

            <section className="py-20 px-8 md:px-20 max-w-7xl mx-auto space-y-24">
                <div className="relative aspect-video overflow-hidden">
                    <img 
                      src="/assets/images/HHGrnSafari.jpg" 
                      alt="Overland Safari" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-display font-light">Rugged Engineering, Refined Execution</h2>
                        <p className="text-foreground/60 font-light leading-relaxed">
                            Our Overland builds take the legendary capabilities of the Porsche platform and refine them for the modern adventurer. While we specialize in the classic 911 Safari, we have also become a world-class leader in **Porsche Cayenne Overland** and **Porsche Overlander** specialized engineering.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-display font-light">Expedition Ready</h2>
                        <p className="text-foreground/60 font-light leading-relaxed">
                            Whether you're looking for a rally-spec 911 or a fully independent, expedition-ready Cayenne, we combine rugged off-road components with the same meticulous craftsmanship as our award-winning street restoration projects.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Overland;

