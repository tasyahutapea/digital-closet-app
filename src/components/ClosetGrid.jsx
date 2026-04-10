export default function ClosetGrid({ items, onDelete }) {
  return (
    <div>
      <h2 style={{ margin: "0 0 16px 0", color: "#333", fontSize: "26px" }}>👗 Koleksi Pakaian Kamu</h2>
      
      {items.length === 0 ? (
        <div style={{ 
          textAlign: "center", 
          padding: "60px 32px",
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08))",
          borderRadius: "20px",
          color: "#999",
          border: "2px dashed rgba(99, 102, 241, 0.2)",
          backdropFilter: "blur(10px)"
        }}>
          <p style={{ fontSize: "64px", margin: "0", animation: "float 3s ease-in-out infinite" }}>📦</p>
          <p style={{ margin: "20px 0 0 0", fontSize: "18px", fontWeight: "600", color: "#999" }}>
            Tidak ada item dalam kategori ini
          </p>
        </div>
      ) : (
        <>
          <p style={{ color: "#6366f1", fontSize: "15px", margin: "0 0 24px 0", fontWeight: "700" }}>
            ✨ Total: {items.length} item
          </p>
          <div style={grid}>
            {items.map((item) => (
              <div 
                key={item.id} 
                style={card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 20px 50px rgba(99, 102, 241, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.08)";
                }}
              >
                <img 
                  src={item.image} 
                  style={{ width: "100%", borderRadius: "14px", marginBottom: "12px", height: "170px", objectFit: "cover" }} 
                  alt={item.category} 
                />
                <p style={{ margin: "0 0 8px 0", fontWeight: "700", color: "#6366f1", textTransform: "capitalize", fontSize: "14px" }}>
                  {getCategoryEmoji(item.category)} {item.category}
                </p>
                <button
                  onClick={() => {
                    if (window.confirm("Hapus item ini?")) {
                      onDelete(item.id);
                    }
                  }}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(239, 68, 68, 0.2)"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#dc2626";
                    e.target.style.boxShadow = "0 6px 16px rgba(239, 68, 68, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "#ef4444";
                    e.target.style.boxShadow = "0 4px 12px rgba(239, 68, 68, 0.2)";
                  }}
                >
                  🗑️ Hapus
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

function getCategoryEmoji(category) {
  const emojis = {
    atasan: "👔",
    bawahan: "👖",
    sepatu: "👟"
  };
  return emojis[category] || "📦";
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
  gap: "18px"
};

const card = {
  padding: "14px",
  background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9))",
  borderRadius: "16px",
  border: "2px solid rgba(99, 102, 241, 0.1)",
  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
  cursor: "pointer",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
  backdropFilter: "blur(10px)"
};
