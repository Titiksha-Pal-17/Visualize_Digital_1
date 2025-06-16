import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom colors for the landing page design
        "brand-teal": "#4BB1A4",
        "brand-green": "#73CB3D",
        "brand-blue": "#4C95F6",
        "brand-purple": "#7F8EF7",
        "brand-green-accent": "#42B953",
        "brand-orange": "#F07837",
        "glass-white": "rgba(255, 255, 255, 0.04)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "stat-green": "rgba(78, 239, 69, 0.84)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(180deg, #1a4d5c 0%, #0e504b 95.96%)",
        "button-gradient": "linear-gradient(180deg, #4BB1A4 0%, #73CB3D 100%)",
        "button-gradient-alt":
          "linear-gradient(94deg, #4BB1A4 3.8%, #73CB3D 115.06%)",
        "text-gradient":
          "linear-gradient(90deg, #4C95F6 0%, #7F8EF7 50%, #42B953 63.81%)",
        "hero-text-gradient":
          "linear-gradient(180deg, #FFF 22.5%, rgba(255, 255, 255, 0.70) 100%)",
        "service-gradient":
          "linear-gradient(90deg, #2F9AF4 0%, #B386FC 46.63%, #89C646 100%)",
        "card-gradient":
          "linear-gradient(180deg, rgba(47, 96, 130, 0.67) 0%, rgba(47, 96, 130, 0.67) 100%)",
        "glow-gradient":
          "linear-gradient(to bottom right, #FF8983 0%, #470E47 25%, #0F6E68 50%)",
      },
      backdropBlur: {
        "88": "88px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "29": "29.455px",
      },
      boxShadow: {
        glow: "0px 0px 180px 0px #9917FF, 0px 0px 1px 4px rgba(255, 255, 255, 0.10), 0px -4px 2px 0px rgba(0, 0, 0, 0.25) inset, 0px 2px 1px 0px rgba(255, 255, 255, 0.25) inset",
        "green-glow":
          "0px 0px 180px -14px #76CD35, 0px 0px 1px 4px rgba(255, 255, 255, 0.10), 0px -4px 2px 0px rgba(0, 0, 0, 0.25) inset, 0px 2px 1px 0px rgba(255, 255, 255, 0.25) inset",
        "card-shadow": "0px 8px 6.8px 0px rgba(168, 217, 171, 0.25)",
        "global-shadow": "0px 4px 105.7px -28px #5555CA",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
