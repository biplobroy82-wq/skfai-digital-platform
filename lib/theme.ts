// ======================================================
// SKF AI WEBSITE V2 - DESIGN SYSTEM
// File: lib/theme.ts
// ======================================================

export const theme = {
  // ==========================
  // Brand Colors
  // ==========================
  colors: {
    // Background Colors
    background: "#F8F8F5",
    white: "#FFFFFF",
    surface: "#F5F5F5",

    // Text Colors
    heading: "#1A1A1A",
    body: "#4B5563",
    muted: "#9CA3AF",

    // Brand Colors
    primary: "#C8A24C",
    primaryDark: "#A8842E",

    // Borders
    border: "#E5E7EB",

    // Status Colors
    success: "#16A34A",
    warning: "#F59E0B",
    error: "#DC2626",
  },

  // ==========================
  // Border Radius
  // ==========================
  radius: {
    xs: "6px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    full: "9999px",
  },

  // ==========================
  // Box Shadows
  // ==========================
  shadow: {
    sm: "0 4px 10px rgba(0,0,0,0.05)",
    md: "0 10px 25px rgba(0,0,0,0.08)",
    lg: "0 20px 45px rgba(0,0,0,0.12)",
    gold: "0 0 30px rgba(200,162,76,0.25)",
  },

  // ==========================
  // Container Width
  // ==========================
  container: {
    maxWidth: "1280px",
    padding: "24px",
  },

  // ==========================
  // Section Spacing
  // ==========================
  section: {
    desktop: "120px",
    tablet: "90px",
    mobile: "70px",
  },

  // ==========================
  // Transition
  // ==========================
  transition: {
    fast: "all .25s ease",
    normal: "all .35s ease",
    slow: "all .5s ease",
  },
} as const;

// Theme Type
export type Theme = typeof theme;