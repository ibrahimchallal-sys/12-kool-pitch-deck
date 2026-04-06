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
  const valueColor = glowColor === "electric" ? "text-electric" : "text-primary";
  const iconBg = glowColor === "electric" ? "bg-emerald-50" : "bg-orange-50";

  return (
    <motion.div
      className="bg-white border border-border rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <p className={`font-display text-2xl md:text-3xl font-extrabold ${valueColor} leading-none`}>{value}</p>
      <p className="text-muted-foreground text-xs mt-2 leading-snug">{label}</p>
    </motion.div>
  );
};

export default StatCard;
