import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

const cars = [
    {
        name: "2016 Porsche GT4 Cayman",
        price: "$99,990",
        img: "/assets/images/2016-gt4-front.png",
        status: "Available",
        link: "/for-sale/2016-porsche-gt4-cayman"
    },
    {
        name: "2015 Porsche Cayenne Turbo",
        price: "$54,695",
        img: "/assets/images/cayenne-turbo-1.jpg",
        status: "Available",
        link: "/for-sale/2015-porsche-cayenne-turbo"
    },
    {
        name: "1970 Porsche 914-6",
        price: "$95,000",
        img: "/assets/images/914-6-front.jpg",
        status: "Available",
        link: "/for-sale/1970-porsche-914-6"
    }
];

const ForSale = () => {
    useTitle('Inventory & For Sale');
    return (
        <Layout>
            <section className="pt-40 pb-20 px-8 md:px-20 text-center space-y-4">
                <span className="text-[11px] tracking-[0.4em] uppercase text-foreground/40 font-light">Inventory</span>
                <h1 className="text-4xl md:text-6xl font-display font-light">For Sale</h1>
            </section>

            <section className="py-20 px-8 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {cars.map((c, i) => (
                    <Link to={c.link} key={i} className="space-y-6 group block cursor-pointer">
                        <div className="aspect-[4/3] overflow-hidden border border-foreground/5">
                             <img 
                                src={c.img} 
                                alt={c.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] tracking-widest text-primary uppercase font-light">{c.status}</span>
                            <h3 className="text-xl font-display font-light group-hover:text-primary transition-colors">{c.name}</h3>
                            <p className="text-[14px] text-foreground/60 font-light">{c.price}</p>
                        </div>
                    </Link>
                ))}
            </section>
        </Layout>
    );
};

export default ForSale;
