import { motion } from "framer-motion";
import {
  ArrowDown, Users, ShieldCheck, MapPin, Utensils, Star, Wrench, Monitor,
  Briefcase, ShoppingCart, DollarSign, Megaphone, Wallet, TrendingUp,
  BarChart3, Clock, AlertTriangle, Target, Lightbulb, CheckCircle2,
  XCircle, Zap, Building2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import logo12Kool from "@/assets/logo-12kool.png";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import StatCard from "@/components/StatCard";
import FinanceChart from "@/components/FinanceChart";
import AdminTimeline from "@/components/AdminTimeline";
import DocumentTable from "@/components/DocumentTable";

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

        <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-gradient-mixed mb-6">
              12 Kool
            </h1>
            <p className="font-display text-xl md:text-2xl font-medium text-foreground/90 max-w-xl mb-4">
              La restauration rapide, fraîche et de confiance — en caravane mobile.
            </p>
            <p className="text-muted-foreground text-base md:text-lg max-w-lg mb-6">
              Un food truck digital : précommande en ligne, géolocalisation en temps réel, et score de confiance vérifié.
            </p>

            <div className="mb-8 space-y-3">
              <p className="text-sm text-electric font-display font-semibold tracking-widest uppercase">
                Filière : Développement Digital Full Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {["Abdel Monim Mazgoura", "Ilyas Wakrim", "Jad Ghallali", "Ibrahim Challal", "Zakaria Belcadi"].map((name) => (
                  <span key={name} className="text-xs font-medium text-muted-foreground bg-secondary/60 border border-border px-3 py-1.5 rounded-full">
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#probleme"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-all text-lg glow-box-intense hover:shadow-[0_0_80px_hsl(24_95%_53%/0.35)]"
            >
              Découvrir le projet
              <ArrowDown size={20} />
            </a>
          </motion.div>

          {/* Right — Logo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl border-2 border-dashed border-border bg-card/50 flex flex-col items-center justify-center gap-4 glow-box hover:border-primary/40 transition-colors">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-electric/20 flex items-center justify-center">
                <span className="font-display text-3xl font-bold text-gradient-mixed">12K</span>
              </div>
              <p className="text-muted-foreground text-sm font-medium">Logo à ajouter</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PROBLÉMATIQUE ═══ */}
      <AnimatedSection id="probleme" className="bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle title="La Problématique" subtitle="Un marché de la restauration rapide en manque de confiance" />
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<XCircle className="text-primary" size={32} />}
              title="Offre peu fiable"
              description="Les consommateurs peinent à trouver des repas rapides, de qualité et à prix raisonnable. L'information est dispersée, les standards d'hygiène opaques."
              delay={0}
              glowColor="primary"
            />
            <FeatureCard
              icon={<ShieldCheck className="text-electric" size={32} />}
              title="Manque de confiance"
              description="Aucun système de notation transparent. Le client ne sait pas ce qu'il mange, ni dans quelles conditions c'est préparé."
              delay={0.1}
              glowColor="electric"
            />
            <FeatureCard
              icon={<Lightbulb className="text-primary" size={32} />}
              title="Besoin d'innovation"
              description="La restauration mobile reste informelle. Le digital (précommande, géolocalisation, avis) est quasi absent de ce segment au Maroc."
              delay={0.2}
              glowColor="primary"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ SOLUTION ═══ */}
      <AnimatedSection id="solution">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle title="Notre Solution : 12 Kool" subtitle="Un food truck digital, mobile et transparent" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Utensils className="text-primary" size={32} />}
              title="Cuisine de qualité"
              description="Plats locaux et fast-food maison, préparés à la commande avec des ingrédients frais. Diversité : tajines rapides, sandwichs, jus naturels."
              delay={0}
              glowColor="primary"
            />
            <FeatureCard
              icon={<Monitor className="text-electric" size={32} />}
              title="Précommande digitale"
              description="Commandez en avance via notre plateforme web. Réduisez l'attente, gagnez du temps."
              delay={0.1}
              glowColor="electric"
            />
            <FeatureCard
              icon={<MapPin className="text-primary" size={32} />}
              title="Géolocalisation"
              description="Trouvez notre caravane en temps réel. Nous venons là où se trouvent nos clients."
              delay={0.2}
              glowColor="primary"
            />
            <FeatureCard
              icon={<Star className="text-electric" size={32} />}
              title="Score de confiance"
              description="Avis vérifiés, hygiène garantie, transparence totale sur chaque plat et service."
              delay={0.3}
              glowColor="electric"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ ÉTUDE DE MARCHÉ ═══ */}
      <AnimatedSection id="marche" className="bg-secondary/30 relative overflow-hidden">
        <div className="glow-dot top-0 right-0 w-80 h-80 bg-electric/5 blur-3xl" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <SectionTitle title="Étude de Marché" subtitle="Analyse critique de notre environnement concurrentiel" />
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card border border-border rounded-lg p-8 glow-box hover:border-electric/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-electric" size={24} />
                <h3 className="font-display text-xl font-semibold">Cible principale</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Étudiants, jeunes actifs, salariés en pause déjeuner, familles en sortie — en milieu urbain. Budget moyen : 20–50 DH par repas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-primary font-medium">Événementiel :</span> Marchés, festivals, terrains de sport — opportunités de vente à fort volume.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 glow-box hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-primary" size={24} />
                <h3 className="font-display text-xl font-semibold">Concurrence</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                {[
                  { name: "McDonald's / KFC", note: "Prix élevés, positionnement premium" },
                  { name: "Snacks locaux", note: "Prix bas, mais hygiène incertaine" },
                  { name: "Food trucks existants", note: "Peu digitalisés, pas de système de confiance" },
                ].map((c) => (
                  <li key={c.name} className="flex items-start gap-2">
                    <span className="text-primary mt-1">●</span>
                    <span><span className="text-foreground font-medium">{c.name}</span> — {c.note}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm text-foreground/80">
                  <AlertTriangle className="inline text-primary mr-1" size={14} />
                  <strong>Analyse critique :</strong> La concurrence est forte. Notre différenciation repose sur le digital et la transparence — pas sur le prix seul.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 glow-box">
            <h3 className="font-display text-lg font-semibold mb-4">Avantages concurrentiels</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Diversité des plats (locaux + maison)",
                "Prix accessibles : 15 à 60 DH",
                "Score de confiance & avis vérifiés",
                "Proximité grâce à la mobilité",
                "Précommande = zéro attente",
                "Valorisation du commerce local",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="text-electric shrink-0 mt-0.5" size={16} />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ BUSINESS MODEL ═══ */}
      <AnimatedSection id="business">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle title="Business Model" subtitle="Comment 12 Kool génère de la valeur" />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-8 glow-box hover:border-primary/40 transition-colors">
              <DollarSign className="text-primary mb-4" size={28} />
              <h3 className="font-display text-lg font-semibold mb-3">Sources de revenus</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary">●</span>Vente directe sur place</li>
                <li className="flex items-start gap-2"><span className="text-primary">●</span>Précommandes en ligne</li>
                <li className="flex items-start gap-2"><span className="text-primary">●</span>Événementiel (festivals, matchs)</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 glow-box hover:border-electric/40 transition-colors">
              <BarChart3 className="text-electric mb-4" size={28} />
              <h3 className="font-display text-lg font-semibold mb-3">Structure des coûts</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-electric">●</span>Matières premières (30–40% CA)</li>
                <li className="flex items-start gap-2"><span className="text-electric">●</span>Salaires (cuisinier + service)</li>
                <li className="flex items-start gap-2"><span className="text-electric">●</span>Charges fixes (assurance, gaz, internet)</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 glow-box hover:border-primary/40 transition-colors">
              <Zap className="text-primary mb-4" size={28} />
              <h3 className="font-display text-lg font-semibold mb-3">Proposition de valeur</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary">●</span>Rapidité + qualité + prix</li>
                <li className="flex items-start gap-2"><span className="text-primary">●</span>Transparence (score de confiance)</li>
                <li className="flex items-start gap-2"><span className="text-primary">●</span>Proximité mobile + digitale</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ PLAN FINANCIER ═══ */}
      <AnimatedSection id="finance" className="bg-secondary/30 relative overflow-hidden">
        <div className="glow-dot top-1/3 right-0 w-80 h-80 bg-electric/5 blur-3xl" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <SectionTitle title="Plan Financier" subtitle="Projections réalistes et analyse des risques" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard icon={<Wallet className="text-primary" size={28} />} label="Investissement initial" value="130–200K DH" delay={0} glowColor="primary" />
            <StatCard icon={<TrendingUp className="text-electric" size={28} />} label="CA mensuel estimé" value="~36 400 DH" delay={0.1} glowColor="electric" />
            <StatCard icon={<BarChart3 className="text-primary" size={28} />} label="Bénéfice mensuel" value="10–12K DH" delay={0.2} glowColor="primary" />
            <StatCard icon={<Clock className="text-electric" size={28} />} label="Retour sur invest." value="18–24 mois" delay={0.3} glowColor="electric" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card border border-border rounded-lg p-8 glow-box">
              <FinanceChart />
            </div>
            <div className="bg-card border border-border rounded-lg p-8 glow-box space-y-6">
              <h4 className="font-display font-semibold text-lg">Financement</h4>
              {[
                { source: "Apport personnel", montant: "80 000 DH", pct: 40 },
                { source: "Crédit bancaire", montant: "100 000 DH", pct: 50 },
                { source: "Aide familiale", montant: "20 000 DH", pct: 10 },
              ].map((f, i) => (
                <motion.div key={f.source} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground font-medium">{f.source}</span>
                    <span className="text-muted-foreground">{f.montant}</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-electric"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${f.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.15 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-primary/20 rounded-lg p-6 glow-box">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-primary shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-display font-semibold text-sm mb-2">Analyse critique des projections</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ces prévisions supposent <strong className="text-foreground">40 clients/jour en moyenne</strong> avec un panier moyen de 35 DH, sur 26 jours ouvrés. 
                  En réalité, les premiers mois seront en-dessous de ces chiffres (phase de lancement). Le seuil de rentabilité pourrait être atteint au mois 4–6. 
                  Le crédit bancaire génère des charges financières supplémentaires (~1 000 DH/mois) non incluses dans la marge nette affichée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ ANALYSE JURIDIQUE ═══ */}
      <AnimatedSection id="juridique">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle title="Analyse Juridique" subtitle="Création d'une SARL et démarches administratives" />
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card border border-border rounded-lg p-8 glow-box hover:border-electric/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-electric" size={24} />
                <h3 className="font-display text-lg font-semibold">Forme & Fiscalité</h3>
              </div>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li><span className="text-electric">●</span> Forme : SARL (plusieurs associés)</li>
                <li><span className="text-electric">●</span> Impôt sur les Sociétés (IS)</li>
                <li><span className="text-electric">●</span> 1 associé salarié gérant (salaire ≥ SMIG + CNSS)</li>
                <li><span className="text-electric">●</span> Autres associés : pas de salaires</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 glow-box hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-primary" size={24} />
                <h3 className="font-display text-lg font-semibold">Obligations légales</h3>
              </div>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li><span className="text-primary">●</span> Inscription au registre de commerce</li>
                <li><span className="text-primary">●</span> Identifiant fiscal (IS + TVA)</li>
                <li><span className="text-primary">●</span> Taxe professionnelle</li>
                <li><span className="text-primary">●</span> CNSS pour chaque salarié</li>
                <li><span className="text-primary">●</span> Autorisation ONSSA (hygiène alimentaire)</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-lg font-semibold mb-6">Parcours administratif</h3>
              <AdminTimeline />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-6">Récapitulatif des documents</h3>
              <div className="bg-card border border-border rounded-lg overflow-hidden glow-box">
                <DocumentTable />
              </div>
              <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm text-foreground/80">
                  <AlertTriangle className="inline text-primary mr-1" size={14} />
                  <strong>Note :</strong> La complexité administrative est un frein réel. L'autorisation communale pour le commerce ambulant est incertaine et variable selon la ville.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ RISQUES ET LIMITES ═══ */}
      <AnimatedSection id="risques" className="bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle title="Risques et Limites" subtitle="Une analyse honnête des défis à surmonter" />
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: <MapPin className="text-primary" size={28} />, title: "Emplacement incertain", text: "Obtenir un emplacement fixe ou une autorisation d'ambulant reste le plus grand défi. Les réglementations varient et sont parfois arbitraires.", glow: "primary" as const },
              { icon: <Users className="text-electric" size={28} />, title: "Concurrence intense", text: "Le marché du fast-food est saturé. Se différencier uniquement par le digital ne suffit pas — la qualité du produit reste décisive.", glow: "electric" as const },
              { icon: <TrendingUp className="text-primary" size={28} />, title: "Dépendance au flux client", text: "Le chiffre d'affaires dépend directement de l'emplacement et de la météo. Un mauvais positionnement = revenus insuffisants.", glow: "primary" as const },
              { icon: <ShieldCheck className="text-electric" size={28} />, title: "Contraintes sanitaires", text: "Les normes ONSSA sont strictes pour la restauration mobile. Le non-respect entraîne la fermeture. Investissement continu en formation requis.", glow: "electric" as const },
            ].map((item, i) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.text} delay={i * 0.1} glowColor={item.glow} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ STRATÉGIE DE RÉUSSITE ═══ */}
      <AnimatedSection id="strategie">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle title="Stratégie de Réussite" subtitle="Les leviers concrets pour maximiser nos chances" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={<MapPin className="text-electric" size={28} />} title="Emplacement stratégique" description="Cibler les zones à fort trafic : universités, boulevards commerciaux, événements sportifs. Tester plusieurs emplacements avant de se fixer." delay={0} glowColor="electric" />
            <FeatureCard icon={<Utensils className="text-primary" size={28} />} title="Qualité produit" description="Ingrédients frais, recettes testées, portions généreuses. La qualité fidélise mieux que n'importe quelle promo." delay={0.1} glowColor="primary" />
            <FeatureCard icon={<Megaphone className="text-electric" size={28} />} title="Marketing digital" description="Présence TikTok, Instagram, WhatsApp. Contenu vidéo de préparation. Bouche-à-oreille amplifié par le digital." delay={0.2} glowColor="electric" />
            <FeatureCard icon={<Target className="text-primary" size={28} />} title="Test pilote (MVP)" description="Lancer un test de 3 mois sur un emplacement. Mesurer les ventes, ajuster le menu, valider le modèle avant d'investir plus." delay={0.3} glowColor="primary" />
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ ÉQUIPE ═══ */}
      <AnimatedSection id="equipe" className="bg-secondary/30 relative overflow-hidden">
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

      {/* ═══ CONCLUSION ═══ */}
      <AnimatedSection id="conclusion">
        <div className="container mx-auto max-w-3xl text-center">
          <SectionTitle title="Conclusion" />
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 glow-box space-y-6">
            <p className="text-foreground/90 text-lg leading-relaxed">
              <strong>12 Kool</strong> est un projet <span className="text-electric font-medium">réalisable mais risqué</span>. Le concept répond à un vrai besoin — mais la réussite dépend de l'exécution : emplacement, qualité constante, et gestion rigoureuse des coûts.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Le potentiel de rentabilité existe (10–12K DH/mois après stabilisation), mais les premiers mois seront critiques. Un test pilote de 3 mois est indispensable avant tout investissement lourd.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {["Projet réalisable", "Risque maîtrisable", "Exécution décisive"].map((tag) => (
                <span key={tag} className="text-sm font-display font-semibold text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
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
          <p className="text-muted-foreground/60 text-xs">DEV 203 — Projet entrepreneurial · Développement Digital Full Stack</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
