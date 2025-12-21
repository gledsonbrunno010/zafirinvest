import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import Particles from "@/components/ui/Particles";

// Import testimonial images
import carlosSilva from "@/assets/testimonials/carlos-silva.jpg";
import anaPaulaMendes from "@/assets/testimonials/ana-paula-mendes.jpg";
import robertoSantos from "@/assets/testimonials/roberto-santos.jpg";
import marianaCosta from "@/assets/testimonials/mariana-costa.jpg";
import fernandoOliveira from "@/assets/testimonials/fernando-oliveira.jpg";
import patriciaLima from "@/assets/testimonials/patricia-lima.jpg";
import eduardoNunes from "@/assets/testimonials/eduardo-nunes.jpg";
import lucianaFerreira from "@/assets/testimonials/luciana-ferreira.jpg";
import marcosPereira from "@/assets/testimonials/marcos-pereira.jpg";
import julianaCampos from "@/assets/testimonials/juliana-campos.jpg";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Empresário",
    content:
      "Comprei meu apartamento pelo consórcio e economizei mais de R$ 80 mil em juros. A equipe da Zafir foi impecável do início ao fim.",
    rating: 5,
    image: carlosSilva,
  },
  {
    name: "Ana Paula Mendes",
    role: "Advogada",
    content:
      "Fui contemplada em apenas 4 meses! Consegui dar um lance e realizar o sonho da casa própria muito antes do esperado.",
    rating: 5,
    image: anaPaulaMendes,
  },
  {
    name: "Roberto Santos",
    role: "Transportador",
    content:
      "Já adquiri 3 caminhões pela Zafir. Consórcio é a melhor forma de expandir frota sem comprometer o fluxo de caixa.",
    rating: 5,
    image: robertoSantos,
  },
  {
    name: "Mariana Costa",
    role: "Médica",
    content:
      "Atendimento excepcional e transparência total. Recomendo para quem quer investir com inteligência e segurança.",
    rating: 5,
    image: marianaCosta,
  },
  {
    name: "Fernando Oliveira",
    role: "Construtor",
    content:
      "As máquinas que adquiri pelo consórcio já se pagaram. Excelente forma de investir no meu negócio.",
    rating: 5,
    image: fernandoOliveira,
  },
  {
    name: "Patrícia Lima",
    role: "Contadora",
    content:
      "Como contadora, analiso números o tempo todo. O consórcio é matematicamente a melhor opção para aquisição planejada.",
    rating: 5,
    image: patriciaLima,
  },
  {
    name: "Eduardo Nunes",
    role: "Fazendeiro",
    content:
      "Comprei minha retroescavadeira e um terreno pelo consórcio. Parcelas que cabem no orçamento e sem surpresas.",
    rating: 5,
    image: eduardoNunes,
  },
  {
    name: "Luciana Ferreira",
    role: "Arquiteta",
    content:
      "A Zafir me ajudou a planejar a compra do meu escritório próprio. Hoje tenho um patrimônio sólido graças ao consórcio.",
    rating: 5,
    image: lucianaFerreira,
  },
  {
    name: "Marcos Pereira",
    role: "Engenheiro",
    content:
      "Investir em imóveis pelo consórcio foi a decisão mais inteligente da minha vida. Obrigado, Zafir!",
    rating: 5,
    image: marcosPereira,
  },
  {
    name: "Juliana Campos",
    role: "Empresária",
    content:
      "Já indiquei a Zafir para toda minha família. Profissionalismo e resultados reais. Nota 10!",
    rating: 5,
    image: julianaCampos,
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Triple for smooth infinite loop
  const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="avaliacoes" className="section-padding bg-background relative overflow-hidden">
      {/* Top gradient for section transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10" />
      {/* Bottom gradient for section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />

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

      <div className="container mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Prova Social
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Quem investiu,{" "}
            <span className="text-gradient-gold">recomenda</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-6 h-6 ${i < 4 ? 'fill-primary text-primary' : 'fill-primary/50 text-primary/50'}`} />
            ))}
            <span className="ml-2 text-muted-foreground">
              Avaliação 4.5 no Google
            </span>
          </div>
        </motion.div>
      </div>

      {/* Testimonials Marquee - Infinite Loop */}
      <div className="relative overflow-hidden py-4">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -((testimonials.length) * 400)],
          }}
          transition={{
            x: {
              duration: 60,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {tripleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-80 md:w-96"
            >
              <div className="glass-card spotlight-card p-6 h-full">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author with Photo */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
