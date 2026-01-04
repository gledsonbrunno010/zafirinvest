import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import bacenLogo from "@/assets/logo-bacen-hq.png";
import abacLogo from "@/assets/logo-abac-original.png";
import lgpdLogo from "@/assets/logo-lgpd-final.png";

const certifications = [
  {
    name: "Banco Central do Brasil",
    image: bacenLogo,
    className: "filter invert mix-blend-screen opacity-90 hover:opacity-100",
  },
  {
    name: "ABAC",
    image: abacLogo,
    className: "filter invert grayscale brightness-150 contrast-125 mix-blend-screen opacity-90 hover:opacity-100",
  },
  {
    name: "LGPD",
    image: lgpdLogo,
    className: "filter brightness-125 contrast-110 mix-blend-screen opacity-90 hover:opacity-100",
  },
];

export const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Yellow Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-primary/20 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center space-y-12"
        >
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gradient-gold max-w-4xl mx-auto leading-tight">
            Certificado e Fiscalizado pelos Principais Órgãos Regulamentadores
          </h2>

          {/* Logos */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className={`w-full h-full object-contain transition-all duration-300 ${cert.className}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
