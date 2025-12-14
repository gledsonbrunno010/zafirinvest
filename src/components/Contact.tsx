import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Em breve um especialista entrará em contato.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              Fale Conosco
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
              Pronto para{" "}
              <span className="text-gradient-gold">construir patrimônio?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Entre em contato com nossos especialistas e descubra o melhor
              plano de consórcio para seus objetivos. Simulação gratuita e sem
              compromisso.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.a
                href="tel:+5511999999999"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                    (11) 99999-9999
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:contato@zafirinvest.com.br"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                    contato@zafirinvest.com.br
                  </p>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="text-foreground font-semibold">
                    São Paulo, SP - Brasil
                  </p>
                </div>
              </motion.div>
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-8"
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chamar no WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Solicite sua simulação gratuita
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Nome completo
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Seu nome"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="seu@email.com"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Telefone / WhatsApp
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(11) 99999-9999"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Mensagem (opcional)
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Conte um pouco sobre seus objetivos..."
                    className="bg-secondary/50 border-border/50 focus:border-primary min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Enviar Solicitação
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Ao enviar, você concorda com nossa Política de Privacidade.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
