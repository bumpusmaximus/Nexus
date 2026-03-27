import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const inventory = {
    "2016-porsche-gt4-cayman": {
        name: "2016 Porsche GT4 Cayman",
        price: "$99,990",
        img: "/assets/images/2016-gt4-front.png",
        status: "Available",
        year: "2016",
        mileage: "Please Inquire",
        engine: "3.8L Flat-6",
        transmission: "6-Speed Manual",
        description: "An exceptional example of Porsche's legendary GT department creation. The GT4 brings the 3.8L engine from the Carrera S and pairs it with the front suspension of the GT3, creating one of the most balanced and engaging sports cars of the modern era.",
        gallery: [
            "/assets/images/2016-gt4-shifter.jpg",
            "/assets/images/2016-gt4-motion.jpg"
        ]
    },
    "2015-porsche-cayenne-turbo": {
        name: "2015 Porsche Cayenne Turbo",
        price: "$54,695",
        img: "/assets/images/cayenne-turbo-1.jpg",
        status: "Available",
        year: "2015",
        mileage: "Please Inquire",
        engine: "4.8L Twin-Turbo V8",
        transmission: "8-Speed Tiptronic",
        description: "Incredible combination of performance and luxury. The Cayenne Turbo produces over 500 horsepower, delivering staggering acceleration wrapped in a refined, highly capable chassis.",
        gallery: [
            "/assets/images/cayenne-turbo-2.jpg",
            "/assets/images/cayenne-turbo-7.jpg",
            "/assets/images/cayenne-turbo-6.jpg"
        ]
    },
    "1970-porsche-914-6": {
        name: "1970 Porsche 914-6",
        price: "$95,000",
        img: "/assets/images/914-6-front.jpg",
        status: "Available",
        year: "1970",
        mileage: "Please Inquire",
        engine: "2.0L Flat-6",
        transmission: "5-Speed Manual",
        description: "A rare and highly sought-after 914-6. Moving away from the typical 4-cylinder, this is an original flat-six mid-engine sports car that offers an unmatched, pure analog driving experience.",
        gallery: [
            "/assets/images/914-6-engine.jpg",
            "/assets/images/914-6-interior.jpg"
        ]
    }
};

const CarDetail = () => {
    const { id } = useParams();
    const car = id ? inventory[id as keyof typeof inventory] : null;
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    if (!car) {
        return (
            <Layout>
                <div className="pt-40 text-center">
                    <h1 className="text-4xl font-display font-light">Vehicle Not Found</h1>
                    <Link to="/for-sale" className="text-primary mt-4 inline-block tracking-widest uppercase text-sm">Return to Inventory</Link>
                </div>
            </Layout>
        );
    }

    const allImages = [car.img, ...(car.gallery || [])];

    const nextImage = () => setCurrentImageIdx((prev) => (prev + 1) % allImages.length);
    const prevImage = () => setCurrentImageIdx((prev) => (prev - 1 + allImages.length) % allImages.length);

    return (
        <Layout>
            <section className="pt-56 pb-20 px-8 md:px-20 max-w-7xl mx-auto">
                <Link to="/for-sale" className="text-[10px] tracking-widest uppercase text-foreground/40 hover:text-foreground transition-colors mb-8 inline-block">
                    ← Back to Inventory
                </Link>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Image Section - Carousel */}
                    <div className="h-full">
                        <div className="relative w-full h-full min-h-[400px] overflow-hidden border border-foreground/5 group bg-black">
                            <img 
                                key={currentImageIdx}
                                src={allImages[currentImageIdx]} 
                                alt={`${car.name} - View ${currentImageIdx + 1}`} 
                                className="w-full h-full object-cover transition-opacity duration-500 animate-fade-in"
                            />
                            {allImages.length > 1 && (
                                <>
                                    <button 
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded bg-black/50 text-foreground/50 hover:text-foreground hover:bg-black/80 transition backdrop-blur opacity-0 group-hover:opacity-100"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button 
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded bg-black/50 text-foreground/50 hover:text-foreground hover:bg-black/80 transition backdrop-blur opacity-0 group-hover:opacity-100"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {allImages.map((_, idx) => (
                                            <div 
                                                key={idx} 
                                                onClick={() => setCurrentImageIdx(idx)}
                                                className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${idx === currentImageIdx ? 'bg-primary' : 'bg-foreground/20 hover:bg-foreground/50'}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-12 flex flex-col justify-between h-full pt-1 lg:pt-0">
                        <div className="space-y-4">
                            <span className="text-[11px] tracking-[0.4em] uppercase text-primary font-bold">{car.status}</span>
                            <h1 className="text-4xl md:text-5xl font-display font-light leading-tight">{car.name}</h1>
                            <p className="text-2xl font-light text-foreground/80">{car.price}</p>
                        </div>

                        <div className="space-y-6 text-foreground/60 font-light leading-relaxed">
                            <p className="text-lg">{car.description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-y-6 gap-x-12 pt-8 border-t border-foreground/10 mt-auto">
                            <div className="space-y-1">
                                <span className="text-[9px] tracking-widest uppercase text-foreground/40">Year</span>
                                <p className="text-sm">{car.year}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[9px] tracking-widest uppercase text-foreground/40">Mileage</span>
                                <p className="text-sm">{car.mileage}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[9px] tracking-widest uppercase text-foreground/40">Engine</span>
                                <p className="text-sm">{car.engine}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[9px] tracking-widest uppercase text-foreground/40">Transmission</span>
                                <p className="text-sm">{car.transmission}</p>
                            </div>
                        </div>

                        <div className="pt-8 flex gap-4">
                            <Link to="/contact">
                                <button className="button-singer !px-8">
                                    Inquire Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CarDetail;
