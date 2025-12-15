import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Percent, Calendar, Wallet, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Percent,
    title: "Sem juros",
    description: "Apenas taxa de administração transparente, sem juros compostos",
  },
  {
    icon: Calendar,
    title: "Parcelas planejadas",
    description: "Organize seu orçamento com parcelas fixas e previsíveis",
  },
  {
    icon: Wallet,
    title: "Poder de compra à vista",
    description: "Negocie como pagador à vista e obtenha descontos exclusivos",
  },
  {
    icon: TrendingUp,
    title: "Ideal para longo prazo",
    description: "Construa patrimônio de forma inteligente e sustentável",
  },
];

export const WhyConsortium = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Top gradient for section transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10" />
      {/* Bottom gradient for section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          Por que escolher Crédito Inteligente?
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
          O jeito inteligente de construir{" "}
          <span className="text-gradient-gold">patrimônio no Brasil</span>
        </h2>
      </motion.div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="glass-card p-6 md:p-8 h-full hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </section >
  );
};
