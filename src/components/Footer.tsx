import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import logoZafir from "@/assets/logo-zafir-transparent.png";
import bacenLogo from "@/assets/bacen-logo.jpg";
import lgpdLogo from "@/assets/lgpd-logo.png";

const footerLinks = {
  company: [
    { label: "Sobre nós", href: "#sobre" },
    { label: "Contato", href: "#contato" },
    { label: "Avaliações", href: "#avaliacoes" },
  ],
  services: [
    { label: "Consórcio de Imóveis", href: "#consorcios" },
    { label: "Consórcio de Veículos", href: "#consorcios" },
    { label: "Consórcio de Caminhões", href: "#consorcios" },
    { label: "Simulação", href: "#simulacao" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "LGPD", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram", color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]" },
  { icon: Facebook, href: "#", label: "Facebook", color: "bg-[#1877F2]" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "bg-[#0A66C2]" },
  { icon: Youtube, href: "#", label: "YouTube", color: "bg-[#FF0000]" },
];

const certifications = [
  { name: "Banco Central", image: bacenLogo },
  { name: "LGPD", image: lgpdLogo },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border relative">
      {/* Top gradient for section transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10 -translate-y-full" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#inicio" className="inline-block mb-4">
              <img
                src={logoZafir}
                alt="Zafir Invest"
                className="h-20 md:h-32 w-auto"
              />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transformando sonhos em patrimônio real com planejamento financeiro e
              estratégias inteligentes.
            </p>

            {/* Social Links with Original Colors */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className={`w-10 h-10 rounded-lg ${social.color} flex items-center justify-center text-white transition-all shadow-lg hover:shadow-xl`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:pt-36">
            <h4 className="font-display font-bold text-primary mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:pt-36">
            <h4 className="font-display font-bold text-primary mb-4">
              Serviços
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:pt-36">
            <h4 className="font-display font-bold text-primary mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="lg:pt-36">
            <h4 className="font-display font-bold text-primary mb-4">
              Certificações
            </h4>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/30"
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="h-6 w-auto object-contain grayscale opacity-70"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Zafir Invest. Todos os direitos
              reservados.
            </p>
            <p className="text-xs text-muted-foreground/60 text-center md:text-right">
              Consórcios administrados por empresas regulamentadas pelo Banco
              Central do Brasil.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
