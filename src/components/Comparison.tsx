import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import officeNegotiation from "@/assets/office-negotiation.jpg";

const comparisonData = [
  {
    feature: "Entrada inicial",
    consortium: { value: false, text: "Não é obrigatória. Pode ser substituída ou antecipada via estratégia de lance." },
    financing: { value: true, text: "Normalmente obrigatória, variando entre 20% e 30% do valor do imóvel." },
  },
  {
    feature: "Juros",
    consortium: { value: false, text: "Não possui juros." },
    financing: { value: true, text: "Possui juros compostos, geralmente entre 8% e 12% ao ano." },
  },
  {
    feature: "Custo financeiro total",
    consortium: { value: true, text: "Menor no longo prazo, pois não há incidência de juros." },
    financing: { value: false, text: "Maior, devido à capitalização dos juros ao longo do contrato." },
  },
  {
    feature: "Correção das parcelas",
    consortium: { value: true, text: "Correção conforme índice do grupo (INCC, IPCA ou similar)." },
    financing: { value: true, text: "Correção por TR, IPCA ou taxa fixa prevista em contrato." },
  },
  {
    feature: "Exigência de renda",
    consortium: { value: true, text: "Mais flexível, com análise menos rígida." },
    financing: { value: false, text: "Mais rigorosa, com exigência formal de comprovação de renda." },
  },
  {
    feature: "Risco financeiro",
    consortium: { value: true, text: "Baixo, pois não há juros e o valor cresce de forma controlada." },
    financing: { value: false, text: "Médio a alto, em razão dos juros, correções e inadimplência." },
  },
];

const whatsappUrl = "https://wa.me/5561994583188?text=Olá.%20Gostaria%20de%20agendar%20uma%20avaliação%20com%20a%20Zafir%20Invest.";

export const Comparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="comparativo" className="section-padding relative overflow-hidden">
      {/* Top gradient for section transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-20" />
      {/* Bottom gradient for section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${officeNegotiation})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

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
                Ponto mais discutido
              </span>
            </div>
            {/* Highlighted Consortium Column */}
            <div className="p-4 bg-primary/20 rounded-t-xl text-center border-2 border-primary/40 border-b-0 shadow-lg shadow-primary/20">
              <span className="text-primary font-bold text-lg">Crédito Inteligente</span>
            </div>
            {/* Highlighted Financing Column */}
            <div className="p-4 bg-secondary/70 rounded-t-xl text-center border border-border/50 border-b-0">
              <span className="text-muted-foreground font-medium text-lg">
                Financiamento Imobiliário
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
