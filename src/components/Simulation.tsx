import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import Particles from "@/components/ui/Particles";

const investmentData = [
  {
    months: 12,
    label: "12 meses",
    finalValue: 540000,
    gain: 40000,
    appreciation: 8,
    chartData: [
      { name: "Investimento", value: 500000, color: "hsl(var(--muted))" },
      { name: "Ganho", value: 40000, color: "hsl(var(--primary))" },
    ]
  },
  {
    months: 24,
    label: "24 meses",
    finalValue: 583200,
    gain: 83200,
    appreciation: 16.6,
    chartData: [
      { name: "Investimento", value: 500000, color: "hsl(var(--muted))" },
      { name: "Ganho", value: 83200, color: "hsl(var(--primary))" },
    ]
  },
  {
    months: 48,
    label: "48 meses",
    finalValue: 680000,
    gain: 180000,
    appreciation: 36,
    chartData: [
      { name: "Investimento", value: 500000, color: "hsl(var(--muted))" },
      { name: "Ganho", value: 180000, color: "hsl(var(--primary))" },
    ]
  },
  {
    months: 120,
    label: "120 meses",
    finalValue: 1079000,
    gain: 579000,
    appreciation: 115,
    chartData: [
      { name: "Investimento", value: 500000, color: "hsl(var(--muted))" },
      { name: "Ganho", value: 579000, color: "hsl(var(--primary))" },
    ]
  },
];

const baseValue = 500000;
const whatsappUrl = "https://wa.me/5561994583188?text=Olá.%20Gostaria%20de%20agendar%20uma%20avaliação%20com%20a%20Zafir%20Invest.";

export const Simulation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPeriod, setSelectedPeriod] = useState(0);

  const currentData = investmentData[selectedPeriod];

  return (
    <section id="simulacao" className="section-padding bg-secondary/20 relative overflow-hidden">
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
            Veja como o crédito de{" "}
            <span className="text-gradient-gold">R$ 500.000,00</span> podem
            trabalhar para você
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            A forma mais inteligente de fazer seu dinheiro render juros
          </p>
        </motion.div>

        {/* Simulation Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto glass-card spotlight-card p-6 md:p-10"
        >
          {/* Period Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {investmentData.map((period, index) => (
              <button
                key={period.months}
                onClick={() => setSelectedPeriod(index)}
                className={`p-4 rounded-xl text-center transition-all ${selectedPeriod === index
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary/50 text-foreground hover:bg-secondary"
                  }`}
              >
                <span className="block text-lg font-bold">{period.label}</span>
                <span
                  className={`text-sm ${selectedPeriod === index
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                    }`}
                >
                  +{period.appreciation}% valorização
                </span>
              </button>
            ))}
          </div>

          {/* Pie Chart and Values */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Pie Chart */}
            <div className="h-64 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={currentData.chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    animationDuration={500}
                  >
                    {currentData.chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => `R$ ${value.toLocaleString("pt-BR")}`}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend
                    formatter={(value) => <span className="text-foreground">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Values Display */}
            <div className="flex flex-col justify-center gap-4">
              {/* Initial Value */}
              <div className="bg-secondary/30 rounded-xl p-4 text-center">
                <span className="text-muted-foreground text-sm block mb-1">
                  Valor da carta
                </span>
                <span className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  R$ {baseValue.toLocaleString("pt-BR")}
                </span>
              </div>

              {/* Final Value */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <span className="text-primary text-sm block mb-1">
                  Valor Final Estimado
                </span>
                <span className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  R$ {currentData.finalValue.toLocaleString("pt-BR")}
                </span>
              </div>

              {/* Gain */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                <span className="text-green-500 text-sm block mb-1">
                  Ganho Bruto
                </span>
                <span className="text-2xl md:text-3xl font-display font-bold text-green-500">
                  +R$ {currentData.gain.toLocaleString("pt-BR")}
                </span>
                <span className="block text-sm text-green-500/80 mt-1">
                  {currentData.appreciation}% de valorização
                </span>
              </div>
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
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 py-4 md:px-8 md:py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-pulse hover:animate-none w-full sm:w-auto"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Simular agora com um especialista
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
