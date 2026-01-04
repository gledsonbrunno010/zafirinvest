import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroHouse from "@/assets/hero-house.jpg";
import heroTruck from "@/assets/hero-truck.jpg";
import heroVehicles from "@/assets/hero-vehicles.jpg";
import heroMachinery from "@/assets/hero-machinery.jpg";

const slides = [
  { image: heroHouse },
  { image: heroVehicles },
  { image: heroTruck },
  { image: heroMachinery },
];

const whatsappUrl = "https://wa.me/5561994583188?text=Olá.%20Gostaria%20de%20agendar%20uma%20avaliação%20com%20a%20Zafir%20Invest.";

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="inicio" className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden">
      {/* Background Slides with Fade Edges */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Mobile Overlay - Lighter gradient from bottom for text readability, keeping image visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent md:hidden" />

          {/* Desktop Left Fade - Kept as is for desktop layout */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-background via-background/90 via-40% to-transparent w-[65%]" />
        </motion.div>
      </AnimatePresence>

      {/* Static Content */}
      <div className="relative z-10 h-full flex flex-col justify-start pt-20 md:pt-0 md:justify-center items-center md:items-start container mx-auto px-4">
        <div className="max-w-3xl text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category Badge */}
            <motion.span
              className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Crédito Inteligente
            </motion.span>

            {/* Main Headline - Static */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold text-foreground leading-[1.1] mb-6 tracking-tight">
              Transforme seu dinheiro em{" "}
              <span className="text-gradient-gold">patrimônio sólido</span>,
              sem juros abusivos.
            </h1>

            {/* Subheadline - Static */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              Invista em imóveis, veículos leves e pesados com segurança, estratégia e o crédito certo

            </p>

            {/* CTAs - Static */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-6 py-4 md:px-8 md:py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-pulse hover:animate-none group w-full sm:w-auto"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Simular Meu Investimento Agora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-foreground/30 text-foreground hover:bg-foreground/10 font-semibold text-base px-6 py-4 md:px-8 md:py-6 w-full sm:w-auto"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5" />
                  Falar com Especialista
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                ? "w-8 bg-primary"
                : "w-2 bg-foreground/30 hover:bg-foreground/50"
                }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 right-4 md:right-8 flex gap-2">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 backdrop-blur-sm border border-foreground/10 transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 backdrop-blur-sm border border-foreground/10 transition-all"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Bottom gradient for section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
};
