const docs = [
  { doc: "Certificat négatif", org: "OMPIC", delai: "24–48h" },
  { doc: "Statuts SARL", org: "Notaire / Avocat", delai: "3–5 jours" },
  { doc: "Attestation de dépôt du capital", org: "Banque", delai: "1–2 jours" },
  { doc: "Identifiant fiscal (IF)", org: "DGI", delai: "1–3 jours" },
  { doc: "Registre de commerce (RC)", org: "Tribunal de Commerce", delai: "3–7 jours" },
  { doc: "Affiliation CNSS", org: "CNSS", delai: "5–10 jours" },
  { doc: "Autorisation d'exercice", org: "Commune / Préfecture", delai: "Variable" },
  { doc: "Autorisation sanitaire", org: "ONSSA", delai: "Variable" },
];

const DocumentTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-border text-left">
          <th className="py-3 px-4 font-display font-semibold text-foreground">Document</th>
          <th className="py-3 px-4 font-display font-semibold text-foreground">Organisme</th>
          <th className="py-3 px-4 font-display font-semibold text-foreground">Délai estimé</th>
        </tr>
      </thead>
      <tbody>
        {docs.map((d, i) => (
          <tr key={d.doc} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-secondary/20" : ""}`}>
            <td className="py-3 px-4 text-foreground/90">{d.doc}</td>
            <td className="py-3 px-4 text-electric">{d.org}</td>
            <td className="py-3 px-4 text-muted-foreground">{d.delai}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DocumentTable;
