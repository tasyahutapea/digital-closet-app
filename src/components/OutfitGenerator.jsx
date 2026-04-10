import { generateOutfit } from "../utils/generateOutfit";

export default function OutfitGenerator({ items, setOutfit, history = [], onGenerated }) {
  const handleGenerate = () => {
    if (items.length < 3) {
      return alert("Minimal upload 3 item dulu, lalu klik generate.");
    }

    try {
      const generated = generateOutfit(items, history);
      setOutfit(generated);
      onGenerated?.(generated);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2 style={{ margin: "0 0 16px 0", color: "#333", fontSize: "26px" }}>🤖 Generate Outfit</h2>
      <p style={{ color: "#666", margin: "0 0 24px 0", fontSize: "15px", lineHeight: "1.6" }}>
        Pilih kombinasi outfit acak dari koleksi kamu. Cukup upload beberapa item, lalu klik generate untuk inspirasi cepat.
      </p>
      <button 
        onClick={handleGenerate} 
        style={{ 
          width: "100%",
          fontSize: "18px",
          padding: "18px 24px",
          background: "linear-gradient(135deg, #ec4899, #f43f5e)",
          boxShadow: "0 12px 32px rgba(236, 72, 153, 0.35)",
          fontWeight: "700",
          letterSpacing: "0.5px"
        }}
      >
        🎲 Generate Outfit Baru
      </button>
    </div>
  );
}
