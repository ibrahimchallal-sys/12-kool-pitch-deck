import { motion } from "framer-motion";

const bars = [
  { label: "Matières premières", value: 14560, max: 36400, color: "bg-primary" },
  { label: "Salaires", value: 5000, max: 36400, color: "bg-electric" },
  { label: "Assurance & entretien", value: 2000, max: 36400, color: "bg-primary/70" },
  { label: "Transport & gaz", value: 1500, max: 36400, color: "bg-electric/70" },
  { label: "Autres charges", value: 1340, max: 36400, color: "bg-muted-foreground/40" },
];

const FinanceChart = () => (
  <div className="space-y-4">
    <h4 className="font-display font-semibold text-lg mb-6">Répartition des charges mensuelles</h4>
    {bars.map((bar, i) => (
      <motion.div
        key={bar.label}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
      >
        <div className="flex justify-between text-sm mb-1">
          <span className="text-muted-foreground">{bar.label}</span>
          <span className="text-foreground font-medium">{bar.value.toLocaleString()} DH</span>
        </div>
        <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${bar.color}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${(bar.value / bar.max) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          />
        </div>
      </motion.div>
    ))}
  </div>
);

export default FinanceChart;
