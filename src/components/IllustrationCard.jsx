export default function IllustrationCard({ icon, title, description, children }) {
  return (
    <div style={{
      display: "flex",
      gap: "16px",
      alignItems: "flex-start",
      padding: "20px",
      background: "#f9f7ff",
      borderRadius: "14px",
      border: "1px solid #e9d5ff",
      marginBottom: "16px"
    }}>
      <div style={{
        fontSize: "40px",
        minWidth: "50px",
        textAlign: "center"
      }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: "0 0 8px 0", color: "#333" }}>
          {title}
        </h3>
        <p style={{ margin: "0", color: "#666", fontSize: "14px", lineHeight: "1.6" }}>
          {description}
        </p>
        {children}
      </div>
    </div>
  );
}
