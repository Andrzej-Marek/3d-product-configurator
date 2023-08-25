import formatNumber from "./formatNumber";
import { getVarietyOption } from "./getVarietyOption";

export const getVariety = (
  value: number,
  singular: string,
  plural: string,
  genitive?: string
) =>
  `${formatNumber(value, false)} ${getVarietyOption(
    value,
    singular,
    plural,
    genitive
  )}`;
