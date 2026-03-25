import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sonner } from "sonner";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import WhyPorsche from "./pages/WhyPorsche";
import ForSale from "./pages/ForSale";
import CarDetail from "./pages/CarDetail";
import Service from "./pages/Service";
import Restoration from "./pages/Restoration";
import Overland from "./pages/Overland";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  </QueryClientProvider>
);

export default App;
