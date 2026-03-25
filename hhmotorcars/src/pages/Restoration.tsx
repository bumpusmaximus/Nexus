import React from 'react';
import { Layout } from '../components/Layout';

const steps = [
    { number: "01", title: "Assessment", desc: "A technical autopsy of the vehicle's current state and historical documentation." },
    { number: "02", title: "Disassembly", desc: "Meticulous cataloging and removal of every component down to the bare chassis." },
    { number: "03", title: "Restoration", desc: "Metalwork, paint, and mechanical machining to better-than-factory tolerances." },
    { number: "04", title: "Assembly", desc: "Careful reconstruction using period-correct methods and high-grade materials." },
    { number: "05", title: "Testing", desc: "Comprehensive road testing and final calibration to ensure perfection." }
];

const Restoration = () => {
    return (
        <Layout>
            <section className="pt-40 pb-20 px-8 md:px-20 text-center space-y-4">
                <span className="text-[11px] tracking-[0.4em] uppercase text-foreground/40 font-light">Craftsmanship</span>
                <h1 className="text-4xl md:text-6xl font-display font-light">Restoration</h1>
            </section>

            <section className="py-20 px-8 md:px-20 max-w-7xl mx-auto space-y-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-display font-light">Reviving the Soul of Stuttgart</h2>
                        <p className="text-foreground/60 font-light leading-relaxed">
                            A ground-up restoration is the ultimate expression of our craft. We return classic Porsches to their original glory — or elevate them beyond it. 
                        </p>
                        <div className="space-y-8 pt-8">
                            {steps.map((s, i) => (
                                <div key={i} className="flex gap-8 group">
                                    <span className="text-[10px] tracking-widest text-foreground/20 font-light pt-1">{s.number}</span>
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-display font-light group-hover:text-foreground transition-colors">{s.title}</h4>
                                        <p className="text-sm text-foreground/40 font-light">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="aspect-[4/5] overflow-hidden">
                             <img 
                                src="https://images.squarespace-cdn.com/content/v1/59efb2d9fe54ef0b9ad57bf6/1514403499606-YFQM3QMLA5VPJ9MXY5L9/20171213_161240.jpg" 
                                alt="Bare Metal Restoration" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="aspect-video overflow-hidden">
                             <img 
                                src="https://images.squarespace-cdn.com/content/v1/59efb2d9fe54ef0b9ad57bf6/252b3531-273d-4e98-8ef4-335bddb5ec3d/IMG_6923.jpeg" 
                                alt="Workshop Overview" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Restoration;
