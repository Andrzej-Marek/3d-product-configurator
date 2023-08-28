export type PalletShelfAccessories = "shelfStrengthen" | "installationKit";
export type LegsColors = "black" | "silver" | "blue" | "red";
export type FrameColors = "orange" | "blue" | "silver" | "red";

export const legsColorsConfig: Record<
  LegsColors,
  { color: string; additionalCost?: number; name: string }
> = {
  blue: { color: "#0012B5", name: "colors.blue" },
  silver: { color: "#CBCBCB", name: "colors.silver" },
  black: {
    color: "#000",
    additionalCost: 200,
    name: "colors.black",
  },
  red: { color: "#FF3A3A", additionalCost: 200, name: "colors.red" },
};
export const frameColorsConfig: Record<
  FrameColors,
  { color: string; additionalCost?: number; name: string }
> = {
  blue: { color: "#0012B5", name: "colors.blue" },
  silver: { color: "#CBCBCB", name: "colors.silver" },
  orange: {
    color: "#FF6E40",
    additionalCost: 200,
    name: "colors.orange",
  },
  red: { color: "#FF3A3A", additionalCost: 200, name: "colors.red" },
};
