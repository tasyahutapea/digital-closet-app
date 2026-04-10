export default function HeroSection() {
  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))",
      borderRadius: "24px",
      padding: "50px 40px",
      textAlign: "center",
      color: "#333",
      marginBottom: "40px",
      boxShadow: "0 20px 60px rgba(99, 102, 241, 0.2), 0 0 1px rgba(99, 102, 241, 0.1) inset",
      position: "relative",
      overflow: "hidden",
      border: "2px solid rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(20px)"
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), transparent)",
        borderRadius: "50%",
        top: "-150px",
        right: "-100px",
        animation: "float 8s ease-in-out infinite",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        width: "300px",
        height: "300px",
        background: "linear-gradient(225deg, rgba(139, 92, 246, 0.08), transparent)",
        borderRadius: "50%",
        bottom: "-100px",
        left: "-80px",
        animation: "float 12s ease-in-out infinite",
        animationDelay: "2s",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        width: "200px",
        height: "200px",
        background: "linear-gradient(45deg, rgba(240, 147, 251, 0.08), transparent)",
        borderRadius: "50%",
        top: "50%",
        right: "10%",
        animation: "float 10s ease-in-out infinite",
        animationDelay: "1s",
        zIndex: 0
      }} />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: "8px",
          height: "8px",
          background: `linear-gradient(135deg, ${['#6366f1', '#8b5cf6', '#d946ef', '#f97316'][i % 4]}, rgba(255,255,255,0.8))`,
          borderRadius: "50%",
          top: `${20 + (i * 10)}%`,
          left: `${10 + (i * 10)}%`,
          animation: `particleFloat ${3 + i * 0.5}s ease-in-out infinite`,
          animationDelay: `${i * 0.3}s`,
          zIndex: 0,
          boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)"
        }} />
      ))}

      {/* Geometric shapes */}
      <div style={{
        position: "absolute",
        width: "60px",
        height: "60px",
        background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))",
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        top: "15%",
        left: "8%",
        animation: "rotate 20s linear infinite",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        width: "40px",
        height: "40px",
        background: "linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(244, 114, 182, 0.1))",
        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        bottom: "20%",
        right: "12%",
        animation: "rotate 15s linear infinite reverse",
        zIndex: 0
      }} />

      <h1 style={{
        fontSize: "56px",
        margin: "0 0 16px 0",
        fontWeight: "900",
        letterSpacing: "-2px",
        position: "relative",
        zIndex: 1,
        background: "linear-gradient(135deg, #6366f1, #8b5cf6, #d946ef)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }}>
        👗 Digital Closet
      </h1>
      
      <p style={{
        fontSize: "18px",
        margin: "0 auto 30px auto",
        fontWeight: "500",
        color: "#555",
        lineHeight: "1.8",
        position: "relative",
        zIndex: 1,
        maxWidth: "560px"
      }}>
        Kelola koleksi pakaian kamu & temukan kombinasi outfit yang sempurna setiap hari ✨
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "18px",
        position: "relative",
        zIndex: 1,
        marginTop: "20px"
      }}>
        {[
          {
            icon: "✨",
            title: "Koleksi yang Rapi",
            description: "Simpan foto pakaianmu secara terorganisir sesuai kategori." 
          },
          {
            icon: "🎯",
            title: "Outfit Otomatis",
            description: "Biarkan aplikasi membuat kombinasi gaya yang cocok untukmu." 
          },
          {
            icon: "💾",
            title: "Simpan Favorit",
            description: "Koleksi outfit terbaik dan akses kapan saja." 
          }
        ].map((item, index) => (
          <div key={index} style={{
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "20px",
            padding: "22px",
            boxShadow: "0 20px 45px rgba(99, 102, 241, 0.12)",
            border: "1px solid rgba(99, 102, 241, 0.08)",
            minHeight: "150px"
          }}>
            <p style={{ margin: "0 0 12px 0", fontSize: "28px" }}>{item.icon}</p>
            <h3 style={{ margin: "0 0 10px 0", fontSize: "18px", color: "#2d2d7a" }}>{item.title}</h3>
            <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: "1.7" }}>{item.description}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(30px) rotate(10deg); }
        }
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-20px) translateX(10px) scale(1.1); }
          50% { transform: translateY(-10px) translateX(-10px) scale(0.9); }
          75% { transform: translateY(-30px) translateX(5px) scale(1.05); }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
