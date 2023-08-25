export type PalletShelfAccessories = "shelfStrengthen" | "installationKit";
export type LegsColors = "black" | "silver" | "blue" | "red";
export type FrameColors = "orange" | "blue" | "silver" | "red";

export const legsColorsConfig: Record<
  LegsColors,
  { color: string; additionalCost?: number; name: string }
> = {
  blue: { color: "#0012B5", name: "Niebieski" },
  silver: { color: "#CBCBCB", name: "Srebrny" },
  black: {
    color: "#000",
    additionalCost: 200,
    name: "Czarny",
  },
  red: { color: "#FF3A3A", additionalCost: 200, name: "Czerwony" },
};
export const frameColorsConfig: Record<
  FrameColors,
  { color: string; additionalCost?: number; name: string }
> = {
  blue: { color: "#0012B5", name: "Niebieski" },
  silver: { color: "#CBCBCB", name: "Srebrny" },
  orange: {
    color: "#FF6E40",
    additionalCost: 200,
    name: "Pomarańczowy",
  },
  red: { color: "#FF3A3A", additionalCost: 200, name: "Czerwony" },
};
