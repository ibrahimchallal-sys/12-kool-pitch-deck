interface Props {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, badge, centered = false }: Props) => (
  <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
    {badge && (
      <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary font-display font-semibold text-xs px-3 py-1.5 rounded-full mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        {badge}
      </span>
    )}
    <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">{subtitle}</p>
    )}
    <div className={`w-12 h-1 bg-gradient-to-r from-primary to-orange-400 rounded-full mt-5 ${centered ? "mx-auto" : ""}`} />
  </div>
);

export default SectionTitle;
