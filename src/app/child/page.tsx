"use client";

import "./parent.css";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function ChildPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      const { data, error } = await supabase
        .from("comfort_profiles")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error || !data) {
        router.replace("/onboarding");
        return;
      }

      setProfile(data);
      setLoading(false);
    }

    loadProfile();
  }, [router]);

  if (loading) {
    return <div style={{ padding: 40 }}>Entering your calm space…</div>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: profile.colors?.[0] || "#e2e8f0",
        transition: "background 0.6s ease",
        fontFamily: "system-ui",
      }}
    >
      <div style={{ maxWidth: 480, padding: 24 }}>
        <h1>This is your calm space.</h1>

        <button onClick={() => router.push("/child/garden")}>
          🌱 Garden world
        </button>

        <button onClick={() => router.push("/child/clouds")}>
          ☁️ Feelings clouds
        </button>

        <button onClick={() => router.push("/child/bubbles")}>
          🫧 Breathing bubbles
        </button>
      </div>
    </div>
  );
}
