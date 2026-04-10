export default function Stats({ items, saved }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
      gap: "16px",
      marginBottom: "28px"
    }}>
      <StatCard icon="📦" label="Total Item" value={items.length} color="#6366f1" />
      <StatCard icon="💾" label="Saved" value={saved.length} color="#8b5cf6" />
    </div>
  );
}

function StatCard({ icon, label, value, color }) {
  return (
    <div style={{
      background: `linear-gradient(135deg, ${color}15, ${color}08)`,
      border: `2px solid ${color}30`,
      borderRadius: "14px",
      padding: "16px",
      textAlign: "center",
      backdropFilter: "blur(10px)"
    }}>
      <p style={{ fontSize: "28px", margin: "0 0 8px 0" }}>{icon}</p>
      <p style={{ margin: "0 0 4px 0", fontSize: "28px", fontWeight: "800", color: color }}>
        {value}
      </p>
      <p style={{ margin: "0", fontSize: "12px", color: "#999", fontWeight: "600" }}>
        {label}
      </p>
    </div>
  );
}
