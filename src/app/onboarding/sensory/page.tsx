"use client";

import { saveOnboardingData, getOnboardingData } from "@/lib/onboarding";
import { useEffect, useState } from "react";

export default function SensoryPreferences() {
  const options = [
    "🌈 I like bright colors",
    "🎨 I like soft, gentle colors",
    "📦 I like simple screens",
    "⚫ I like high contrast",
    "🐢 I don’t like fast movement",
  ];

  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const data = getOnboardingData();
    setSelected(data.sensory || []);
  }, []);

  function toggleOption(label: string)  
  {
    const updated = selected.includes(label)
      ? selected.filter((x) => x !== label)
      : [...selected, label];

    setSelected(updated);
    saveOnboardingData("sensory", updated);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
        display: "flex",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          background: "#ffffff",
          borderRadius: 24,
          border: "1px solid #e2e8f0",
          padding: 28,
          boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
          color: "#0f172a",
        }}
      >
        <h1 style={{ fontSize: 26, marginBottom: 10 }}>
          What feels comfortable for your eyes?
        </h1>

        <p style={{ fontSize: 15, color: "#475569", marginBottom: 24 }}>
          Choose the visuals that feel best for you.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {options.map((label) => (
            <button
              key={label}
              onClick={() => toggleOption(label)}
              style={{
                width: "100%",
                padding: 16,
                borderRadius: 16,
                border: selected.includes(label)
                  ? "2px solid #0ea5e9"
                  : "1px solid #cbd5e1",
                background: "#2391eaa8",
                textAlign: "left",
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <a
          href="/onboarding/summary"
          style={{
            display: "block",
            marginTop: 28,
            width: "100%",
            padding: 16,
            borderRadius: 16,
            background: "#0ea5e9",
            color: "white",
            textAlign: "center",
            fontSize: 16,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Continue
        </a>
      </div>
    </div>
  );
}
