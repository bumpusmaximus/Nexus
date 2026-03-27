import React from 'react';
import { Layout } from '../components/Layout';
import { Settings, Shield, Gauge, Cpu, Wrench, Search } from 'lucide-react';

const services = [
    {
        icon: <Wrench className="w-5 h-5" />,
        title: "Engine Rebuilds",
        desc: "Complete mechanical regeneration of air-cooled flat-six engines to factory plus standards."
    },
    {
        icon: <Settings className="w-5 h-5" />,
        title: "Scheduled Maintenance",
        desc: "Meticulous safety inspections, oil services, and point-by-point diagnostic checkups."
    },
    {
        icon: <Gauge className="w-5 h-5" />,
        title: "Suspension & Brakes",
        desc: "Precision tuning and restoration of handling components for the pure Porsche feel."
    },
    {
        icon: <Cpu className="w-5 h-5" />,
        title: "Electrical Systems",
        desc: "Modernizing electronics while maintaining the period-correct aesthetic and function."
    },
    {
        icon: <Search className="w-5 h-5" />,
        title: "Pre-Purchase Inspection",
        desc: "Comprehensive analysis for prospective buyers to ensure investment security."
    },
    {
        icon: <Shield className="w-5 h-5" />,
        title: "Diagnostics",
        desc: "Deep technical analysis using both period-correct tools and modern precision equipment."
    }
];

const Service = () => {
    return (
        <Layout>
            <section className="pt-40 pb-20 px-8 md:px-20 text-center space-y-4">
                <span className="text-[11px] tracking-[0.4em] uppercase text-foreground/40 font-light">Expertise</span>
                <h1 className="text-4xl md:text-6xl font-display font-light">Exquisite Service</h1>
            </section>

            <section className="py-20 px-8 md:px-20 max-w-7xl mx-auto space-y-24">
                <div className="relative aspect-[21/7] overflow-hidden">
                    <img 
                      src="/assets/images/workshop-service.jpg" 
                      alt="Service" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((s, i) => (
                        <div key={i} className="p-8 border border-foreground/5 bg-foreground/5 hover:bg-foreground/[0.08] transition-colors group">
                            <div className="text-foreground/40 group-hover:text-foreground transition-colors mb-6">{s.icon}</div>
                            <h3 className="text-xl font-display font-light mb-4">{s.title}</h3>
                            <p className="text-sm text-foreground/50 font-light leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Service;
