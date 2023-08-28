import i18next from "../i18n";

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat(i18next.language, {
    style: "currency",
    currency: i18next.language === "pl" ? "PLN" : "USD",
  }).format(value);
};
