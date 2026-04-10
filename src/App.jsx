import { useState, useEffect } from "react";
import UploadForm from "./components/UploadForm";
import OutfitGenerator from "./components/OutfitGenerator";
import ClosetGrid from "./components/ClosetGrid";
import SavedOutfits from "./components/SavedOutfits";
import HeroSection from "./components/HeroSection";
import OutfitCard from "./components/OutfitCard";
import IllustrationCard from "./components/IllustrationCard";
import Toast from "./components/Toast";
import Stats from "./components/Stats";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([]);
  const [outfit, setOutfit] = useState(null);
  const [saved, setSaved] = useState([]);
  const [outfitHistory, setOutfitHistory] = useState([]);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("closet"));
    if (stored) setItems(stored);
    const savedOutfits = JSON.parse(localStorage.getItem("savedOutfits"));
    if (savedOutfits) setSaved(savedOutfits);
  }, []);

  useEffect(() => {
    localStorage.setItem("closet", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("savedOutfits", JSON.stringify(saved));
  }, [saved]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  const handleDeleteItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
    showToast("Item dihapus", "success");
  };

  const filteredItems = items;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", position: "relative" }}>
      {/* Floating decorative elements */}
      {[...Array(12)].map((_, i) => (
        <div key={i} style={{
          position: "fixed",
          width: "6px",
          height: "6px",
          background: `linear-gradient(135deg, ${['#6366f1', '#8b5cf6', '#d946ef', '#f97316', '#10b981'][i % 5]}, rgba(255,255,255,0.6))`,
          borderRadius: "50%",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `particleFloat ${8 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
          zIndex: 0,
          boxShadow: "0 0 10px rgba(99, 102, 241, 0.3)",
          pointerEvents: "none"
        }} />
      ))}

      {/* Floating icons */}
      {[
        { icon: "👗", delay: 0 },
        { icon: "👔", delay: 2 },
        { icon: "👖", delay: 4 },
        { icon: "👟", delay: 6 },
        { icon: "✨", delay: 8 },
        { icon: "💎", delay: 10 }
      ].map((item, i) => (
        <div key={i} style={{
          position: "fixed",
          fontSize: "20px",
          top: `${15 + (i * 12)}%`,
          right: `${5 + (i * 8)}%`,
          animation: `iconFloat ${12 + i * 2}s ease-in-out infinite`,
          animationDelay: `${item.delay}s`,
          zIndex: 0,
          opacity: 0.1,
          pointerEvents: "none"
        }}>
          {item.icon}
        </div>
      ))}

      {/* HEADER */}
      <Header itemCount={items.length} savedCount={saved.length} />

      {/* MAIN CONTENT */}
      <main style={{
        flex: 1,
        maxWidth: "1024px",
        margin: "0 auto",
        padding: "26px 24px 32px",
        width: "100%",
        background: "rgba(255, 255, 255, 0.58)",
        borderRadius: "36px",
        border: "1px solid rgba(255, 255, 255, 0.7)",
        boxShadow: "0 40px 120px rgba(15, 23, 42, 0.12)",
        backdropFilter: "blur(28px)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Decorative background elements */}
        <div style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "120px",
          height: "120px",
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08))",
          borderRadius: "50%",
          animation: "float 12s ease-in-out infinite",
          zIndex: 0
        }} />
        <div style={{
          position: "absolute",
          bottom: "15%",
          left: "8%",
          width: "80px",
          height: "80px",
          background: "linear-gradient(225deg, rgba(240, 147, 251, 0.06), rgba(244, 114, 182, 0.06))",
          borderRadius: "50%",
          animation: "float 18s ease-in-out infinite",
          animationDelay: "3s",
          zIndex: 0
        }} />
        <div style={{
          position: "absolute",
          top: "60%",
          right: "15%",
          width: "60px",
          height: "60px",
          background: "linear-gradient(45deg, rgba(249, 115, 22, 0.08), rgba(251, 146, 60, 0.08))",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animation: "rotate 25s linear infinite",
          zIndex: 0
        }} />

        {/* Content wrapper */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* HERO SECTION */}
          <HeroSection />

        {/* STATS */}
        {items.length > 0 && <Stats items={items} saved={saved} />}

        {/* STEP BY STEP GUIDE */}
        {items.length === 0 && (
          <div className="card" style={{ marginBottom: "32px" }}>
            <h2 style={{ margin: "0 0 24px 0", textAlign: "center", color: "#333" }}>
              📋 Cara Menggunakan
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px"
            }}>
              <IllustrationCard
                icon="📤"
                title="1. Upload Pakaian"
                description="Unggah foto pakaian Anda sekali saja. Tidak perlu pilih warna atau style." 
              />
              <IllustrationCard
                icon="🎲"
                title="2. Generate Outfit"
                description="Biarkan AI membuat kombinasi outfit acak dari koleksi Anda dengan sekali klik!"
              />
              <IllustrationCard
                icon="💾"
                title="3. Simpan Favorit"
                description="Jika menyukai kombinasinya, simpan outfit tersebut untuk referensi di kemudian hari."
              />
            </div>
          </div>
        )}

        {/* UPLOAD */}
        <div className="card">
          <UploadForm 
            setItems={setItems} 
            onSuccess={() => showToast("Item berhasil diupload!")} 
          />
        </div>

        {/* GENERATOR */}
        {items.length > 0 && (
          <div className="card">
            <OutfitGenerator 
              items={items} 
              setOutfit={setOutfit} 
              history={outfitHistory}
              onGenerated={(generated) => {
                setOutfit(generated);
                setOutfitHistory(prev => [generated.outfitKey, ...prev].slice(0, 20));
              }}
            />
          </div>
        )}

        {/* HASIL OUTFIT */}
        {outfit && <OutfitCard outfit={outfit} />}

        {/* SAVED OUTFITS */}
        <div className="card">
          <SavedOutfits 
            saved={saved} 
            setSaved={setSaved} 
            outfit={outfit} 
            onSuccess={() => showToast("Outfit tersimpan!")} 
          />
        </div>

        {/* CLOSET */}
        {items.length > 0 && (
          <div className="card">
            <ClosetGrid items={filteredItems} onDelete={handleDeleteItem} />
          </div>
        )}

        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(20px) rotate(5deg); }
          }
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes particleFloat {
            0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.3; }
            25% { transform: translateY(-30px) translateX(20px) scale(1.2); opacity: 0.8; }
            50% { transform: translateY(-15px) translateX(-15px) scale(0.8); opacity: 0.5; }
            75% { transform: translateY(-45px) translateX(10px) scale(1.1); opacity: 0.7; }
          }
          @keyframes iconFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
            33% { transform: translateY(-25px) rotate(10deg) scale(1.1); }
            66% { transform: translateY(-10px) rotate(-5deg) scale(0.9); }
          }
        `}</style>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* TOAST NOTIFICATION */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

function FilterButton({ active, onClick, label, icon, count }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "10px 12px",
        background: active 
          ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
          : "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.6))",
        color: active ? "white" : "#333",
        border: active ? "none" : "2px solid rgba(99, 102, 241, 0.2)",
        borderRadius: "10px",
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "13px",
        transition: "all 0.3s ease",
        boxShadow: active ? "0 6px 16px rgba(99, 102, 241, 0.25)" : "none"
      }}
    >
      {icon && <span style={{ marginRight: "4px" }}>{icon}</span>}
      {label} ({count})
    </button>
  );
}

export default App;