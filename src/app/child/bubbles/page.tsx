"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BubblesWorld() {
  const router = useRouter();
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");
  const [count, setCount] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => {
        if (c > 1) return c - 1;

        setPhase((p) => (p === "in" ? "hold" : p === "hold" ? "out" : "in"));
        return 4;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const size = phase === "in" ? 220 : phase === "hold" ? 240 : 180;
  const label = phase === "in" ? "Breathe in" : phase === "hold" ? "Hold" : "Breathe out";

  return (
    <div style={{ minHeight: "100vh", background: "#f1f5f9", padding: 24 }}>
      <button onClick={() => router.back()}>← Back</button>

      <h1>Breathing bubbles</h1>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
        <div
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            background: "rgba(59,130,246,0.2)",
            transition: "all 1s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
          }}
        >
          {count}
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: 20 }}>{label}</p>
    </div>
  );
}
