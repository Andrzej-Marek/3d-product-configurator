import { proxy, useSnapshot } from "valtio";
import {
  FrameColors,
  LegsColors,
  PalletShelfAccessories,
  frameColorsConfig,
  legsColorsConfig,
} from "./configs";

type SizeConfig = {
  value: number;
  minSize: number;
  maxSize: number;
  step: number;
  additionalPrice?: number;
  additionalPricePerStep: number;
};

export type PalletShelfMaterial = "laminate" | "metal" | "wood" | "plywood";

export const PALLET_SHELF_CONFIGURATION_TABS = [
  "SIZE",
  "SHELF",
  "ACCESSORIES",
  "SUMMARY",
  "COLORS",
] as const;
export type PalletShelfConfigurationTab =
  (typeof PALLET_SHELF_CONFIGURATION_TABS)[number];

export const palletShelfMaterialConfig: Record<
  PalletShelfMaterial,
  { previewUrl: string; name: string; additionalCost?: number }
> = {
  laminate: {
    name: "materials.laminate",
    previewUrl: "/pallet-shelf/textures/laminate_floor_diff_1k.jpg",
  },
  plywood: {
    name: "materials.playwood",
    previewUrl: "/pallet-shelf/textures/playwood.jpeg",
  },
  metal: {
    name: "materials.metal",
    previewUrl:
      "/pallet-shelf/textures/metal/painted_metal_shutter_diff_1k.jpg",
    additionalCost: 800,
  },
  wood: {
    name: "materials.wood",
    previewUrl: "/pallet-shelf/textures/wood/wooden_planks_diff_1k.jpg",
    additionalCost: 2000,
  },
};

type ConfigurationStore = {
  showSizes: boolean;
  summary: {
    basePrice: number;
    finalPrice: number;
  };
  currentTab: PalletShelfConfigurationTab;
  width: SizeConfig;
  height: SizeConfig;
  depth: SizeConfig;
  legs: {
    colorKey: LegsColors;
    hexColor: string;
    additionalCost?: number;
  };
  accessories: Record<
    PalletShelfAccessories,
    { additionalCost: number; selected: boolean }
  >;
  frame: {
    colorKey: FrameColors;
    hexColor: string;
    additionalCost?: number;
  };
  shelf: {
    material: {
      cameraPosition: [number, number, number];
      current: PalletShelfMaterial;
      additionalCost?: number;
    };

    shelfs: {
      cameraPosition: [number, number, number];
      amount: number;
      additionalCost?: number;
      maxAmount: number;
      itemsIncludeInPrice: number;
      additionItemPrice: number;
    };
  };
};

export const palletShelfStore = proxy<ConfigurationStore>({
  showSizes: true,
  currentTab: "SIZE",
  accessories: {
    installationKit: {
      selected: false,
      additionalCost: 300,
    },
    shelfStrengthen: {
      selected: false,
      additionalCost: 1000,
    },
  },
  summary: {
    basePrice: 1500,
    finalPrice: 1500,
  },
  height: {
    value: 100,
    minSize: 100,
    maxSize: 500,
    step: 10,
    additionalPricePerStep: 20,
  },
  width: {
    value: 100,
    minSize: 100,
    maxSize: 500,
    step: 10,
    additionalPricePerStep: 20,
  },
  depth: {
    value: 60,
    minSize: 60,
    maxSize: 120,
    step: 10,
    additionalPricePerStep: 20,
  },
  frame: {
    colorKey: "blue",
    hexColor: frameColorsConfig["blue"].color,
    additionalCost: frameColorsConfig["blue"].additionalCost,
  },
  legs: {
    colorKey: "blue",
    hexColor: legsColorsConfig["blue"].color,
    additionalCost: legsColorsConfig["blue"].additionalCost,
  },

  shelf: {
    material: {
      cameraPosition: [
        0.00875146463432515, 2.2783460306287107, 1.8587157338300289,
      ],
      current: "plywood",
      additionalCost: palletShelfMaterialConfig["plywood"].additionalCost,
    },

    shelfs: {
      cameraPosition: [
        0.011166278593485781, 1.0501989631412998, 3.8596576858627323,
      ],
      amount: 2,
      maxAmount: 6,
      itemsIncludeInPrice: 2,
      additionItemPrice: 220,
    },
  },
});

export const usePalletShelfStore = () => useSnapshot(palletShelfStore);

export const usePalletShelfActions = () => {
  const recalculatePrice = () => {
    const { accessories, frame, legs, depth, height, shelf, width } =
      palletShelfStore;
    palletShelfStore.summary.finalPrice =
      palletShelfStore.summary.basePrice +
      (depth.additionalPrice ?? 0) +
      (height.additionalPrice ?? 0) +
      (width.additionalPrice ?? 0) +
      (shelf.shelfs.additionalCost ?? 0) +
      (shelf.material.additionalCost ?? 0) +
      (frame.additionalCost ?? 0) +
      (legs.additionalCost ?? 0) +
      (accessories.installationKit.selected
        ? accessories.installationKit.additionalCost
        : 0) +
      (accessories.shelfStrengthen.selected
        ? accessories.shelfStrengthen.additionalCost
        : 0);
  };

  const setTab = (tab: PalletShelfConfigurationTab) => {
    palletShelfStore.currentTab = tab;
  };

  const setShelfAmount = (amount: number) => {
    const { additionItemPrice, itemsIncludeInPrice } =
      palletShelfStore.shelf.shelfs;
    palletShelfStore.shelf.shelfs.amount = amount;
    palletShelfStore.shelf.shelfs.additionalCost =
      amount > itemsIncludeInPrice
        ? (amount - itemsIncludeInPrice) * additionItemPrice
        : undefined;

    recalculatePrice();
  };

  const setShelfMaterial = (material: PalletShelfMaterial) => {
    palletShelfStore.shelf.material.current = material;
    palletShelfStore.shelf.material.additionalCost =
      palletShelfMaterialConfig[material].additionalCost;

    recalculatePrice();
  };

  const setSize = (field: "depth" | "width" | "height", value: number) => {
    const { additionalPricePerStep, minSize, step } = palletShelfStore[field];

    palletShelfStore[field].value = value;

    palletShelfStore[field].additionalPrice =
      ((value - minSize) / step) * additionalPricePerStep;

    recalculatePrice();
  };

  const setFrameColor = (color: FrameColors) => {
    palletShelfStore.frame.colorKey = color;
    palletShelfStore.frame.hexColor = frameColorsConfig[color].color;
    palletShelfStore.frame.additionalCost =
      frameColorsConfig[color].additionalCost;

    recalculatePrice();
  };

  const setLegsColor = (color: LegsColors) => {
    palletShelfStore.legs.colorKey = color;
    palletShelfStore.legs.hexColor = legsColorsConfig[color].color;
    palletShelfStore.legs.additionalCost =
      legsColorsConfig[color].additionalCost;

    recalculatePrice();
  };

  const setAccessories = (key: PalletShelfAccessories, value: boolean) => {
    palletShelfStore.accessories[key].selected = value;

    recalculatePrice();
  };

  const showSizes = () => {
    palletShelfStore.showSizes = true;
  };

  const hideSizes = () => {
    palletShelfStore.showSizes = false;
  };

  return {
    setTab,
    setShelfAmount,
    setShelfMaterial,
    setLegsColor,
    setFrameColor,
    setSize,
    setAccessories,
    showSizes,
    hideSizes,
  };
};
