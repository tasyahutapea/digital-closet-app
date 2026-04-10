export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(135deg, #4f46e5 0%, #5b21b6 45%, #7c3aed 100%)",
      padding: "36px 24px",
      marginTop: "40px",
      position: "relative",
      overflow: "hidden",
      borderRadius: "32px",
      boxShadow: "0 40px 120px rgba(79, 70, 229, 0.18)"
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.12), transparent 24%), radial-gradient(circle at 85% 10%, rgba(255,255,255,0.08), transparent 18%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div style={{
        maxWidth: "1040px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
        display: "grid",
        gridTemplateColumns: "1.2fr 0.8fr",
        gap: "32px",
        alignItems: "flex-start"
      }}>
        <div style={{
          color: "#ffffff"
        }}>
          <p style={{ margin: 0, fontSize: "14px", letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85 }}>
            Digital Closet
          </p>
          <h3 style={{ margin: "16px 0 16px 0", fontSize: "36px", lineHeight: "1.05", fontWeight: 900 }}>
            Atur pakaianmu dengan gaya yang lebih simpel.
          </h3>
          <p style={{ margin: 0, maxWidth: "520px", color: "rgba(255,255,255,0.8)", lineHeight: "1.75", fontSize: "15px" }}>
            Upload, generate, dan simpan outfit favorit tanpa ribet. Semua dalam tampilan yang bersih dan mudah dipakai.
          </p>
        </div>

        <div style={{
          background: "rgba(255, 255, 255, 0.12)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          borderRadius: "24px",
          padding: "24px 28px",
          backdropFilter: "blur(18px)"
        }}>
          <p style={{ margin: 0, textTransform: "uppercase", letterSpacing: "0.18em", fontSize: "12px", color: "rgba(255,255,255,0.75)", fontWeight: 700 }}>
            Fitur
          </p>
          <ul style={{ margin: "20px 0 0 0", padding: 0, listStyle: "none", display: "grid", gap: "16px" }}>
            {[
              { icon: "📤", label: "Upload Pakaian" },
              { icon: "🎲", label: "Generate Outfit" },
              { icon: "💾", label: "Simpan Favorit" }
            ].map((item) => (
              <li key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <span style={{ fontSize: "20px", lineHeight: 1 }}>{item.icon}</span>
                <div>
                  <p style={{ margin: 0, fontWeight: 700, color: "#ffffff", fontSize: "15px" }}>{item.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
