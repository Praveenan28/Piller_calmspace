"use client";

import { saveOnboardingData } from "@/lib/onboarding";

export default function AttentionStyle() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f1f5f9',
        display: 'flex',
        justifyContent: 'center',
        padding: '40px 20px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 480,
          background: '#ffffff',
          borderRadius: 24,
          border: '1px solid #e2e8f0',
          padding: 28,
          boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
          color: '#0f172a',
        }}
      >
        <h1 style={{ fontSize: 26, marginBottom: 10 }}>
          How do you like to focus?
        </h1>

        <p style={{ fontSize: 15, color: '#475569', marginBottom: 24 }}>
          Choose the way that feels most comfortable for you.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            '⏱️ I like short activities',
            '🐢 I like slow and steady activities',
            '🧭 I like exploring freely',
            '🔁 I like repeating things',
          ].map((label) => (
            <button
  key={label}
  onClick={() => {
    saveOnboardingData("attention", label);
    window.location.href = "/onboarding/sensory";
  }}
  style={{
    width: '100%',
    padding: 16,
    borderRadius: 16,
    border: '1px solid #cbd5e1',
    background: '#2391eaa8',
    textAlign: 'left',
    fontSize: 15,
  }}
>
  {label}
</button>

          ))}
        </div>

        <a
          href="/onboarding/sensory"
          style={{
            display: 'block',
            marginTop: 24,
            width: '100%',
            padding: 16,
            borderRadius: 16,
            background: '#0ea5e9',
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Continue
        </a>
      </div>
    </div>
  );
}
