export default function OutfitCard({ outfit }) {
  if (!outfit) return null;

  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))",
      borderRadius: "20px",
      padding: "32px",
      borderLeft: "8px solid #6366f1",
      marginBottom: "28px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
        <span style={{ fontSize: "40px", animation: "bounce 2s infinite" }}>✨</span>
        <h2 style={{ margin: "0", color: "#6366f1", fontSize: "28px", fontWeight: "700" }}>
          Outfit Kamu
        </h2>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "20px",
        marginBottom: "24px"
      }}>
        {outfit.items?.map((item, index) => (
          <div 
            key={item.id}
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9))",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease",
              cursor: "pointer",
              border: "2px solid rgba(99, 102, 241, 0.1)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) scale(1.05)";
              e.currentTarget.style.boxShadow = "0 25px 60px rgba(99, 102, 241, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.15)";
            }}
          >
            <img 
              src={item.image} 
              alt={`Item ${index + 1}`}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover"
              }}
            />
            <div style={{ padding: "16px", textAlign: "center" }}>
              <p style={{ 
                margin: "0",
                fontWeight: "700",
                color: "#6366f1",
                fontSize: "15px"
              }}>
                Item {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        padding: "20px",
        background: "rgba(99, 102, 241, 0.08)",
        borderRadius: "18px",
        border: "1px solid rgba(99, 102, 241, 0.15)",
        marginBottom: "20px"
      }}>
        <p style={{ margin: "0 0 10px 0", color: "#333", fontWeight: "700" }}>
          Skor Outfit: <span style={{ color: "#10b981" }}>{Math.round(outfit.score)}</span>
        </p>
        {outfit.breakdown && (
          <div style={{ display: "grid", gap: "8px" }}>
            {Object.entries(outfit.breakdown).map(([key, value]) => (
              <div key={key} style={{ display: "flex", justifyContent: "space-between", color: "#555", fontSize: "14px" }}>
                <span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                <span>{Math.round(value)}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
