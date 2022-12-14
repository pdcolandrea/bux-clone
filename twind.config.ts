import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    fontFamily: {
      body: ["SoDoSans", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        darkgreen: "#1e3932",
        deepgreen: "#006241",
        sbgreen: "#d4e9e2",
        sbbrown: "#212020",
        sbgreenalt: "#006241",
        greyish: "#E9E9E9",
        warmblack: "#3d3935",
        sbpurp: "#B0B0B0",
        warmpurp: "#00003A",
      },
    },
  },
} as Options;
