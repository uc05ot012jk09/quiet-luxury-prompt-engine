// src/App.tsx
import React from "react";
import { AppShell } from "./layouts/AppShell";
import { LandingPage } from "./pages/LandingPage";

export const App: React.FC = () => {
  return (
    <AppShell aria-label="Quiet Luxury Prompt Engine Application">
      <LandingPage />
    </AppShell>
  );
};
