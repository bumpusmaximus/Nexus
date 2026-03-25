import React from 'react';
import { Layout } from '../components/Layout';

const About = () => {
    return (
        <Layout>
            <section className="pt-40 pb-20 px-8 md:px-20 text-center space-y-4">
                <span className="text-[11px] tracking-[0.4em] uppercase text-foreground/40 font-light">Heritage</span>
                <h1 className="text-4xl md:text-6xl font-display font-light">Our Story</h1>
            </section>

            <section className="py-20 px-8 md:px-20 max-w-5xl mx-auto space-y-16">
                <div className="aspect-[21/9] overflow-hidden">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/59efb2d9fe54ef0b9ad57bf6/c5d53498-3327-4597-b526-f452e31274c7/hh.GermanFlag.1.jpg" 
                      alt="Workshop" 
                      className="w-full h-full object-cover grayscale opacity-60"
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-display font-light">The Obsession</h2>
                        <p className="text-foreground/60 font-light leading-relaxed">
                            Founded in Cincinnati, Ohio, HH Motorcars was born from an obsession — not just with Porsche automobiles, but with the idea that these machines deserve stewards, not simply owners. 
                        </p>
                        <p className="text-foreground/60 font-light leading-relaxed">
                            We specialize in the preservation and enhancement of air-cooled Porsches, ensuring that the visceral connection between driver and road remains as sharp as the day the car left Stuttgart.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-display font-light">The Standards</h2>
                        <p className="text-foreground/60 font-light leading-relaxed">
                            Every vehicle that enters our facility is treated with clinical precision. Whether it's a routine safety inspection or a complete nut-and-bolt restoration, our process is defined by an uncompromising commitment to original specifications and build quality.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default About;
