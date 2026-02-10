export function saveOnboardingData(key: string, value: any) {
  if (typeof window !== 'undefined') {
    const existing = JSON.parse(localStorage.getItem('onboarding') || '{}');
    const updated = { ...existing, [key]: value };
    localStorage.setItem('onboarding', JSON.stringify(updated));
  }
}

export function getOnboardingData() {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('onboarding') || '{}');
  }
  return {};
}
