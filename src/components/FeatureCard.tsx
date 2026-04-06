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
  const iconBg = glowColor === "electric"
    ? "bg-emerald-50 border border-emerald-100"
    : "bg-orange-50 border border-orange-100";

  return (
    <motion.div
      className="group bg-white border border-border rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}>
        {icon}
      </div>
      <div>
        <h3 className="font-display text-base font-bold text-foreground mb-1.5">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
