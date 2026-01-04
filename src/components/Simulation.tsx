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
    finalValue: 580000,
    gain: 80000,
    appreciation: 16,
    chartData: [
      { name: "Investimento", value: 500000, color: "hsl(var(--muted))" },
      { name: "Ganho", value: 80000, color: "hsl(var(--primary))" },
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
    finalValue: 1075000,
    gain: 575000,
    appreciation: 115,
    chartData: [
      { name: "Investimento", value: 500000, color: "hsl(var(--muted))" },
      { name: "Ganho", value: 575000, color: "hsl(var(--primary))" },
    ]
  },
];

const whatsappUrl = "https://wa.me/5561994583188?text=Olá.%20Gostaria%20de%20agendar%20uma%20avaliação%20com%20a%20Zafir%20Invest.";

export const Simulation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPeriod, setSelectedPeriod] = useState(2); // Default to 48 months (index 2)

  const currentData = investmentData[selectedPeriod];

  return (
    <section id="simulacao" className="section-padding bg-secondary/20 relative overflow-hidden">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10" />
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />

      <Particles
        className="absolute inset-0"
        particleColors={['#FFD700', '#FFD700']}
        particleCount={60}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto relative z-20 px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Veja como o crédito de{" "}
            <span className="text-gradient-gold">R$ 500.000,00</span> podem
            trabalhar para você
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-wider font-light">
            A forma mais inteligente de fazer seu dinheiro render juros
          </p>
        </motion.div>

        {/* Simulation Container - New Composition */}
        <div className="max-w-6xl mx-auto">
          {/* Period Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {investmentData.map((period, index) => (
              <motion.button
                key={period.months}
                onClick={() => setSelectedPeriod(index)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`
                            relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 group
                            ${selectedPeriod === index
                    ? "bg-primary/20 border-2 border-primary shadow-[0_0_30px_rgba(255,215,0,0.3)]"
                    : "bg-card/50 border border-white/5 hover:bg-card/80 hover:border-primary/50"}
                        `}
              >
                <div className="relative z-10">
                  <span className={`text-3xl font-bold block mb-1 ${selectedPeriod === index ? "text-primary" : "text-white"}`}>
                    {period.months} meses
                  </span>
                  <span className={`text-sm font-medium ${selectedPeriod === index ? "text-white" : "text-muted-foreground group-hover:text-white"}`}>
                    +{period.appreciation}% valorização
                  </span>
                </div>
                {selectedPeriod === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Results Row - 3 Vertical Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 items-stretch">
            {/* 1. Chart Card */}
            <motion.div
              layout
              className="bg-card/30 backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center relative min-h-[300px]"
            >
              <div className="w-full h-48 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={currentData.chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {currentData.chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => `R$ ${value.toLocaleString("pt-BR")}`}
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                {/* Centered Total Label inside donut if layout permits, otherwise Legend below */}
              </div>

              {/* Custom Legend */}
              <div className="flex gap-6 mt-4 md:mt-0">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">Investimento</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-xs text-primary uppercase tracking-wide">Ganho</span>
                </div>
              </div>
            </motion.div>

            {/* 2. Final Value Card */}
            <motion.div
              layout
              className="bg-card/30 backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center group hover:bg-card/40 transition-colors"
            >
              <p className="text-muted-foreground uppercase tracking-widest text-xs mb-4 font-medium">Valor Final Estimado</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl lg:text-5xl font-bold text-white group-hover:text-primary transition-colors">
                  R$ {(currentData.finalValue / 1000).toLocaleString("pt-BR")}k
                </span>
              </div>
              <span className="text-sm text-white/50">
                R$ {currentData.finalValue.toLocaleString("pt-BR")}
              </span>
              <TrendingUp className="w-12 h-12 text-primary/20 mt-6 group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
            </motion.div>

            {/* 3. Gross Gain Card */}
            <motion.div
              layout
              className="bg-card/30 backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
            >
              {/* Green glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/10 rounded-full blur-3xl" />

              <p className="text-green-500/70 uppercase tracking-widest text-xs mb-4 font-medium">Lucro Bruto</p>
              <span className="text-4xl lg:text-5xl font-bold text-green-500 mb-2 relative z-10">
                +R$ {(currentData.gain / 1000).toLocaleString("pt-BR")}k
              </span>
              <div className="inline-flex items-center gap-1 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 mt-4 relative z-10">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-sm font-bold text-green-500">
                  {currentData.appreciation}% valorização
                </span>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-black font-bold text-base px-6 py-3 md:px-8 md:py-4 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] transition-all duration-300 hover:scale-105 group w-full sm:w-auto whitespace-normal h-auto"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
                Simular agora com um especialista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
