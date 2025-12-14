import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/HeroSlider";
import { WhyConsortium } from "@/components/WhyConsortium";
import { ConsortiumTypes } from "@/components/ConsortiumTypes";
import { Comparison } from "@/components/Comparison";
import { Simulation } from "@/components/Simulation";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { Partners } from "@/components/Partners";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Consórcio Inteligente em São Paulo | Zafir Invest - Imóveis, Veículos e Máquinas</title>
        <meta
          name="description"
          content="Invista em imóveis, veículos e equipamentos com consórcio sem juros. Simulação gratuita, parcelas que cabem no bolso e poder de compra à vista. Zafir Invest - São Paulo."
        />
        <meta
          name="keywords"
          content="consórcio imobiliário, consórcio de veículos, investimento sem juros, consórcio em São Paulo, consórcio de caminhões, máquinas pesadas"
        />
        <link rel="canonical" href="https://zafirinvest.com.br" />
        <meta property="og:title" content="Consórcio Inteligente | Zafir Invest" />
        <meta
          property="og:description"
          content="Transforme seu dinheiro em patrimônio sólido, sem juros abusivos. Consórcio de imóveis, veículos e máquinas."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "Zafir Invest",
            description:
              "Empresa especializada em consórcios de imóveis, veículos e máquinas pesadas em São Paulo.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Brasília",
              addressRegion: "DF",
              addressCountry: "BR",
            },
            telephone: "+55-61-99458-3188",
            url: "https://zafirinvest.com.br",
            priceRange: "$$",
            areaServed: "Brasil",
            serviceType: ["Consórcio Imobiliário", "Consórcio de Veículos", "Consórcio de Máquinas"],
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSlider />
        <WhyConsortium />
        <ConsortiumTypes />
        <Comparison />
        <Simulation />
        <Testimonials />
        <About />
        <Partners />
        <Contact />
        <Footer />
        <FloatingCTA />
      </main>
    </>
  );
};

export default Index;
