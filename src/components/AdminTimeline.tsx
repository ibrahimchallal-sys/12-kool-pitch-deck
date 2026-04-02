import { motion } from "framer-motion";
import { FileText, Building2, Landmark, Receipt, ShieldCheck, MapPin, UtensilsCrossed } from "lucide-react";

const steps = [
  { icon: <FileText size={18} />, org: "OMPIC", label: "Certificat négatif", desc: "Réservation du nom commercial" },
  { icon: <FileText size={18} />, org: "Notaire / Avocat", label: "Rédaction des statuts", desc: "Statuts SARL signés et légalisés" },
  { icon: <Landmark size={18} />, org: "Banque", label: "Dépôt du capital", desc: "Ouverture compte + blocage capital" },
  { icon: <Receipt size={18} />, org: "DGI", label: "Identifiant fiscal", desc: "IS, TVA, taxe professionnelle" },
  { icon: <Building2 size={18} />, org: "Tribunal", label: "Registre de commerce", desc: "Immatriculation RC" },
  { icon: <ShieldCheck size={18} />, org: "CNSS", label: "Affiliation CNSS", desc: "Protection sociale salariés" },
  { icon: <MapPin size={18} />, org: "Commune", label: "Autorisation d'exercice", desc: "Permis d'occupation / ambulant" },
  { icon: <UtensilsCrossed size={18} />, org: "ONSSA", label: "Autorisation sanitaire", desc: "Normes d'hygiène alimentaire" },
];

const AdminTimeline = () => (
  <div className="relative">
    <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
    <div className="space-y-6">
      {steps.map((step, i) => (
        <motion.div
          key={step.org}
          className="relative flex items-start gap-4 pl-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
        >
          <div className="relative z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-primary shrink-0">
            {step.icon}
          </div>
          <div className="bg-card border border-border rounded-lg p-4 flex-1 glow-box hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-electric bg-electric/10 px-2 py-0.5 rounded-full">{step.org}</span>
            </div>
            <p className="font-display font-semibold text-sm">{step.label}</p>
            <p className="text-muted-foreground text-xs mt-1">{step.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default AdminTimeline;
