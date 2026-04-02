import { motion } from "framer-motion";
import { ArrowDown, Users, ShieldCheck, MapPin, Utensils, Star, Wrench, Monitor, Briefcase, ShoppingCart, DollarSign, Megaphone, Wallet, TrendingUp, BarChart3, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import StatCard from "@/components/StatCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="glow-dot -top-32 -right-32 w-[500px] h-[500px] bg-primary/10 blur-3xl" />
          <div className="glow-dot bottom-0 left-0 w-96 h-96 bg-electric/8 blur-3xl" />
          <div className="glow-dot top-1/2 left-1/3 w-72 h-72 bg-primary/5 blur-3xl animate-float" />
          <div className="glow-dot bottom-1/4 right-1/4 w-60 h-60 bg-electric/5 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-gradient-mixed mb-6">
              12 Kool
            </h1>
            <p className="font-display text-xl md:text-2xl font-medium text-foreground/90 max-w-3xl mx-auto mb-4">
              La restauration rapide, fraîche et de confiance — en caravane mobile.
            </p>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10">
              Des repas de qualité, préparés à la commande, géolocalisés près de vous.
            </p>
            <a
              href="#probleme"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-all text-lg glow-box-intense hover:shadow-[0_0_80px_hsl(24_95%_53%/0.35)]"
            >
              Découvrir le projet
              <ArrowDown size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══ PROBLÈME ═══ */}
      <AnimatedSection id="probleme" className="bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle title="Un besoin non satisfait" />
          <div className="bg-card border border-border rounded-lg p-8 md:p-10 glow-box">
            <p className="text-foreground/80 leading-relaxed text-lg">
              Les consommateurs manquent d'un moyen fiable et transparent pour trouver des repas de qualité, hygiéniques et abordables — surtout en milieu urbain. Le manque d'informations sur l'hygiène, la qualité et les prix entraîne une perte de temps, d'argent et une insatisfaction générale.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ SOLUTION ═══ */}
      <AnimatedSection id="solution">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle title="12 Kool : La plateforme de notation et de confiance" />
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Utensils className="text-primary" size={32} />}
              title="Plats variés & de qualité"
              description="Cuisine locale et fast-food maison, préparés à la commande avec des ingrédients frais."
              delay={0}
              glowColor="primary"
            />
            <FeatureCard
              icon={<MapPin className="text-electric" size={32} />}
              title="Géolocalisation"
              description="Trouvez notre caravane en temps réel via notre site web, où que vous soyez."
              delay={0.1}
              glowColor="electric"
            />
            <FeatureCard
              icon={<Star className="text-primary" size={32} />}
              title="Score de confiance"
              description="Avis vérifiés, hygiène garantie, transparence totale sur chaque plat et service."
              delay={0.2}
              glowColor="primary"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ MARCHÉ ═══ */}
      <AnimatedSection id="marche" className="bg-secondary/30 relative overflow-hidden">
        <div className="glow-dot top-0 right-0 w-80 h-80 bg-electric/5 blur-3xl" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <SectionTitle title="Notre Marché" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 glow-box hover:border-electric/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-electric" size={24} />
                <h3 className="font-display text-xl font-semibold">Cible B2C</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Étudiants, jeunes actifs, salariés, familles — en milieu urbain. Sensibles au prix, à la rapidité, à l'hygiène et à la confiance.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 glow-box hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-primary" size={24} />
                <h3 className="font-display text-xl font-semibold">Avantages concurrentiels</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                {[
                  "Diversité des plats (locaux et faits maison)",
                  "Prix accessibles : 15 à 60 DH (boissons incluses)",
                  "Score de confiance & avis vérifiés",
                  "Proximité grâce à la mobilité",
                  "Valorisation du commerce local",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-electric mt-1">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ STRATÉGIE MARKETING ═══ */}
      <AnimatedSection id="strategie">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle title="Notre Stratégie Marketing" subtitle="Les 4P du Marketing Mix" />
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: <ShoppingCart className="text-primary" size={28} />, title: "Produit", text: "Caravane mobile offrant des plats variés et de qualité, avec score de confiance et avis vérifiés.", glow: "primary" },
              { icon: <DollarSign className="text-electric" size={28} />, title: "Prix", text: "Entre 15 et 60 DH (boissons et nourriture). Fixation par calcul des coûts + marge ou alignement marché.", glow: "electric" },
              { icon: <Megaphone className="text-electric" size={28} />, title: "Promotion", text: "Réseaux sociaux + Bouche-à-oreille + Affiches dans écoles et universités.", glow: "electric" },
              { icon: <MapPin className="text-primary" size={28} />, title: "Place", text: "Boulevards commerciaux, écoles/universités, places publiques — là où se trouvent nos clients.", glow: "primary" },
            ].map((item, i) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.text} delay={i * 0.1} glowColor={item.glow as "primary" | "electric"} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ TECHNIQUE ═══ */}
      <AnimatedSection id="technique" className="bg-secondary/30 relative overflow-hidden">
        <div className="glow-dot bottom-0 left-0 w-96 h-96 bg-primary/5 blur-3xl" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <SectionTitle title="Faisabilité Technique" />
          <p className="text-foreground/80 leading-relaxed text-lg mb-10 max-w-3xl">
            Le projet sera réalisé par l'achat et l'aménagement d'une caravane en cuisine mobile professionnelle, avec une plateforme web pour la précommande et la géolocalisation.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon={<Users className="text-electric" size={32} />} title="Ressources Humaines" description="Cuisiniers + personnel de service, formés en hygiène et sécurité alimentaire." delay={0} glowColor="electric" />
            <FeatureCard icon={<Wrench className="text-primary" size={32} />} title="Ressources Matérielles" description="Machines de cuisson, réfrigération, électricité, ventilation, stockage." delay={0.1} glowColor="primary" />
            <FeatureCard icon={<Monitor className="text-electric" size={32} />} title="Ressources Technologiques" description="Logiciels de gestion des commandes, stocks, comptabilité. Plateforme web & mobile pour précommande et géolocalisation." delay={0.2} glowColor="electric" />
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ FINANCE ═══ */}
      <AnimatedSection id="finance" className="relative overflow-hidden">
        <div className="glow-dot top-1/3 right-0 w-80 h-80 bg-electric/5 blur-3xl" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <SectionTitle title="Viabilité Financière" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard icon="💰" label="Investissement initial" value="190–203K DH" delay={0} glowColor="primary" />
            <StatCard icon="📈" label="CA mensuel estimé" value="~36 400 DH" delay={0.1} glowColor="electric" />
            <StatCard icon="📊" label="Bénéfice mensuel" value="10–12K DH" delay={0.2} glowColor="primary" />
            <StatCard icon="⏱️" label="Retour sur invest." value="18–24 mois" delay={0.3} glowColor="electric" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Charges fixes", text: "Salaires, assurance, internet, entretien — 7 000 à 8 000 DH/mois" },
              { title: "Charges variables", text: "Matières premières (30–40% du CA), gaz, électricité, transport, emballages" },
              { title: "Financement", text: "Apport personnel (80 000 DH) + Crédit bancaire (100 000 DH) + Aide familiale (20 000 DH)" },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-lg p-6 glow-box hover:border-primary/40 transition-colors">
                <h4 className="font-display font-semibold text-primary mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ JURIDIQUE ═══ */}
      <AnimatedSection id="juridique" className="bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle title="Structure Juridique" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 space-y-4 glow-box hover:border-electric/40 transition-colors">
              <h3 className="font-display text-lg font-semibold flex items-center gap-2">
                <Briefcase className="text-electric" size={20} />
                Forme & Fiscalité
              </h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li><span className="text-electric">●</span> Forme : SARL (plusieurs associés)</li>
                <li><span className="text-electric">●</span> Impôt sur les Sociétés (IS)</li>
                <li><span className="text-electric">●</span> 1 associé salarié gérant (salaire mensuel, CNSS, min. SMIG)</li>
                <li><span className="text-electric">●</span> Autres associés : pas de salaires</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 space-y-4 glow-box hover:border-primary/40 transition-colors">
              <h3 className="font-display text-lg font-semibold flex items-center gap-2">
                <ShieldCheck className="text-primary" size={20} />
                Obligations
              </h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li><span className="text-primary">●</span> Inscription au registre de commerce</li>
                <li><span className="text-primary">●</span> Identifiant fiscal (IS + TVA)</li>
                <li><span className="text-primary">●</span> Taxe professionnelle</li>
                <li><span className="text-primary">●</span> CNSS</li>
                <li><span className="text-primary">●</span> Respect du Code de Commerce</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ ÉQUIPE ═══ */}
      <AnimatedSection id="equipe" className="relative overflow-hidden">
        <div className="glow-dot top-0 left-1/2 w-96 h-96 bg-electric/5 blur-3xl" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <SectionTitle title="Notre Équipe" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { first: "Abdel Monim", last: "Mazgoura" },
              { first: "Ilyas", last: "Wakrim" },
              { first: "Jad", last: "Ghallali" },
              { first: "Ibrahim", last: "Challal" },
              { first: "Zakaria", last: "Belcadi" },
            ].map((member, i) => (
              <motion.div
                key={member.last}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-electric/40 transition-all glow-box hover:shadow-[0_0_30px_hsl(160_85%_45%/0.15)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-electric/20 text-electric font-display font-bold text-xl flex items-center justify-center mx-auto mb-3">
                  {member.first[0]}
                </div>
                <p className="font-display font-semibold text-sm">{member.first}</p>
                <p className="text-muted-foreground text-xs">{member.last}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-border py-12 px-4 relative overflow-hidden">
        <div className="glow-dot bottom-0 left-1/2 w-80 h-40 bg-primary/5 blur-3xl" />
        <div className="container mx-auto text-center relative z-10">
          <p className="font-display text-2xl font-bold text-gradient-mixed mb-3">12 Kool</p>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-4">
            Une unité de restauration mobile. Fraîche. Rapide. De confiance.
          </p>
          <p className="text-muted-foreground/60 text-xs">DEV 203 — Projet entrepreneurial</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
