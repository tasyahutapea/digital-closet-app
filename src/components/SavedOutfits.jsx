import { useState } from "react";

export default function SavedOutfits({ saved, setSaved, outfit, onSuccess }) {
  const [showNameModal, setShowNameModal] = useState(false);
  const [outfitName, setOutfitName] = useState("");

  const handleSave = () => {
    if (!outfit) return alert("Generate dulu");
    setShowNameModal(true);
  };

  const confirmSave = () => {
    if (!outfitName.trim()) {
      alert("Berikan nama untuk outfit ini!");
      return;
    }

    const newOutfit = {
      ...outfit,
      name: outfitName,
      date: new Date().toLocaleDateString("id-ID"),
      rating: 0
    };

    setSaved((prev) => [...prev, newOutfit]);
    setOutfitName("");
    setShowNameModal(false);
    onSuccess?.();
  };

  const handleDelete = (index) => {
    if (window.confirm("Hapus outfit ini?")) {
      setSaved((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleRating = (index, rating) => {
    setSaved((prev) => {
      const updated = [...prev];
      updated[index].rating = rating;
      return updated;
    });
  };

  return (
    <div>
      <h2 style={{ margin: "0 0 16px 0", color: "#333", fontSize: "26px" }}>💾 Saved Looks</h2>
      <p style={{ color: "#666", fontSize: "15px", margin: "0 0 20px 0", fontWeight: "500" }}>
        {saved.length} outfit{saved.length !== 1 ? "s" : ""} tersimpan
      </p>

      <button 
        onClick={handleSave} 
        style={{ 
          width: "100%", 
          marginBottom: "24px",
          background: "linear-gradient(135deg, #10b981, #34d399)",
          fontSize: "16px",
          padding: "16px"
        }}
      >
        💾 Simpan Outfit Sekarang
      </button>

      {/* SAVE MODAL */}
      {showNameModal && (
        <div style={{
          position: "fixed",
          inset: "0",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        }}>
          <div style={{
            background: "white",
            borderRadius: "16px",
            padding: "28px",
            maxWidth: "400px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)"
          }}>
            <h3 style={{ margin: "0 0 16px 0", color: "#333" }}>Beri Nama Outfit Kamu</h3>
            <input
              type="text"
              placeholder="Contoh: Casual Hangout Friday..."
              value={outfitName}
              onChange={(e) => setOutfitName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") confirmSave();
                if (e.key === "Escape") setShowNameModal(false);
              }}
              autoFocus
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "2px solid rgba(99, 102, 241, 0.2)",
                borderRadius: "12px",
                fontSize: "14px",
                marginBottom: "16px",
                boxSizing: "border-box"
              }}
            />
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={() => setShowNameModal(false)}
                style={{
                  flex: 1,
                  padding: "12px",
                  background: "#f3f4f6",
                  color: "#333",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "600"
                }}
              >
                Batal
              </button>
              <button
                onClick={confirmSave}
                style={{
                  flex: 1,
                  padding: "12px",
                  background: "linear-gradient(135deg, #10b981, #34d399)",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "600"
                }}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {saved.length === 0 ? (
        <div style={{ 
          textAlign: "center", 
          padding: "40px 20px",
          background: "linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(52, 211, 153, 0.08))",
          borderRadius: "16px",
          color: "#999",
          border: "2px dashed rgba(16, 185, 129, 0.3)",
          backdropFilter: "blur(10px)"
        }}>
          <p style={{ fontSize: "50px", margin: "0", animation: "float 3s ease-in-out infinite" }}>✨</p>
          <p style={{ margin: "12px 0 0 0", fontSize: "15px" }}>Belum ada outfit tersimpan</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {saved.map((out, i) => (
            <div 
              key={i} 
              style={{ 
                padding: "18px",
                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(52, 211, 153, 0.05))",
                borderRadius: "16px",
                border: "2px solid rgba(16, 185, 129, 0.2)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(16, 185, 129, 0.25)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
                <div>
                  <h4 style={{ margin: "0", color: "#333", fontWeight: "700" }}>
                    {out.name || "Unnamed Outfit"}
                  </h4>
                  <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#999" }}>
                    {out.date}
                  </p>
                </div>
                <div style={{ display: "flex", gap: "6px" }}>
                  {[...Array(5)].map((_, star) => (
                    <span
                      key={star}
                      onClick={() => handleRating(i, star + 1)}
                      style={{
                        fontSize: "20px",
                        cursor: "pointer",
                        opacity: star < (out.rating || 0) ? 1 : 0.3,
                        transition: "opacity 0.2s"
                      }}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
                {out.items?.map((item) => (
                  <img 
                    key={item.id} 
                    src={item.image} 
                    width="80" 
                    style={{ 
                      borderRadius: "10px",
                      objectFit: "cover",
                      height: "80px",
                      border: "3px solid white",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                    }}
                    alt="outfit"
                  />
                ))}
              </div>

              <button 
                onClick={() => handleDelete(i)}
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "#ef4444",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.background = "#dc2626";
                }}
              >
                🗑️ Hapus
              </button>
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
}