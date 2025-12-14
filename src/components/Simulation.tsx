import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const periods = [
  { months: 12, label: "12 meses", appreciation: 8 },
  { months: 24, label: "24 meses", appreciation: 18 },
  { months: 60, label: "60 meses", appreciation: 45 },
  { months: 120, label: "120 meses", appreciation: 95 },
];

const baseValue = 500000;

export const Simulation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPeriod, setSelectedPeriod] = useState(2);

  const currentPeriod = periods[selectedPeriod];
  const finalValue = baseValue * (1 + currentPeriod.appreciation / 100);

  return (
    <section id="simulacao" className="section-padding bg-secondary/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Simulação de Investimento
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Veja como{" "}
            <span className="text-gradient-gold">R$ 500.000</span> podem
            trabalhar para você
          </h2>
        </motion.div>

        {/* Simulation Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto glass-card p-6 md:p-10"
        >
          {/* Period Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {periods.map((period, index) => (
              <button
                key={period.months}
                onClick={() => setSelectedPeriod(index)}
                className={`p-4 rounded-xl text-center transition-all ${
                  selectedPeriod === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary/50 text-foreground hover:bg-secondary"
                }`}
              >
                <span className="block text-lg font-bold">{period.label}</span>
                <span
                  className={`text-sm ${
                    selectedPeriod === index
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  +{period.appreciation}% valorização
                </span>
              </button>
            ))}
          </div>

          {/* Values Display */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Initial Value */}
            <div className="bg-secondary/30 rounded-xl p-6 text-center">
              <span className="text-muted-foreground text-sm block mb-2">
                Valor da carta
              </span>
              <span className="text-3xl md:text-4xl font-display font-bold text-foreground">
                R$ {baseValue.toLocaleString("pt-BR")}
              </span>
            </div>

            {/* Final Value */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <span className="text-primary text-sm block mb-2">
                Patrimônio estimado em {currentPeriod.label}
              </span>
              <span className="text-3xl md:text-4xl font-display font-bold text-foreground">
                R$ {Math.round(finalValue).toLocaleString("pt-BR")}
              </span>
              <span className="block text-sm text-primary mt-2">
                +{currentPeriod.appreciation}% de valorização potencial
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Investimento inicial</span>
              <span>Projeção de crescimento</span>
            </div>
            <div className="h-3 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-gold-light rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: `${Math.min(
                    100,
                    (currentPeriod.appreciation / 100) * 100 + 50
                  )}%`,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center mb-8">
            * Simulação ilustrativa baseada em valorização histórica média de
            imóveis. Resultados podem variar.
          </p>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Simular agora com um especialista
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
