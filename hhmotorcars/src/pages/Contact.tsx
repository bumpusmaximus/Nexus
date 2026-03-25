import React from 'react';
import { Layout } from '../components/Layout';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
    return (
        <Layout>
            <section className="pt-40 pb-20 px-8 md:px-20 text-center space-y-4">
                <span className="text-[11px] tracking-[0.4em] uppercase text-foreground/40 font-light">Connectivity</span>
                <h1 className="text-4xl md:text-6xl font-display font-light">Get in Touch</h1>
            </section>

            <section className="py-20 px-8 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="space-y-12">
                    <p className="text-foreground/60 font-light leading-relaxed max-w-md">
                        Whether you have a question about a vehicle, need to schedule service, or want to discuss a restoration project — we'd love to hear from you.
                    </p>
                    <div className="space-y-8">
                        <div className="flex items-center gap-6">
                            <Phone className="w-5 h-5 text-foreground/40" />
                            <span className="text-sm tracking-widest font-light text-foreground/80">513.909.0280</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <Mail className="w-5 h-5 text-foreground/40" />
                            <span className="text-sm tracking-widest font-light text-foreground/80">hhmotorcars@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <MapPin className="w-5 h-5 text-foreground/40" />
                            <span className="text-sm tracking-widest font-light text-foreground/80">16 East 72nd Street, Cincinnati, OH</span>
                        </div>
                    </div>
                </div>
                
                <form className="space-y-8 bg-foreground/5 p-12 border border-foreground/5">
                    <div className="space-y-4">
                        <label className="text-[10px] tracking-widest uppercase text-foreground/40 font-light">Name</label>
                        <input className="w-full bg-transparent border-b border-foreground/10 py-2 focus:border-foreground transition-colors outline-none font-light" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] tracking-widest uppercase text-foreground/40 font-light">Email</label>
                        <input className="w-full bg-transparent border-b border-foreground/10 py-2 focus:border-foreground transition-colors outline-none font-light" placeholder="jane@example.com" />
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] tracking-widest uppercase text-foreground/40 font-light">Message</label>
                        <textarea className="w-full bg-transparent border-b border-foreground/10 py-2 focus:border-foreground transition-colors outline-none font-light h-32" placeholder="How can we help?" />
                    </div>
                    <button className="w-full py-4 mt-8 border border-foreground/20 hover:bg-foreground hover:text-black transition-all text-[11px] tracking-[0.3em] uppercase font-light">Send Message</button>
                </form>
            </section>

            {/* Google Maps Location */}
            <section className="pb-32 px-8 md:px-20 max-w-7xl mx-auto">
                <div className="w-full h-96 relative border border-foreground/5 opacity-80 hover:opacity-100 transition-opacity duration-500 overflow-hidden group">
                    <iframe
                        title="HH Motorcars Location"
                        src="https://maps.google.com/maps?q=16%20East%2072nd%20Street,%20Cincinnati,%20OH%2045216&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }}
                        allowFullScreen
                        loading="lazy"
                        className="group-hover:!filter-none transition-all duration-1000"
                    ></iframe>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
