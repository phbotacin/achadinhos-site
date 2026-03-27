import { motion } from "framer-motion";
import { BadgeDollarSign, Zap, Package } from "lucide-react";

const benefits = [
  {
    icon: BadgeDollarSign,
    title: "Descontos Exclusivos",
    description: "Ofertas que você não encontra em nenhum outro lugar, com preços imbatíveis.",
  },
  {
    icon: Zap,
    title: "Ofertas Rápidas",
    description: "As melhores promoções acabam em minutos. Fique por dentro antes de todo mundo!",
  },
  {
    icon: Package,
    title: "Produtos Variados",
    description: "Eletrônicos, casa, beleza, moda e muito mais — tudo com desconto real.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-foreground font-black text-3xl md:text-5xl text-center mb-4"
        >
          Por que entrar no grupo? 🤔
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center text-lg mb-12 max-w-xl mx-auto"
        >
          Veja o que você ganha ao fazer parte:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-benefit"
            >
              <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mx-auto mb-5">
                <b.icon className="text-primary-foreground" size={30} />
              </div>
              <h3 className="text-foreground font-extrabold text-xl mb-3">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
