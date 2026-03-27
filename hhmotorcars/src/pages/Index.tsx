import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

const Index = () => {
    useTitle('Classic Porsche Sales & Specialized Overland Builds');

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/assets/images/HHGrnSafari.jpg" 
                        alt="HH Motorcars Safari" 
                        className="w-full h-full object-cover"
                        // @ts-expect-error: fetchpriority is not yet in the standard React types but is supported by browsers
                        fetchpriority="high"
                    />
                    <div className="absolute inset-0 bg-black/40 hero-gradient" />
                </div>
                
                <div className="relative z-10 space-y-12 max-w-4xl mx-auto pt-20">
                    <div className="space-y-4 animate-fade-in opacity-0 [animation-delay:400ms]">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tighter text-white uppercase leading-[0.9]">
                            The Pursuit of Automotive Excellence
                        </h1>
                        <p className="text-[12px] tracking-[0.6em] uppercase text-white/40 font-medium max-w-3xl mx-auto">
                            Classic Porsche Sales, Service & Restoration — Cincinnati, Ohio
                        </p>
                    </div>
                    <div className="pt-12 animate-fade-in flex items-center justify-center gap-6 opacity-0 [animation-delay:600ms]">
                        <Link to="/for-sale">
                            <button className="button-singer !text-white !bg-white/5">
                                View Collection
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="button-singer !text-white !bg-white/5">
                                Connect with Us
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
                    <span className="text-[9px] tracking-[0.2em] uppercase font-light text-white">Scroll</span>
                    <div className="w-px h-8 bg-white/40" />
                </div>
            </section>

            {/* Service & Restoration Grid - Now Above About */}
            <section className="py-32 px-8 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Service */}
                    <Link to="/service" className="relative aspect-video overflow-hidden group">
                        <img 
                          src="/assets/images/workshop-service.jpg" 
                          alt="Specialized Porsche Service" 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-12 transition-opacity duration-500 opacity-90 hover:opacity-100">
                             <div className="space-y-4">
                                <span className="text-luxury !text-foreground !opacity-60">Expertise</span>
                                <h3 className="text-3xl font-display font-light text-foreground">Service</h3>
                                <p className="text-sm text-foreground/60 font-light max-w-sm">From routine maintenance to complete mechanical overhauls, our factory-level expertise ensures peak performance.</p>
                             </div>
                        </div>
                    </Link>
                    
                    {/* Restoration */}
                    <Link to="/restoration" className="relative aspect-video overflow-hidden group">
                         <img 
                          src="/assets/images/restoration-bare-metal.jpg" 
                          alt="Concours-Level Restoration" 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-12 transition-opacity duration-500 opacity-90 hover:opacity-100">
                             <div className="space-y-4">
                                <span className="text-luxury !text-foreground !opacity-60">Craftsmanship</span>
                                <h3 className="text-3xl font-display font-light text-foreground">Restoration</h3>
                                <p className="text-sm text-foreground/60 font-light max-w-sm">Elevating classic Porsche models to as-new condition, with meticulous attention to detail and historical accuracy.</p>
                             </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="py-32 px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center border-t border-foreground/5">
                <div className="space-y-8 animate-fade-in">
                    <div className="space-y-2">
                        <span className="text-luxury">About HH</span>
                        <h2 className="text-3xl md:text-5xl font-display font-light leading-tight">
                            A Decade of Dedication to the Air-Cooled Legacy
                        </h2>
                    </div>
                    <p className="text-foreground/60 font-light leading-relaxed max-w-lg">
                        For over a decade, HH Motorcars has been the trusted destination for discerning Porsche enthusiasts. We don't simply sell, service, or restore cars — we preserve a legacy of engineering perfection that defined an era.
                    </p>
                    <Link to="/about" className="inline-block">
                        <button className="text-[10px] tracking-[0.3em] uppercase font-light border-b border-foreground/20 pb-1 hover:border-foreground transition-all text-foreground/60 hover:text-foreground">
                            Learn More
                        </button>
                    </Link>
                </div>
                <div className="relative aspect-[4/5] overflow-hidden group">
                    <img 
                      src="/assets/images/heritage-detail.jpg" 
                      alt="Heritage Detail" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-90 shadow-2xl"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                </div>
            </section>

            {/* Classic Porsche Preview */}
            <section className="py-32 px-8 md:px-20 border-t border-foreground/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="relative aspect-video overflow-hidden order-2 md:order-1">
                        <img 
                          src="/assets/images/workshop-overview.jpeg" 
                          alt="Classic Porsche Workshop" 
                          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                    </div>
                    <div className="space-y-8 order-1 md:order-2">
                        <div className="space-y-2">
                            <span className="text-luxury">The Standard</span>
                            <h2 className="text-3xl md:text-5xl font-display font-light leading-tight">
                                Why Classic Porsche?
                            </h2>
                        </div>
                        <p className="text-foreground/60 font-light leading-relaxed">
                            A "classic" is defined by Porsche as any model that has not been in mass production for at least 10 years. We focus on the air-cooled lineage — from the original 356 to the legendary 911 — preserving the mechanical purity that defines the Porsche experience.
                        </p>
                        <Link to="/why-porsche">
                            <button className="button-singer !px-8 !py-3">
                                Explore Lineage
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sales / Inventory Preview */}
            <section className="py-32 px-8 md:px-20 border-t border-foreground/5 bg-foreground/[0.01]">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <span className="text-luxury">Ownership</span>
                        <h2 className="text-4xl md:text-6xl font-display font-light uppercase tracking-tight">
                            Want to buy an HH Porsche?
                        </h2>
                        <p className="text-foreground/50 font-light max-w-2xl mx-auto leading-relaxed">
                            Our acquisition program goes beyond the sale. We focus on passion, not pressure—matching discerning owners with vehicles that have been meticulously curated and technically verified by our team.
                        </p>
                    </div>
                    <Link to="/for-sale">
                        <button className="button-singer">
                            View Inventory
                        </button>
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default Index;
