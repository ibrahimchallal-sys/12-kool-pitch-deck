import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const charges = [
  { name: "Matières premières", value: 14560, color: "#f97316" },
  { name: "Salaires (CNSS incluse)", value: 3500, color: "#22d3a5" },
  { name: "Assurance & entretien", value: 2000, color: "#fb923c" },
  { name: "Transport & gaz", value: 1500, color: "#6ee7d0" },
  { name: "Autres charges", value: 1340, color: "#94a3b8" },
];

const projection = [
  { mois: "M1", ca: 18000, charges: 22900 },
  { mois: "M2", ca: 24000, charges: 22900 },
  { mois: "M3", ca: 29000, charges: 22900 },
  { mois: "M4", ca: 33000, charges: 22900 },
  { mois: "M5", ca: 36000, charges: 22900 },
  { mois: "M6", ca: 38000, charges: 22900 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 text-xs shadow-lg">
        <p className="font-semibold text-foreground mb-1">{label}</p>
        {payload.map((p: any) => (
          <p key={p.name} style={{ color: p.color }}>{p.name} : {p.value.toLocaleString()} DH</p>
        ))}
      </div>
    );
  }
  return null;
};

const PieTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 text-xs shadow-lg">
        <p className="font-semibold text-foreground">{payload[0].name}</p>
        <p style={{ color: payload[0].payload.color }}>{payload[0].value.toLocaleString()} DH</p>
      </div>
    );
  }
  return null;
};

const FinanceChart = () => (
  <div className="grid md:grid-cols-2 gap-6">
    {/* Pie Chart - Répartition des charges */}
    <div className="bg-card border border-border rounded-lg p-4 glow-box">
      <h4 className="font-display font-semibold text-sm mb-3 text-center">Répartition des charges mensuelles</h4>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={charges} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
            {charges.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<PieTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-1 gap-1 mt-2">
        {charges.map((c) => (
          <div key={c.name} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: c.color }} />
              <span className="text-muted-foreground">{c.name}</span>
            </div>
            <span className="text-foreground font-medium">{c.value.toLocaleString()} DH</span>
          </div>
        ))}
      </div>
    </div>

    {/* Bar Chart - Projection CA vs Charges */}
    <div className="bg-card border border-border rounded-lg p-4 glow-box">
      <h4 className="font-display font-semibold text-sm mb-3 text-center">Projection CA vs Charges (6 mois)</h4>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={projection} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="mois" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="ca" name="CA" fill="#f97316" radius={[4, 4, 0, 0]} />
          <Bar dataKey="charges" name="Charges" fill="#22d3a5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-4 mt-2">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="w-2.5 h-2.5 rounded-sm bg-primary" /> CA estimé
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="w-2.5 h-2.5 rounded-sm bg-electric" /> Charges totales
        </div>
      </div>
    </div>
  </div>
);

export default FinanceChart;
