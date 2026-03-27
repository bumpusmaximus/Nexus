import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Suspense, lazy } from 'react';

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const WhyPorsche = lazy(() => import("./pages/WhyPorsche"));
const ForSale = lazy(() => import("./pages/ForSale"));
const CarDetail = lazy(() => import("./pages/CarDetail"));
const Service = lazy(() => import("./pages/Service"));
const Restoration = lazy(() => import("./pages/Restoration"));
const Overland = lazy(() => import("./pages/Overland"));
const Contact = lazy(() => import("./pages/Contact"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading component for Suspense
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-background">
     <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-porsche" element={<WhyPorsche />} />
            <Route path="/for-sale" element={<ForSale />} />
            <Route path="/for-sale/:id" element={<CarDetail />} />
            <Route path="/service" element={<Service />} />
            <Route path="/restoration" element={<Restoration />} />
            <Route path="/overland" element={<Overland />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster position="top-right" />
  </QueryClientProvider>
);

export default App;

