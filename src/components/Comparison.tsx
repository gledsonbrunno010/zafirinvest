import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import officeNegotiation from "@/assets/office-negotiation.jpg";

const comparisonData = [
  {
    feature: "Juros compostos",
    consortium: { value: false, text: "Não possui" },
    financing: { value: true, text: "Sim, taxas elevadas" },
  },
  {
    feature: "Taxa de administração",
    consortium: { value: true, text: "Apenas taxa fixa" },
    financing: { value: true, text: "Juros + IOF + taxas" },
  },
  {
    feature: "Poder de compra à vista",
    consortium: { value: true, text: "Sim, negociação livre" },
    financing: { value: false, text: "Compra a prazo" },
  },
  {
    feature: "Planejamento financeiro",
    consortium: { value: true, text: "Parcelas previsíveis" },
    financing: { value: false, text: "Parcelas variáveis" },
  },
  {
    feature: "Custo total final",
    consortium: { value: true, text: "Até 30% menor" },
    financing: { value: false, text: "Pode dobrar o valor" },
  },
  {
    feature: "Contemplação antecipada",
    consortium: { value: true, text: "Lance ou sorteio" },
    financing: { value: true, text: "Imediata (mais caro)" },
  },
];

const whatsappUrl = "https://wa.me/5561994583188?text=Olá.%20Gostaria%20de%20agendar%20uma%20avaliação%20com%20a%20Zafir%20Invest.";

export const Comparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="comparativo" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${officeNegotiation})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Compare e escolha
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Quem Entende de Dinheiro,{" "}
            <span className="text-gradient-gold">Escolhe o Investimento Certo</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Veja o comparativo e escolha a melhor opção para você
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="p-4 text-center">
              <span className="text-muted-foreground text-sm font-medium">
                Característica
              </span>
            </div>
            {/* Highlighted Consortium Column */}
            <div className="p-4 bg-primary/20 rounded-t-xl text-center border-2 border-primary/40 border-b-0 shadow-lg shadow-primary/20">
              <span className="text-primary font-bold text-lg">Consórcio</span>
            </div>
            {/* Highlighted Financing Column */}
            <div className="p-4 bg-secondary/70 rounded-t-xl text-center border border-border/50 border-b-0">
              <span className="text-muted-foreground font-medium text-lg">
                Financiamento
              </span>
            </div>
          </div>

          {/* Rows */}
          {comparisonData.map((row, index) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="grid grid-cols-3 gap-4 border-b border-border/30"
            >
              <div className="p-4 flex items-center">
                <span className="text-foreground font-medium text-sm md:text-base">
                  {row.feature}
                </span>
              </div>
              <div className="p-4 bg-primary/10 border-x-2 border-primary/30 flex items-center justify-center gap-2">
                {row.consortium.value ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <X className="w-5 h-5 text-red-400" />
                )}
                <span className="text-xs md:text-sm text-muted-foreground hidden sm:inline">
                  {row.consortium.text}
                </span>
              </div>
              <div className="p-4 bg-secondary/50 border-x border-border/30 flex items-center justify-center gap-2">
                {row.financing.value ? (
                  <Check className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <X className="w-5 h-5 text-red-400" />
                )}
                <span className="text-xs md:text-sm text-muted-foreground hidden sm:inline">
                  {row.financing.text}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Footer */}
          <div className="grid grid-cols-3 gap-4">
            <div />
            <div className="p-4 bg-primary/20 rounded-b-xl border-2 border-primary/40 border-t-0 flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-primary font-bold text-sm md:text-base">
                Melhor opção ✓
              </span>
            </div>
            <div className="p-4 bg-secondary/70 rounded-b-xl border border-border/50 border-t-0" />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-pulse hover:animate-none"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Quero pagar menos e investir melhor
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
