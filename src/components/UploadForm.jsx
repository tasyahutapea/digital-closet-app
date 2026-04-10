import { useState } from "react";

export default function UploadForm({ setItems, onSuccess }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = () => {
    if (!file) return alert("Pilih gambar dulu");

    const reader = new FileReader();
    reader.onloadend = () => {
      const newItem = {
        id: Date.now(),
        image: reader.result,
        category: "item"
      };

      setItems(prev => [...prev, newItem]);
      setFile(null);
      setPreview(null);
      onSuccess?.();
    };

    reader.readAsDataURL(file);
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Decorative background elements */}
      <div style={{
        position: "absolute",
        top: "-20px",
        right: "-20px",
        width: "100px",
        height: "100px",
        background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))",
        borderRadius: "50%",
        animation: "pulse 4s ease-in-out infinite",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: "-30px",
        left: "-30px",
        width: "80px",
        height: "80px",
        background: "linear-gradient(225deg, rgba(240, 147, 251, 0.08), rgba(244, 114, 182, 0.08))",
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        animation: "float 6s ease-in-out infinite",
        zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <h2 style={{ margin: "0 0 20px 0", color: "#333", fontSize: "26px" }}>
          📤 Upload Item Pakaian
        </h2>
        <label style={{ 
          display: "block", 
          marginBottom: "12px",
          fontWeight: "700",
          color: "#333",
          fontSize: "15px"
        }}>
          📸 Pilih Gambar
        </label>
        <div style={{
          position: "relative",
          border: "3px dashed rgba(99, 102, 241, 0.4)",
          borderRadius: "16px",
          padding: "32px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))",
          cursor: "pointer",
          transition: "all 0.3s ease"
        }}
        onDragOver={(e) => {
          e.preventDefault();
          e.currentTarget.style.background = "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15))";
          e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.8)";
        }}
        onDragLeave={(e) => {
          e.currentTarget.style.background = "linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))";
          e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.4)";
        }}
        onClick={(e) => e.currentTarget.querySelector('input[type="file"]').click()}
        >
          <input 
            type="file" 
            accept="image/*"
            onChange={handleFileSelect}
            style={{ display: "none" }}
          />
          <p style={{ margin: "0 0 8px 0", fontSize: "32px" }}>🖼️</p>
          <p style={{ margin: "0 0 4px 0", fontWeight: "600", color: "#333" }}>
            {file ? "✅ Gambar dipilih" : "Klik atau drag gambar ke sini"}
          </p>
          <p style={{ margin: "0", fontSize: "12px", color: "#999" }}>
            JPG, PNG, WebP - Max 10MB
          </p>
        </div>
      </div>

      {/* PREVIEW */}
      {preview && (
        <div style={{
          marginBottom: "20px",
          textAlign: "center",
          padding: "16px",
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))",
          borderRadius: "16px",
          border: "2px solid rgba(99, 102, 241, 0.1)"
        }}>
          <p style={{ margin: "0 0 12px 0", fontWeight: "600", color: "#666", fontSize: "13px" }}>
            PREVIEW
          </p>
          <img 
            src={preview} 
            alt="preview" 
            style={{
              width: "100%",
              maxWidth: "280px",
              height: "280px",
              objectFit: "contain",
              borderRadius: "12px",
              border: "3px solid rgba(99, 102, 241, 0.2)"
            }}
          />
        </div>
      )}

      <div style={{ marginBottom: "20px" }}>
        <p style={{ margin: "0 0 8px 0", fontWeight: "700", color: "#333", fontSize: "15px" }}>
          📌 Upload Bebas
        </p>
        <p style={{ margin: 0, color: "#555", fontSize: "14px" }}>
          Tidak perlu pilih kategori, cukup upload foto pakaian. Generator akan membuat kombinasi otomatis dari item kamu.
        </p>
      </div>

      <div style={{ marginBottom: "20px", padding: "18px", background: "rgba(99, 102, 241, 0.05)", borderRadius: "16px", border: "1px solid rgba(99, 102, 241, 0.12)" }}>
        <p style={{ margin: 0, color: "#555", fontSize: "14px" }}>
          Cukup pilih foto pakaian. Aplikasi akan menyimpan item secara bebas tanpa kamu perlu pilih warna atau style.
        </p>
      </div>

      <button onClick={handleUpload} style={{ width: "100%", fontSize: "16px", padding: "16px", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", border: "none", borderRadius: "16px", cursor: "pointer" }}>
        ✅ Upload Item
      </button>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
}