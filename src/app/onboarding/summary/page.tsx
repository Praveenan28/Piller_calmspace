"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useOnboarding } from "../OnboardingContext";
import { saveComfortProfile } from "./actions";

export default function SummaryPage() {
  const router = useRouter();
  const { data } = useOnboarding();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function finish() {
    setSaving(true);
    setError("");

    const result = await saveComfortProfile({
      childId: "child-001",
      colors: data.colors,
      sound: data.sound,
      attention: data.attention,
      sensory: data.sensory,
      movement: data.movement,
    });

    if (!result.success) {
      setError("Something went wrong saving your profile.");
      setSaving(false);
      return;
    }

    router.replace("/child");
  }

  return (
    <div style={{ minHeight: "100vh", padding: 24 }}>
      <h1>All set</h1>
      <p>This space will be created just for your child.</p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={finish} disabled={saving}>
        {saving ? "Saving…" : "Finish"}
      </button>
    </div>
  );
}
