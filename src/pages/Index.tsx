import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/HeroSlider";

// Lazy load below-the-fold components
const WhyConsortium = lazy(() => import("@/components/WhyConsortium").then(module => ({ default: module.WhyConsortium })));
const ConsortiumTypes = lazy(() => import("@/components/ConsortiumTypes").then(module => ({ default: module.ConsortiumTypes })));
const SpotlightEffect = lazy(() => import("@/components/ui/SpotlightEffect").then(module => ({ default: module.SpotlightEffect })));
const Simulation = lazy(() => import("@/components/Simulation").then(module => ({ default: module.Simulation })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(module => ({ default: module.Testimonials })));
const About = lazy(() => import("@/components/About").then(module => ({ default: module.About })));
const Partners = lazy(() => import("@/components/Partners").then(module => ({ default: module.Partners })));
const Contact = lazy(() => import("@/components/Contact").then(module => ({ default: module.Contact })));
const Footer = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })));
const FloatingCTA = lazy(() => import("@/components/FloatingCTA").then(module => ({ default: module.FloatingCTA })));

// Loading fallback component
const SectionLoader = () => <div className="w-full h-40 flex items-center justify-center bg-background/50" />;

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

        <Suspense fallback={<SectionLoader />}>
          <ConsortiumTypes />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <WhyConsortium />
        </Suspense>

        <Suspense fallback={null}>
          <SpotlightEffect />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Simulation />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Partners />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>

        <Suspense fallback={null}>
          <FloatingCTA />
        </Suspense>
      </main>
    </>
  );
};

export default Index;
