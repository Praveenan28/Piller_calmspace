"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CloudsWorld() {
  const router = useRouter();
  const [picked, setPicked] = useState<string | null>(null);

  const clouds = [
    { label: "Calm", color: "#e0f2fe" },
    { label: "Sleepy", color: "#e9d5ff" },
    { label: "Happy", color: "#fef9c3" },
    { label: "Worried", color: "#fee2e2" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: picked ? clouds.find(c => c.label === picked)?.color : "#f8fafc", padding: 20, fontFamily: "system-ui", transition: "background 0.5s ease" }}>
      <button onClick={() => router.back()} style={{ padding: 10, borderRadius: 12, border: "1px solid #94a3b8", background: "#fff" }}>
        ← Back
      </button>

      <div style={{ maxWidth: 720, margin: "18px auto 0", padding: 18, borderRadius: 18, background: "#ffffff", border: "1px solid #cbd5e1" }}>
        <h1 style={{ fontSize: 22, marginBottom: 8 }}>How do you feel?</h1>
        <p style={{ color: "#475569", marginBottom: 14 }}>
          Choose a cloud. You can change your mind as many times as you want.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
          {clouds.map((c) => (
            <button
              key={c.label}
              onClick={() => setPicked(c.label)}
              style={{
                padding: 16,
                borderRadius: 18,
                border: "1px solid #cbd5e1",
                background: c.color,
                textAlign: "left",
                fontSize: 16,
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {picked && <p style={{ marginTop: 14, color: "#334155" }}>You picked: {picked}</p>}
      </div>
    </div>
  );
}
