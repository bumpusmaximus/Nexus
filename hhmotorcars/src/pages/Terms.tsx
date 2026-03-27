import React from 'react';
import { Layout } from '../components/Layout';

const Terms = () => {
    return (
        <Layout>
            <section className="pt-40 pb-20 px-8 md:px-20 max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <span className="text-[11px] tracking-[0.4em] uppercase text-foreground/40 font-light">Governance</span>
                    <h1 className="text-4xl md:text-6xl font-display font-light">Terms of Service</h1>
                </div>

                <div className="space-y-8 text-foreground/70 font-light leading-relaxed">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <div className="space-y-4">
                        <h2 className="text-xl font-display text-foreground font-light pt-8 border-t border-foreground/5 uppercase tracking-widest">Agreement</h2>
                        <p>By accessing this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-display text-foreground font-light pt-8 border-t border-foreground/5 uppercase tracking-widest">Intellectual Property</h2>
                        <p>The materials contained in this website, including but not limited to the HH Motorcars logo, "Porsche Cayenne Overland" build specifications, and restoration imagery, are protected by applicable copyright and trademark law.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-display text-foreground font-light pt-8 border-t border-foreground/5 uppercase tracking-widest">Service Estimates</h2>
                        <p>Any pricing or estimates provided via this website, email, or digital communication are subject to formal verification upon physical inspection of the vehicle at our facility in Cincinnati, OH.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-display text-foreground font-light pt-8 border-t border-foreground/5 uppercase tracking-widest">Disclaimer</h2>
                        <p>The materials on HH Motorcars' website are provided on an 'as is' basis. HH Motorcars makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability or fitness for a particular purpose.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-display text-foreground font-light pt-8 border-t border-foreground/5 uppercase tracking-widest">Limitation of Liability</h2>
                        <p>In no event shall HH Motorcars or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HH Motorcars' website.</p>
                    </div>

                    <div className="space-y-4 pt-12">
                        <p className="text-xs text-foreground/40 italic">Governance of these terms shall be subject to the laws of the State of Ohio.</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Terms;
