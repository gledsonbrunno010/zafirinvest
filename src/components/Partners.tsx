import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  {
    name: "Âncora Consórcios",
    logo: "ÂNCORA",
  },
  {
    name: "Eutbem Administradora",
    logo: "EUTBEM",
  },
];

export const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-16 bg-background border-y border-border/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
            Parceiros Oficiais
          </span>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="px-8 py-4 rounded-xl bg-secondary/30 border border-border/30 hover:border-primary/30 transition-all">
                <span className="text-2xl md:text-3xl font-display font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
