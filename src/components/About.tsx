import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Target, TrendingUp, Users, CheckCircle } from "lucide-react";
import aboutOfficeBg from "@/assets/about-office-bg.jpg";

const values = [
  {
    icon: Shield,
    title: "Segurança",
    description: "Operamos com as maiores administradoras do Brasil, todas regulamentadas pelo Banco Central.",
  },
  {
    icon: Target,
    title: "Estratégia",
    description: "Planejamento personalizado para cada perfil de investidor, maximizando seus resultados.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento",
    description: "Focamos em soluções que geram patrimônio sustentável ao longo do tempo.",
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Acompanhamos você desde a simulação até a contemplação e aquisição do bem.",
  },
];

const stats = [
  { value: "R$ 50M+", label: "Em créditos liberados" },
  { value: "R$ 80M+", label: "Em Crédito Sob Gestão" },
  { value: "98%", label: "Satisfação dos Clientes" },
  { value: "4+", label: "Anos de Experiência" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding relative overflow-hidden">
      {/* Top gradient for section transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-20" />
      {/* Bottom gradient for section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${aboutOfficeBg})` }}
      />
      {/* Left gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-background/20" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              Sobre a Zafir Invest
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
              Estratégia, segurança e{" "}
              <span className="text-gradient-gold">visão de futuro</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A Zafir Invest nasceu com o propósito de democratizar o acesso ao
              consórcio como ferramenta de investimento inteligente. Acreditamos
              que construir patrimônio deve ser acessível, transparente e livre
              de juros abusivos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa equipe de especialistas combina conhecimento técnico e
              atendimento humanizado para entregar a melhor experiência em
              consórcios do Brasil. Trabalhamos com as maiores administradoras
              do mercado, garantindo segurança e solidez em cada operação.
            </p>

            {/* Checkmarks */}
            <div className="space-y-3">
              {[
                "Atendimento personalizado e humano",
                "Simulações gratuitas e sem compromisso",
                "Parceiros regulamentados pelo Banco Central",
                "Acompanhamento completo até a contemplação",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Values Grid with Yellow Blur */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="relative group"
              >
                {/* Yellow Blur Effect */}
                <div className="absolute -inset-1 bg-primary/25 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />

                <div className="relative glass-card spotlight-card p-6 hover:bg-card/70 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border/30"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">
                {stat.value}
              </span>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
