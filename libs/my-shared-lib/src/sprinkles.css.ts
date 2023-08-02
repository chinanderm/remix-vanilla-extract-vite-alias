import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

const colors = {
  "indigo-700": "#4338ca",
  "indigo-800": "#3730a3",
  "indigo-900": "#312e81",
};

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: colors,
  },
});

export const sprinkles = createSprinkles(colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
