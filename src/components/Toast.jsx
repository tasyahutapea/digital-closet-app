import { useState } from "react";

export default function Toast({ message, type = "success", onClose }) {
  useState(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = {
    success: "#10b981",
    error: "#ef4444",
    info: "#3b82f6"
  }[type];

  return (
    <div style={{
      position: "fixed",
      bottom: "24px",
      right: "24px",
      background: bgColor,
      color: "white",
      padding: "16px 24px",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
      animation: "slideUp 0.4s ease-out",
      zIndex: 9999,
      fontWeight: "600",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }}>
      <span style={{ fontSize: "18px" }}>
        {type === "success" ? "✅" : type === "error" ? "❌" : "ℹ️"}
      </span>
      {message}
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
