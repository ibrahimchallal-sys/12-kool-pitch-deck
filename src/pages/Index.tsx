import { motion } from "framer-motion";
import {
  ArrowDown, Users, ShieldCheck, MapPin, Utensils, Star, Monitor,
  Briefcase, DollarSign, Megaphone, Wallet, TrendingUp,
  BarChart3, Clock, AlertTriangle, Target, Lightbulb, CheckCircle2,
  XCircle, Zap
} from "lucide-react";
import Lottie from "lottie-react";
import Navbar from "@/components/Navbar";
import logo12Kool from "@/assets/logo-12kool.png";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import StatCard from "@/components/StatCard";
import FinanceChart from "@/components/FinanceChart";
import AdminTimeline from "@/components/AdminTimeline";
import DocumentTable from "@/components/DocumentTable";
import foodTruckLottie from "@/lotties/Food truck with scooter.json";

/* ── reusable card wrapper ── */
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white border border-border rounded-2xl shadow-sm ${className}`}>{children}</div>
);

/* ── wave divider ── */
const Wave = ({ flip = false, fill = "hsl(220,12%,93%)" }: { flip?: boolean; fill?: string }) => (
  <div className={`pointer-events-none leading-none ${flip ? "rotate-180" : ""}`} style={{ lineHeight: 0 }}>
    <svg viewBox="0 0 1440 56" className="w-full" preserveAspectRatio="none" style={{ height: 56, display: "block" }}>
      <path d="M0,56 C480,0 960,56 1440,20 L1440,56 Z" fill={fill} />
    </svg>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-electric/6 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 w-[500px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(hsl(220,20%,12%) 1px, transparent 1px), linear-gradient(90deg, hsl(220,20%,12%) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center px-4 md:px-8 lg:px-12 py-24 md:py-32">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary font-display font-semibold text-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Projet entrepreneurial · DEV 203
              </span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <h1 className="font-display font-extrabold tracking-tighter leading-none mb-4">
                <span className="block text-6xl md:text-7xl lg:text-8xl text-foreground">Le Food Truck</span>
                <span className="block text-6xl md:text-7xl lg:text-8xl text-gradient-mixed">Digital.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Précommande en ligne, géolocalisation en temps réel et score de confiance vérifié —
                <span className="text-foreground font-medium"> 12 Kool</span> réinvente la restauration mobile au Maroc.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-3 gap-4">
              {[
                { value: "15–60", unit: "DH", label: "Prix par repas" },
                { value: "18", unit: "mois", label: "Retour invest." },
                { value: "4", unit: "assoc.", label: "Équipe tech" },
              ].map((s) => (
                <div key={s.label} className="bg-white/80 backdrop-blur border border-border rounded-xl p-4 shadow-sm">
                  <p className="font-display font-extrabold text-2xl text-foreground leading-none">
                    {s.value}<span className="text-primary text-base ml-1">{s.unit}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-5">
              <div className="flex flex-wrap gap-3">
                <a href="#probleme"
                  className="inline-flex items-center gap-2 bg-primary text-white font-display font-semibold px-7 py-3.5 rounded-xl shadow-[0_4px_24px_hsl(24_95%_50%/0.35)] hover:shadow-[0_6px_32px_hsl(24_95%_50%/0.5)] hover:-translate-y-0.5 transition-all text-base">
                  Découvrir le projet <ArrowDown size={17} />
                </a>
                <a href="#finance"
                  className="inline-flex items-center gap-2 bg-white border border-border text-foreground font-display font-semibold px-7 py-3.5 rounded-xl hover:border-primary/40 hover:-translate-y-0.5 transition-all text-base shadow-sm">
                  Plan financier
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-display font-semibold tracking-widest uppercase text-electric">
                  Développement Digital Full Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {["A. Mazgoura", "I. Wakrim", "J. Ghallali", "I. Challal"].map((name) => (
                    <span key={name} className="text-xs text-muted-foreground bg-secondary border border-border px-3 py-1 rounded-full">{name}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-xl bg-gradient-to-br from-orange-50 to-emerald-50/60 border border-border/60 rounded-3xl shadow-[0_20px_80px_hsl(24_95%_50%/0.12)] p-6 flex flex-col items-center gap-2">
              <img src={logo12Kool} alt="12 Kool" className="w-52 md:w-64 drop-shadow-md" />
              <Lottie animationData={foodTruckLottie} loop style={{ width: '100%' }} />
              <div className="absolute -top-4 -right-4 bg-white border border-border shadow-md rounded-full px-4 py-2 flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <span className="text-xs font-display font-semibold text-foreground">En route — Casablanca</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border border-border shadow-md rounded-xl px-4 py-2.5 flex items-center gap-2">
                <Star size={14} className="text-yellow-500 fill-yellow-400" />
                <span className="text-xs font-display font-semibold text-foreground">Score de confiance</span>
                <span className="text-xs font-bold text-primary">4.9/5</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 56" className="w-full" preserveAspectRatio="none" style={{ height: 56, display: "block" }}>
            <path d="M0,56 C480,0 960,56 1440,20 L1440,56 Z" fill="hsl(220,12%,93%)" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROBLÉMATIQUE
      ══════════════════════════════════════════ */}
      <AnimatedSection id="probleme" className="bg-secondary/40" blob="left">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionTitle badge="Le constat" title="La Problématique" subtitle="Un marché de la restauration rapide en manque de confiance et de digitalisation." />
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon={<XCircle className="text-primary" size={24} />} title="Offre peu fiable" description="Les consommateurs peinent à trouver des repas rapides, de qualité et à prix raisonnable. L'information est dispersée, les standards d'hygiène opaques." delay={0} glowColor="primary" />
            <FeatureCard icon={<ShieldCheck className="text-electric" size={24} />} title="Manque de confiance" description="Aucun système de notation transparent. Le client ne sait pas ce qu'il mange, ni dans quelles conditions c'est préparé." delay={0.1} glowColor="electric" />
            <FeatureCard icon={<Lightbulb className="text-primary" size={24} />} title="Besoin d'innovation" description="La restauration mobile reste informelle. Le digital (précommande, géolocalisation, avis) est quasi absent de ce segment au Maroc." delay={0.2} glowColor="primary" />
          </div>
        </div>
      </AnimatedSection>

      <Wave fill="hsl(0,0%,98%)" />

      {/* ══════════════════════════════════════════
          SOLUTION
      ══════════════════════════════════════════ */}
      <AnimatedSection id="solution" blob="right">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionTitle badge="Notre réponse" title="Notre Solution : 12 Kool" subtitle="Un food truck digital, mobile et transparent — pensé pour la confiance." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={<Utensils className="text-primary" size={24} />} title="Cuisine de qualité" description="Plats locaux et fast-food maison, préparés à la commande avec des ingrédients frais. Tajines rapides, sandwichs, jus naturels." delay={0} glowColor="primary" />
            <FeatureCard icon={<Monitor className="text-electric" size={24} />} title="Précommande digitale" description="Commandez en avance via notre plateforme web. Réduisez l'attente, gagnez du temps." delay={0.1} glowColor="electric" />
            <FeatureCard icon={<MapPin className="text-primary" size={24} />} title="Géolocalisation" description="Trouvez notre caravane en temps réel. Nous venons là où se trouvent nos clients." delay={0.2} glowColor="primary" />
            <FeatureCard icon={<Star className="text-electric" size={24} />} title="Score de confiance" description="Avis vérifiés, hygiène garantie, transparence totale sur chaque plat et service." delay={0.3} glowColor="electric" />
          </div>
        </div>
      </AnimatedSection>

      <Wave fill="hsl(220,12%,93%)" />

      {/* ══════════════════════════════════════════
          ÉTUDE DE MARCHÉ
      ══════════════════════════════════════════ */}
      <AnimatedSection id="marche" className="bg-secondary/40" blob="both">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionTitle badge="Analyse" title="Étude de Marché" subtitle="Analyse critique de notre environnement concurrentiel." />

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-8 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <Users className="text-electric" size={20} />
                </div>
                <h3 className="font-display text-lg font-bold">Cible principale</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                Étudiants, jeunes actifs, salariés en pause déjeuner, familles en sortie — en milieu urbain. Budget moyen : <span className="text-foreground font-medium">20–50 DH</span> par repas.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                <span className="text-primary font-medium">Événementiel :</span> Marchés, festivals, terrains de sport — opportunités de vente à fort volume.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                  <Target className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-lg font-bold">Concurrence</h3>
              </div>
              <ul className="space-y-3 mb-4">
                {[
                  { name: "McDonald's / KFC", note: "Prix élevés, positionnement premium" },
                  { name: "Snacks locaux", note: "Prix bas, mais hygiène incertaine" },
                  { name: "Food trucks existants", note: "Peu digitalisés, pas de système de confiance" },
                ].map((c) => (
                  <li key={c.name} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5 shrink-0">●</span>
                    <span className="text-muted-foreground"><span className="text-foreground font-medium">{c.name}</span> — {c.note}</span>
                  </li>
                ))}
              </ul>
              <div className="p-3 bg-orange-50 border border-orange-100 rounded-xl">
                <p className="text-xs text-foreground/80 flex gap-2">
                  <AlertTriangle className="text-primary shrink-0 mt-0.5" size={13} />
                  <span><strong>Analyse critique :</strong> Notre différenciation repose sur le digital et la transparence — pas sur le prix seul.</span>
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-8 mb-6">
            <h3 className="font-display text-lg font-bold mb-5">Avantages concurrentiels</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Diversité des plats (locaux + maison)",
                "Prix accessibles : 15 à 60 DH",
                "Score de confiance & avis vérifiés",
                "Proximité grâce à la mobilité",
                "Précommande = zéro attente",
                "Valorisation du commerce local",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 bg-secondary/50 rounded-xl px-4 py-3">
                  <CheckCircle2 className="text-electric shrink-0" size={15} />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="font-display text-lg font-bold mb-5">Analyse 4P — Mix Marketing</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  label: "Produit",
                  color: "bg-emerald-50 border-emerald-100",
                  textColor: "text-electric",
                  items: ["Sandwichs, wraps, burgers maison", "Ingrédients frais, recettes testées", "Menu varié : local + international"],
                },
                {
                  label: "Prix",
                  color: "bg-orange-50 border-orange-100",
                  textColor: "text-primary",
                  items: ["15 à 60 DH — accessible à tous", "Rapport qualité/prix supérieur", "Promotions & fidélité via l'app"],
                },
                {
                  label: "Place",
                  color: "bg-blue-50 border-blue-100",
                  textColor: "text-blue-500",
                  items: ["Food truck mobile — zones à fort trafic", "Universités, bureaux, événements", "Précommande & livraison locale"],
                },
                {
                  label: "Promotion",
                  color: "bg-purple-50 border-purple-100",
                  textColor: "text-purple-500",
                  items: ["TikTok, Instagram, WhatsApp", "Contenu vidéo de préparation", "Bouche-à-oreille & avis vérifiés"],
                },
              ].map((p) => (
                <div key={p.label} className={`rounded-xl border p-5 ${p.color}`}>
                  <p className={`font-display font-bold text-base mb-3 ${p.textColor}`}>{p.label}</p>
                  <ul className="space-y-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className={`mt-1 shrink-0 ${p.textColor}`}>●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </AnimatedSection>

      <Wave fill="hsl(0,0%,98%)" />

      {/* ══════════════════════════════════════════
          BUSINESS MODEL
      ══════════════════════════════════════════ */}
      <AnimatedSection id="business" blob="right">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionTitle badge="Modèle économique" title="Business Model" subtitle="Comment 12 Kool génère de la valeur durablement." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <DollarSign className="text-primary" size={22} />,
                iconBg: "bg-orange-50 border-orange-100",
                title: "Sources de revenus",
                items: ["Vente directe sur place", "Précommandes en ligne", "Événementiel (festivals, matchs)"],
                color: "text-primary",
              },
              {
                icon: <BarChart3 className="text-electric" size={22} />,
                iconBg: "bg-emerald-50 border-emerald-100",
                title: "Structure des coûts",
                items: ["Matières premières (30–40% CA)", "Salaires (cuisinier + service)", "Charges fixes (assurance, gaz, internet)"],
                color: "text-electric",
              },
              {
                icon: <Zap className="text-primary" size={22} />,
                iconBg: "bg-orange-50 border-orange-100",
                title: "Proposition de valeur",
                items: ["Rapidité + qualité + prix", "Transparence (score de confiance)", "Proximité mobile + digitale"],
                color: "text-primary",
              },
            ].map((block, i) => (
              <motion.div key={block.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              >
                <Card className="p-7 h-full hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${block.iconBg}`}>
                    {block.icon}
                  </div>
                  <h3 className="font-display text-base font-bold mb-4">{block.title}</h3>
                  <ul className="space-y-2.5">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className={`${block.color} shrink-0 mt-0.5`}>●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <Wave fill="hsl(220,12%,93%)" />

      {/* ══════════════════════════════════════════
          PLAN FINANCIER
      ══════════════════════════════════════════ */}
      <AnimatedSection id="finance" className="bg-secondary/40" blob="left">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionTitle badge="Chiffres" title="Plan Financier" subtitle="Projections réalistes et analyse des risques." />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard icon={<Wallet className="text-primary" size={20} />} label="Investissement initial" value="208K DH" delay={0} glowColor="primary" />
            <StatCard icon={<TrendingUp className="text-electric" size={20} />} label="CA mensuel estimé" value="30–38K DH" delay={0.1} glowColor="electric" />
            <StatCard icon={<BarChart3 className="text-primary" size={20} />} label="Bénéfice mensuel" value="10–12K DH" delay={0.2} glowColor="primary" />
            <StatCard icon={<Clock className="text-electric" size={20} />} label="Retour sur invest." value="18 mois" delay={0.3} glowColor="electric" />
          </div>

          <Card className="p-6 mb-6">
            <FinanceChart />
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4">
              <h4 className="font-display font-bold text-base">Structure du financement</h4>
              {[
                { source: "Apport personnel", montant: "88 000 DH", pct: 40, color: "bg-primary" },
                { source: "Crédit bancaire", montant: "100 000 DH", pct: 50, color: "bg-electric" },
                { source: "Aide familiale", montant: "20 000 DH", pct: 10, color: "bg-muted-foreground/40" },
              ].map((f, i) => (
                <motion.div key={f.source} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-foreground">{f.source}</span>
                    <span className="text-muted-foreground">{f.montant} <span className="font-bold text-foreground">({f.pct}%)</span></span>
                  </div>
                  <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div className={`h-full rounded-full ${f.color}`}
                      initial={{ width: 0 }} whileInView={{ width: `${f.pct}%` }} viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.15 }} />
                  </div>
                </motion.div>
              ))}
            </Card>

            <Card className="p-6 border-orange-100 bg-orange-50/40">
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                  <AlertTriangle className="text-primary" size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm mb-2">Analyse critique des projections</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ces prévisions supposent <strong className="text-foreground">40 clients/jour</strong> avec un panier moyen de 35 DH, sur 26 jours ouvrés.
                    Les premiers mois seront en-dessous (phase de lancement). Seuil de rentabilité : <strong className="text-foreground">mois 4–6</strong>.
                    Crédit bancaire : ~1 000 DH/mois de charges non incluses dans la marge nette.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      <Wave fill="hsl(0,0%,98%)" />

      {/* ══════════════════════════════════════════
          ANALYSE JURIDIQUE
      ══════════════════════════════════════════ */}
      <AnimatedSection id="juridique" blob="right">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionTitle badge="Administratif" title="Analyse Juridique" subtitle="Création d'une SARL et démarches administratives au Maroc." />

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-8 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <Briefcase className="text-electric" size={20} />
                </div>
                <h3 className="font-display text-lg font-bold">Forme & Fiscalité</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Forme : SARL (plusieurs associés)",
                  "Impôt sur les Sociétés (IS)",
                  "1 associé salarié gérant (salaire ≥ SMIG + CNSS)",
                  "Autres associés : pas de salaires",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-electric shrink-0">●</span>{item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                  <ShieldCheck className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-lg font-bold">Obligations légales</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Inscription au registre de commerce",
                  "Identifiant fiscal (IS + TVA)",
                  "Taxe professionnelle",
                  "CNSS pour chaque salarié",
                  "Autorisation ONSSA (hygiène alimentaire)",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary shrink-0">●</span>{item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-8 mb-6">
            <h3 className="font-display text-lg font-bold mb-6">Parcours administratif</h3>
            <AdminTimeline />
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <div className="px-6 pt-6 pb-2">
                <h3 className="font-display text-base font-bold">Récapitulatif des documents</h3>
              </div>
              <DocumentTable />
            </Card>

            <Card className="p-6 border-orange-100 bg-orange-50/40 self-start">
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                  <AlertTriangle className="text-primary" size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm mb-1.5">Note importante</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    La complexité administrative est un frein réel. L'autorisation communale pour le commerce ambulant est incertaine et variable selon la ville.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      <Wave fill="hsl(220,12%,93%)" />

      {/* ══════════════════════════════════════════
          RISQUES ET LIMITES
      ══════════════════════════════════════════ */}
      <AnimatedSection id="risques" className="bg-secondary/40" blob="left">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionTitle badge="Honnêteté" title="Risques et Limites" subtitle="Une analyse franche des défis à surmonter pour réussir." />
          <div className="grid sm:grid-cols-2 gap-6">
            <FeatureCard icon={<MapPin className="text-primary" size={24} />} title="Emplacement incertain" description="Obtenir un emplacement fixe ou une autorisation d'ambulant reste le plus grand défi. Les réglementations varient et sont parfois arbitraires." delay={0} glowColor="primary" />
            <FeatureCard icon={<Users className="text-electric" size={24} />} title="Concurrence intense" description="Le marché du fast-food est saturé. Se différencier uniquement par le digital ne suffit pas — la qualité du produit reste décisive." delay={0.1} glowColor="electric" />
            <FeatureCard icon={<TrendingUp className="text-primary" size={24} />} title="Dépendance au flux client" description="Le chiffre d'affaires dépend directement de l'emplacement et de la météo. Un mauvais positionnement = revenus insuffisants." delay={0.2} glowColor="primary" />
            <FeatureCard icon={<ShieldCheck className="text-electric" size={24} />} title="Contraintes sanitaires" description="Les normes ONSSA sont strictes pour la restauration mobile. Le non-respect entraîne la fermeture. Investissement continu en formation requis." delay={0.3} glowColor="electric" />
          </div>
        </div>
      </AnimatedSection>

      <Wave fill="hsl(0,0%,98%)" />

      {/* ══════════════════════════════════════════
          STRATÉGIE DE RÉUSSITE
      ══════════════════════════════════════════ */}
      <AnimatedSection id="strategie" blob="right">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionTitle badge="Plan d'action" title="Stratégie de Réussite" subtitle="Les leviers concrets pour maximiser nos chances de succès." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={<MapPin className="text-electric" size={24} />} title="Emplacement stratégique" description="Cibler les zones à fort trafic : universités, boulevards commerciaux, événements sportifs. Tester plusieurs emplacements avant de se fixer." delay={0} glowColor="electric" />
            <FeatureCard icon={<Utensils className="text-primary" size={24} />} title="Qualité produit" description="Ingrédients frais, recettes testées, portions généreuses. La qualité fidélise mieux que n'importe quelle promo." delay={0.1} glowColor="primary" />
            <FeatureCard icon={<Megaphone className="text-electric" size={24} />} title="Marketing digital" description="Présence TikTok, Instagram, WhatsApp. Contenu vidéo de préparation. Bouche-à-oreille amplifié par le digital." delay={0.2} glowColor="electric" />
            <FeatureCard icon={<Target className="text-primary" size={24} />} title="Test pilote (MVP)" description="Lancer un test de 3 mois sur un emplacement. Mesurer les ventes, ajuster le menu, valider le modèle avant d'investir plus." delay={0.3} glowColor="primary" />
          </div>
        </div>
      </AnimatedSection>

      <Wave fill="hsl(220,12%,93%)" />

       <AnimatedSection id="conclusion" blob="both">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
          <SectionTitle badge="En résumé" title="Conclusion" centered />
          <Card className="p-10 md:p-14 max-w-3xl mx-auto">
            <p className="text-foreground/90 text-lg leading-relaxed mb-4">
              <strong>12 Kool</strong> représente une <span className="text-primary font-semibold">opportunité de marché unique</span> au Maroc : combiner restauration mobile de qualité et innovation digitale. Notre approche différenciante — précommande en ligne, géolocalisation et transparence — positionne le projet comme un acteur moderne de la restauration rapide.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Avec un investissement initial de 208K DH et un retour sur investissement prévu à 18 mois, le modèle économique est solide. Le test pilote de 3 mois permettra de valider les hypothèses et d'optimiser l'opération avant déploiement. La demande pour une restauration rapide fiable et digitale est réelle — 12 Kool est prêt à y répondre.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Modèle économique solide", color: "bg-orange-50 border-orange-200 text-primary" },
                { label: "Marché porteur", color: "bg-emerald-50 border-emerald-200 text-electric" },
                { label: "Innovation digitale", color: "bg-secondary border-border text-foreground" },
              ].map((tag) => (
                <span key={tag.label} className={`text-sm font-display font-bold border px-5 py-2.5 rounded-xl ${tag.color}`}>
                  {tag.label}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════
          ÉQUIPE
      ══════════════════════════════════════════ */}
      <AnimatedSection id="equipe" className="bg-secondary/40" blob="both">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionTitle badge="Les personnes" title="Notre Équipe" centered />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { first: "Abdel Monim", last: "Mazgoura", role: "Dev Full Stack" },
              { first: "Ilyas", last: "Wakrim", role: "Dev Full Stack" },
              { first: "Jad", last: "Ghallali", role: "Dev Full Stack" },
              { first: "Ibrahim", last: "Challal", role: "Dev Full Stack" },
            ].map((member, i) => (
              <motion.div key={member.last}
                className="bg-white border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-emerald-100 font-display font-extrabold text-xl flex items-center justify-center mx-auto mb-3 text-primary">
                  {member.first[0]}
                </div>
                <p className="font-display font-bold text-sm text-foreground">{member.first}</p>
                <p className="text-muted-foreground text-xs">{member.last}</p>
                <span className="mt-2 inline-block text-[10px] bg-secondary border border-border px-2 py-0.5 rounded-full text-muted-foreground">{member.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <Wave fill="hsl(0,0%,98%)" />

      {/* ══════════════════════════════════════════
          CONCLUSION
      ══════════════════════════════════════════ */}
     

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="bg-foreground text-background py-14 px-4 relative overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="container mx-auto text-center relative z-10 px-4 md:px-8 lg:px-12">
          <p className="font-display text-3xl font-extrabold tracking-tight text-gradient-mixed mb-3">12 Kool</p>
          <p className="text-background/60 text-sm max-w-md mx-auto mb-6">
            Une unité de restauration mobile. Fraîche. Rapide. De confiance.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-background/40 mb-6">
            {["Problème", "Solution", "Marché", "Business", "Finance", "Juridique", "Équipe"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-background/70 transition-colors">{l}</a>
            ))}
          </div>
          <p className="text-background/30 text-xs">DEV 203 — Projet entrepreneurial · Développement Digital Full Stack</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
