import React from 'react';
import { Layout } from '../components/Layout';

const WhyPorsche = () => {
    return (
        <Layout>
            <section className="pt-40 pb-20 px-8 md:px-20 text-center space-y-4">
                <span className="text-[11px] tracking-[0.4em] uppercase text-foreground/40 font-light">The Narrative</span>
                <h1 className="text-4xl md:text-6xl font-display font-light">Why Classic Porsche</h1>
            </section>

            <section className="py-20 px-8 md:px-20 max-w-7xl mx-auto space-y-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="aspect-square overflow-hidden order-last md:order-first">
                         <img 
                            src="/assets/images/white-front.jpg" 
                            alt="White Front" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-display font-light uppercase">Pure Engineering</h2>
                        <p className="text-foreground/60 font-light leading-relaxed">
                            The air-cooled flat-six is more than an engine — it's a musical instrument. Every classic Porsche delivers a visceral, mechanical experience that modern cars, however fast, simply cannot replicate. 
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-display font-light uppercase text-right md:text-left">A Sound Investment</h2>
                        <p className="text-foreground/60 font-light leading-relaxed text-right md:text-left">
                           History has shown that air-cooled Porsches are not just for driving — they are a stable investment. As time progresses, the supply of these mechanical benchmarks only diminishes while the global demand intensifies.
                        </p>
                    </div>
                    <div className="aspect-square overflow-hidden">
                         <img 
                            src="/assets/images/orange-back.jpg" 
                            alt="Orange Back" 
                            className="w-full h-full object-cover shadow-2xl"
                        />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default WhyPorsche;
