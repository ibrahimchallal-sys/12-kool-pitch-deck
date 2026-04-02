import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  glowColor?: "primary" | "electric";
}

const FeatureCard = ({ icon, title, description, delay = 0, glowColor = "primary" }: Props) => {
  const glowClass = glowColor === "electric" ? "glow-box-electric hover:border-electric/40" : "glow-box hover:border-primary/40";

  return (
    <motion.div
      className={`bg-card border border-border rounded-lg p-6 md:p-8 transition-all ${glowClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
