"use client";

import { saveOnboardingData, getOnboardingData } from "@/lib/onboarding";

export default function Onboarding() {
  const colors = ["#60a5fa", "#34d399", "#f472b6", "#facc15"];

  function handleColorSelect(color: string) {
    const data = getOnboardingData();
    const current = data.colors || [];

    // Allow multiple colors OR replace with single selection
    const updated = current.includes(color)
      ? current.filter((c: string) => c !== color)
      : [...current, color];

    saveOnboardingData("colors", updated);
  }

  function goNext() {
    window.location.href = "/onboarding/sound";
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
          Let’s make CalmSpace yours.
        </h1>

        <p style={{ fontSize: 15, color: "#475569", marginBottom: 24 }}>
          Choose what feels most comfortable for you.
        </p>

        {/* COLORS */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 14, marginBottom: 8 }}>Which colors feel nice?</p>

          <div style={{ display: "flex", gap: 12 }}>
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => handleColorSelect(color)}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 12,
                  border: "1px solid #cbd5e1",
                  background: color,
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>

        {/* MOVEMENT */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 14, marginBottom: 8 }}>Do you like movement?</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "I like things that move slowly",
              "I like things that stay still",
              "I like gentle animations",
            ].map((label) => (
              <button
                key={label}
                onClick={() => {
                  saveOnboardingData("movement", label);
                  goNext();
                }}
                style={{
                  width: "100%",
                  padding: 14,
                  borderRadius: 16,
                  border: "1px solid #cbd5e1",
                  background: "#000000",
                  textAlign: "left",
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* CONTINUE BUTTON */}
        <button
          onClick={goNext}
          style={{
            width: "100%",
            padding: 16,
            borderRadius: 16,
            background: "#0ea5e9",
            color: "white",
            border: "none",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
