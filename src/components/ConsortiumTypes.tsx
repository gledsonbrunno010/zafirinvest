import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Home, Car, Truck, Cog, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/Particles";
import heroHouse from "@/assets/hero-house.jpg";
import heroVehicles from "@/assets/hero-vehicles.jpg";
import heroTruck from "@/assets/hero-truck.jpg";
import heroMachinery from "@/assets/hero-machinery.jpg";
import futuristicChartBg from "@/assets/futuristic-chart-bg.jpg";

const consortiumTypes = [
  {
    icon: Home,
    title: "Imóveis",
    description: "Apartamentos, casas, terrenos e imóveis comerciais",
    image: heroHouse,
    credit: "De R$ 100 mil até R$ 2 milhões",
  },
  {
    icon: Car,
    title: "Carros e Motos",
    description: "Veículos novos e seminovos das melhores marcas",
    image: heroVehicles,
    credit: "De R$ 30 mil até R$ 500 mil",
  },
  {
    icon: Truck,
    title: "Caminhões",
    description: "Carretas, caminhões e veículos pesados",
    image: heroTruck,
    credit: "De R$ 150 mil até R$ 1,5 milhão",
  },
  {
    icon: Cog,
    title: "Máquinas Pesadas",
    description: "Retroescavadeiras, tratores e equipamentos",
    image: heroMachinery,
    credit: "De R$ 200 mil até R$ 3 milhões",
  },
];

const whatsappUrl = "https://wa.me/5561994583188?text=Olá.%20Gostaria%20de%20agendar%20uma%20avaliação%20com%20a%20Zafir%20Invest.";

export const ConsortiumTypes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedType, setSelectedType] = useState<typeof consortiumTypes[0] | null>(null);

  return (
    <section
      id="consorcios"
      className="section-padding relative overflow-hidden"
    >
      {/* Top gradient for section transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-20" />
      {/* Bottom gradient for section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />

      {/* Background Image */}

      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/60" />

      <Particles
        className="absolute inset-0"
        particleColors={['#FFD700', '#FFD700']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Tipos de Crédito
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Escolha o Investimento{" "}
            <span className="text-gradient-gold">ideal para você hoje</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Invista hoje mesmo no seu futuro
          </p>
        </motion.div>

        {/* Cards Grid with Yellow Blur */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {consortiumTypes.map((type, index) => (
            <motion.div
              key={type.title}
              layoutId={`card-${type.title}`}
              onClick={() => setSelectedType(type)}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative cursor-pointer spotlight-card rounded-2xl"
            >
              {/* Yellow Blur Effect */}
              <div className="absolute -inset-1 bg-primary/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />

              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[16/10]">
                {/* Background Image */}
                <motion.div
                  layoutId={`image-${type.title}`}
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${type.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                      {type.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-2">{type.description}</p>
                  <p className="text-sm text-primary font-semibold">{type.credit}</p>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-pulse hover:animate-none"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Descubra o melhor plano para você
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedType && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedType(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-lg"
          >
            <motion.div
              layoutId={`card-${selectedType.title}`}
              className="relative w-full max-w-4xl bg-card rounded-3xl overflow-hidden shadow-2xl border border-primary/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedType(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-video w-full relative">
                <motion.div
                  layoutId={`image-${selectedType.title}`}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedType.image})` }}
                />
              </div>

              <div className="p-8 bg-card border-t border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <selectedType.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-foreground mb-2">
                      {selectedType.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      {selectedType.description}
                    </p>
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg">
                      <p className="text-xl font-bold text-primary">
                        {selectedType.credit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
