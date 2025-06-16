import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#D4A574",
          foreground: "#FFFFFF",
          50: "#F8F4EF",
          100: "#F0E6D7",
          200: "#E6D2B3",
          300: "#DCBE8F",
          400: "#D4A574",
          500: "#C8955A",
          600: "#B8834A",
          700: "#A0703A",
          800: "#885D2A",
          900: "#704A1A",
        },
        secondary: {
          DEFAULT: "#8B7355",
          foreground: "#FFFFFF",
          50: "#F5F3F0",
          100: "#EBE7E1",
          200: "#D7CFC3",
          300: "#C3B7A5",
          400: "#AF9F87",
          500: "#9B8769",
          600: "#8B7355",
          700: "#756141",
          800: "#5F4F2D",
          900: "#493D19",
        },
        accent: {
          DEFAULT: "#F4E4C1",
          foreground: "#704A1A",
        },
        muted: {
          DEFAULT: "#F8F6F3",
          foreground: "#6B5B47",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brown: {
          50: "#F8F6F3",
          100: "#F0EBE6",
          200: "#E1D7CC",
          300: "#D2C3B3",
          400: "#C3AF99",
          500: "#B49B80",
          600: "#9B8469",
          700: "#826D52",
          800: "#6B5B47",
          900: "#54493C",
        },
        gold: {
          50: "#FFFCF5",
          100: "#FFF8E6",
          200: "#FFEFC2",
          300: "#FFE69E",
          400: "#FFDD7A",
          500: "#FFD456",
          600: "#D4A574",
          700: "#B8834A",
          800: "#9C6120",
          900: "#704A1A",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.8s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, rgba(139, 115, 85, 0.1) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
