import type { StorybookConfig } from "@storybook/nextjs";
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, "../src/components"),
      '@/sections': path.resolve(__dirname, "../src/sections"),
      '@/models': path.resolve(__dirname, "../src/models"),
      '@/globals': path.resolve(__dirname, "../src/globals"),
    };

    return config;
  }
};
export default config;
