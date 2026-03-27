import { motion } from "framer-motion";
import { Flame, ShieldCheck, Users, RefreshCw } from "lucide-react";
import CTAButton from "./CTAButton";

const proofs = [
  { icon: Users, text: "Mais de 1.000 pessoas já estão no grupo" },
  { icon: RefreshCw, text: "Ofertas atualizadas diariamente" },
  { icon: ShieldCheck, text: "Produtos verificados e com desconto real" },
];

const HeroSection = () => {
  return (
    <section className="hero-gradient relative overflow-hidden min-h-[90vh] flex items-center justify-center px-4 py-16 md:py-24">
      {/* Decorative circles */}
      <div className="absolute top-[-80px] right-[-80px] w-64 h-64 rounded-full bg-white/10 animate-float" />
      <div className="absolute bottom-[-60px] left-[-60px] w-48 h-48 rounded-full bg-white/10 animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
            <Flame className="text-accent" size={20} />
            <span className="text-primary-foreground font-semibold text-sm">GRUPO 100% GRATUITO</span>
          </div>

          <h1 className="text-primary-foreground font-black text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
            🔥 Os <span className="text-accent">MELHORES</span> achadinhos da Shopee estão aqui!
          </h1>

          <p className="text-primary-foreground/90 text-lg md:text-2xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Entre no nosso grupo <strong>GRATUITO</strong> e receba ofertas com até{" "}
            <span className="text-accent font-extrabold">90% OFF</span> todos os dias!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <CTAButton text="👉 ENTRAR NO GRUPO AGORA" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col gap-3 items-center"
        >
          {proofs.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-primary-foreground/90 text-sm md:text-base">
              <item.icon size={18} className="text-accent flex-shrink-0" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
