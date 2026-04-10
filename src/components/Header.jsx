export default function Header({ itemCount, savedCount }) {
  return (
    <header style={{
      background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
      color: "white",
      backdropFilter: "blur(20px)",
      padding: "18px 24px",
      borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: "0 20px 50px rgba(79, 70, 229, 0.18)"
    }}>
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div>
          <h1 style={{
            margin: "0",
            fontSize: "26px",
            fontWeight: "900",
            letterSpacing: "-0.03em"
          }}>
            👗 Digital Closet
          </h1>
          <p style={{ margin: "6px 0 0 0", fontSize: "13px", color: "rgba(255,255,255,0.8)" }}>
            Manajemen wardrobe yang smart
          </p>
        </div>

        <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
          <div style={{
            background: "rgba(255, 255, 255, 0.14)",
            padding: "10px 16px",
            borderRadius: "14px",
            fontSize: "13px",
            fontWeight: "700",
            color: "white",
            backdropFilter: "blur(10px)"
          }}>
            📦 {itemCount}
          </div>
          <div style={{
            background: "rgba(255, 255, 255, 0.14)",
            padding: "10px 16px",
            borderRadius: "14px",
            fontSize: "13px",
            fontWeight: "700",
            color: "white",
            backdropFilter: "blur(10px)"
          }}>
            💾 {savedCount}
          </div>
        </div>
      </div>
    </header>
  );
}
