export const getVarietyOption = (
  value: number,
  singular: string,
  plural: string,
  genitive?: string
): string => {
  if (value === 1) {
    return singular;
  }

  if ([2, 3, 4].includes(value % 10) && ![12, 13, 14].includes(value % 100)) {
    return plural;
  }

  return genitive || plural;
};
