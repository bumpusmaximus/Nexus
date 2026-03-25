import React from 'react';
import { Layout } from '../components/Layout';
import { Star } from 'lucide-react';

const reviews = [
    { name: "David M.", text: "The restoration on my 1974 911 was beyond my expectations. Every bolt is period correct. Meticulous craftsmanship.", stars: 5 },
    { name: "Sarah K.", text: "HH is the only place I trust with my engine work. Their technical knowledge is unsurpassed in the region.", stars: 5 },
    { name: "James L.", text: "Purchased a 930 Turbo from HH. The transparency during the inspection was world-class.", stars: 5 }
];

const Reviews = () => {
    return (
        <Layout>
            <section className="pt-40 pb-20 px-8 md:px-20 text-center space-y-4">
                <span className="text-[11px] tracking-[0.4em] uppercase text-foreground/40 font-light">Validation</span>
                <h1 className="text-4xl md:text-6xl font-display font-light">Reviews</h1>
            </section>

            <section className="py-20 px-8 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {reviews.map((r, i) => (
                    <div key={i} className="p-12 border border-foreground/5 bg-foreground/5 space-y-6">
                        <div className="flex gap-1 text-foreground/40">
                            {[...Array(r.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-lg font-display font-light italic leading-relaxed text-foreground/80">"{r.text}"</p>
                        <p className="text-[10px] tracking-widest uppercase text-foreground/40">— {r.name}</p>
                    </div>
                ))}
            </section>
        </Layout>
    );
};

export default Reviews;
