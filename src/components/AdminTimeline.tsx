import { motion } from "framer-motion";
import { FileText, Building2, Landmark, Receipt, ShieldCheck, MapPin, UtensilsCrossed } from "lucide-react";

const steps = [
  { icon: <FileText size={20} />, org: "OMPIC", label: "Certificat négatif", desc: "Nom commercial" },
  { icon: <FileText size={20} />, org: "Notaire", label: "Statuts SARL", desc: "Signés & légalisés" },
  { icon: <Landmark size={20} />, org: "Banque", label: "Dépôt capital", desc: "Ouverture compte" },
  { icon: <Receipt size={20} />, org: "DGI", label: "Identifiant fiscal", desc: "IS, TVA, taxe pro." },
  { icon: <Building2 size={20} />, org: "Tribunal", label: "Registre commerce", desc: "Immatriculation" },
  { icon: <ShieldCheck size={20} />, org: "CNSS", label: "Affiliation CNSS", desc: "Protection sociale" },
  { icon: <MapPin size={20} />, org: "Commune", label: "Autorisation", desc: "Permis ambulant" },
  { icon: <UtensilsCrossed size={20} />, org: "ONSSA", label: "Auth. sanitaire", desc: "Hygiène alim." },
];

const AdminTimeline = () => (
  <div className="relative w-full">
    {/* Ligne horizontale */}
    <div className="absolute top-4 left-0 right-0 h-px bg-border z-0" />

    <div className="grid grid-cols-8 gap-1 relative z-10">
      {steps.map((step, i) => (
        <motion.div
          key={step.org}
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
        >
          {/* Icône */}
          <div className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary shrink-0">
            {step.icon}
          </div>
          {/* Carte */}
          <div className="bg-card border border-border rounded-lg p-2.5 text-center w-full glow-box hover:border-primary/40 transition-colors">
            <span className="text-xs font-bold text-electric block mb-1">{step.org}</span>
            <p className="font-display font-semibold text-xs leading-tight">{step.label}</p>
            <p className="text-muted-foreground text-[11px] mt-1 leading-tight">{step.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default AdminTimeline;
