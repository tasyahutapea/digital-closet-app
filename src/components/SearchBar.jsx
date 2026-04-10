import { useState } from "react";

export default function SearchBar({ items, onSelectItem }) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredItems = items.filter(item =>
    [item.category, item.color, item.style, item.fabric]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div style={{ position: "relative", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="🔍 Cari warna, style, bahan..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        style={{
          width: "100%",
          padding: "12px 16px",
          border: "2px solid rgba(99, 102, 241, 0.2)",
          borderRadius: "12px",
          fontSize: "14px",
          fontFamily: "inherit",
          transition: "all 0.3s ease",
          background: "rgba(255,255,255,0.8)",
          boxSizing: "border-box"
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") setIsOpen(false);
        }}
      />
      
      {isOpen && search && filteredItems.length > 0 && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          background: "white",
          border: "2px solid rgba(99, 102, 241, 0.2)",
          borderRadius: "12px",
          marginTop: "8px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
          zIndex: 50,
          maxHeight: "300px",
          overflowY: "auto"
        }}>
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => {
                onSelectItem(item);
                setSearch("");
                setIsOpen(false);
              }}
              style={{
                padding: "12px 16px",
                borderBottom: "1px solid rgba(99, 102, 241, 0.1)",
                cursor: "pointer",
                transition: "background 0.2s ease",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(99, 102, 241, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <img 
                src={item.image} 
                alt={`${item.color} ${item.style}`}
                style={{ width: "30px", height: "30px", borderRadius: "6px" }}
              />
              <span style={{ fontWeight: "600", color: "#6366f1" }}>
                {item.color} • {item.style}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
