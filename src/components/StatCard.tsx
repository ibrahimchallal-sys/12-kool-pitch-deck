import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
  value: string;
  delay?: number;
  glowColor?: "primary" | "electric";
}

const StatCard = ({ icon, label, value, delay = 0, glowColor = "primary" }: Props) => {
  const glowClass = glowColor === "electric" ? "glow-box-electric" : "glow-box";
  const valueColor = glowColor === "electric" ? "text-electric" : "text-primary";

  return (
    <motion.div
      className={`bg-card border border-border rounded-lg p-6 text-center ${glowClass} hover:border-primary/40 transition-colors`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <span className="text-2xl">{icon}</span>
      <p className={`font-display text-2xl md:text-3xl font-bold ${valueColor} mt-3`}>{value}</p>
      <p className="text-muted-foreground text-sm mt-2">{label}</p>
    </motion.div>
  );
};

export default StatCard;
