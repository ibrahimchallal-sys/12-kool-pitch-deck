import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
  blob?: "left" | "right" | "both" | "none";
}

const AnimatedSection = ({ children, className = "", id, blob = "right" }: Props) => (
  <motion.section
    id={id}
    className={`section-padding relative overflow-hidden ${className}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {(blob === "right" || blob === "both") && (
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/6 blur-3xl pointer-events-none" />
    )}
    {(blob === "left" || blob === "both") && (
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-electric/5 blur-3xl pointer-events-none" />
    )}
    {children}
  </motion.section>
);

export default AnimatedSection;
