import React from 'react';
import { Layout } from '../components/Layout';

const Privacy = () => {
    return (
        <Layout>
            <section className="pt-40 pb-20 px-8 md:px-20 max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <span className="text-[11px] tracking-[0.4em] uppercase text-foreground/40 font-light">Legal</span>
                    <h1 className="text-4xl md:text-6xl font-display font-light">Privacy Policy</h1>
                </div>

                <div className="space-y-8 text-foreground/70 font-light leading-relaxed">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <div className="space-y-4">
                        <h2 className="text-xl font-display text-foreground font-light pt-8 border-t border-foreground/5 uppercase tracking-widest">Introduction</h2>
                        <p>At HH Motorcars, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-display text-foreground font-light pt-8 border-t border-foreground/5 uppercase tracking-widest">Data Collection</h2>
                        <p>We only collect data that is provided voluntarily through our contact forms or via direct email communication. This may include your name, email address, and any information you provide regarding your vehicle or service needs.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-display text-foreground font-light pt-8 border-t border-foreground/5 uppercase tracking-widest">Cookies</h2>
                        <p>This website uses essential cookies to ensure the basic functionality of the site, such as theme preferences (Dark/Light mode). We do not use tracking or advertising cookies.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-display text-foreground font-light pt-8 border-t border-foreground/5 uppercase tracking-widest">Use of Data</h2>
                        <p>Your information is used strictly for the purpose of communicating with you regarding your inquiries, service scheduling, or vehicle acquisitions. We do not sell or share your data with third parties for marketing purposes.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-display text-foreground font-light pt-8 border-t border-foreground/5 uppercase tracking-widest">Your Rights</h2>
                        <p>You have the right to request access to the personal data we hold about you, to request that it be corrected or deleted, and to object to our processing of your data at any time.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-display text-foreground font-light pt-8 border-t border-foreground/5 uppercase tracking-widest">Security</h2>
                        <p>We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk of accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to your personal data.</p>
                    </div>

                    <div className="space-y-4 pt-12">
                        <p className="text-xs text-foreground/40 italic">For any questions regarding this policy, please contact us at hhmotorcars@gmail.com.</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Privacy;
