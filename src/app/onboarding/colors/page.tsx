"use client";

import { useRouter } from "next/navigation";
import { useOnboarding } from "../OnboardingContext";

const COLORS = ["#e2e8f0", "#dbeafe", "#fef3c7", "#dcfce7"];

export default function ColorsPage() {
  const router = useRouter();
  const { data, setData } = useOnboarding();

  return (
    <div style={{ minHeight: "100vh", padding: 24 }}>
      <h1>Choose calming colors</h1>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        {COLORS.map((c) => (
          <button
            key={c}
            onClick={() => setData({ colors: [c] })}
            style={{
              width: 60,
              height: 60,
              borderRadius: 12,
              background: c,
              border:
                data.colors[0] === c
                  ? "3px solid #0f172a"
                  : "1px solid #cbd5e1",
            }}
          />
        ))}
      </div>

      <button
        onClick={() => router.push("/onboarding/summary")}
        style={{ marginTop: 24 }}
      >
        Continue
      </button>
    </div>
  );
}
