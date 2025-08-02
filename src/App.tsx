import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog"; 
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Main single-page component that contains all sections
const MainPage = () => (
  <>
    {/* Home Section */}
    <section id="home" className="section-container">
      <div className="section-content">
        <Home />
        {/* Optional: Add scroll indicator to next section */}
        <div className="scroll-indicator">
          <p className="text-sm text-gray-500 text-center mt-8">Scroll down to explore more</p>
          <div className="flex justify-center mt-2">
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="section-container">
      <div className="section-content">
        <About />
      </div>
    </section>

    {/* Services Section */}
    <section id="services" className="section-container">
      <div className="section-content">
        <Services />
      </div>
    </section>

    {/* Portfolio Section */}
    <section id="portfolio" className="section-container">
      <div className="section-content">
        <Portfolio />
      </div>
    </section>

    {/* Blog Section */}  
    <section id="blog" className="section-container">
      <div className="section-content">
        <Blog />
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="section-container">
      <div className="section-content">
        <Contact />
      </div>
    </section>
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              {/* Main single-page route with all sections */}
              <Route path="/" element={<MainPage />} />
              
              {/* Individual page routes for direct access (optional) */}
              <Route path="/home" element={<MainPage />} />
              <Route path="/about" element={<MainPage />} />
              <Route path="/services" element={<MainPage />} />
              <Route path="/portfolio" element={<MainPage />} />
              <Route path="/blog" element={<MainPage />} />
              <Route path="/contact" element={<MainPage />} />
              
              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;