import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import CTAButton from "./CTAButton";

const UrgencySection = () => {
  return (
    <section className="urgency-gradient py-16 md:py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
            <AlertTriangle className="text-accent" size={20} />
            <span className="text-primary-foreground font-bold text-sm">VAGAS LIMITADAS</span>
          </div>

          <h2 className="text-primary-foreground font-black text-3xl md:text-5xl mb-6 leading-tight">
            ⚠️ As ofertas acabam rápido — entre agora para não perder!
          </h2>

          <p className="text-primary-foreground/90 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Mais de <strong>200 pessoas</strong> entraram só hoje. Não fique de fora!
          </p>

          <CTAButton text="🚀 QUERO ENTRAR NO GRUPO" />
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;
