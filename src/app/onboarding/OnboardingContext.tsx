"use client";

import { createContext, useContext, useState } from "react";

type OnboardingData = {
  colors: string[];
  sound: string;
  attention: string;
  sensory: string[];
  movement: string;
};

const defaultData: OnboardingData = {
  colors: [],
  sound: "",
  attention: "",
  sensory: [],
  movement: "",
};

const OnboardingContext = createContext<{
  data: OnboardingData;
  setData: (d: Partial<OnboardingData>) => void;
}>({
  data: defaultData,
  setData: () => {},
});

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [data, setState] = useState<OnboardingData>(defaultData);

  function setData(update: Partial<OnboardingData>) {
    setState((prev) => ({ ...prev, ...update }));
  }

  return (
    <OnboardingContext.Provider value={{ data, setData }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  return useContext(OnboardingContext);
}
