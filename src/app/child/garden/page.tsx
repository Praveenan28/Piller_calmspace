"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GardenWorld() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  return (
    <div style={{ minHeight: "100vh", background: "#ecfeff", padding: 24 }}>
      <button onClick={() => router.back()}>← Back</button>

      <h1>Garden world</h1>
      <p>Tap a seed. Count slowly.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCount(i + 1)}
            style={{
              padding: 20,
              borderRadius: 16,
              background: "#dcfce7",
              fontSize: 18,
            }}
          >
            🌱
          </button>
        ))}
      </div>

      <p style={{ marginTop: 20 }}>Count: {count}</p>
    </div>
  );
}
