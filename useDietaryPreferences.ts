import { useState, useEffect } from 'react';

export const useDietaryPreferences = () => {
  const [preferences, setPreferences] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('dietaryPreferences');
    if (stored) {
      setPreferences(JSON.parse(stored));
    }
  }, []);

  const togglePreference = (preference: string) => {
    setPreferences((prev) => {
      const newPrefs = prev.includes(preference)
        ? prev.filter((p) => p !== preference)
        : [...prev, preference];
      localStorage.setItem('dietaryPreferences', JSON.stringify(newPrefs));
      return newPrefs;
    });
  };

  return { preferences, togglePreference };
};