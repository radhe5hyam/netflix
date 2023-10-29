// tailwind config is required for editor support
import type { Config } from "tailwindcss";
const { blackA, violet, mauve } = require("@radix-ui/colors");
import sharedConfig from "@netflix/tailwind-config/tailwind.config.ts";

// const config: Pick<Config, "prefix" | "presets"> = {
//   prefix: "ui-",
//   presets: [sharedConfig],

// };

// export default config;

const baseConfig = require("@netflix/tailwind-config/tailwind.config.ts");

module.exports = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    "./primitives/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...violet,
        ...mauve,
      },
    },
  },
};
