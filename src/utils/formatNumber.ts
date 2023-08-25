const formatNumber = (num: number, precision: false | number = 2): string =>
  num
    .toFixed(precision || 0)
    .replace(precision ? /\d(?=(\d{3})+\.)/g : /(.)(?=(\d{3})+$)/g, "$&\xa0")
    .replace(".", ",");

export default formatNumber;

export const formatNip = (nip: string): string =>
  nip.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1-$2-$3-$4");

export const formatPhoneNumber = (phoneNumber: string | number): string =>
  formatNumber(+phoneNumber, false);

export const formatWithComma = (
  num: number | undefined,
  precision: "auto" | number = "auto"
): string | undefined => {
  if (num === undefined) {
    return;
  }

  if (precision === "auto") {
    const [, dec] = `${num}`.split(/[,.]/);
    if (dec) {
      return num.toFixed(dec.length).replace(".", ",");
    }
    return num.toFixed(0);
  }

  return num
    .toFixed(precision)
    .replace(".", ",")
    .replace(/([0-9]+(,[0-9]+[1-9])?)(,?0+$)/, "$1");
};

export const formatWithDot = (
  num: string,
  precision?: number
): number | undefined => {
  const number = num.replace(/[^0-9,.]+/, "").replace(",", ".");

  if (number === "" || !Number.isFinite(+number)) {
    return;
  }

  if (precision !== undefined) {
    return +(+number).toFixed(precision);
  }

  return +number;
};

export const formatPercentage = (value: number): string =>
  `${formatNumber(value * 100)}%`;

export const formatRebate = (beforeDiscount: number, afterDiscount: number) =>
  formatPercentage(1 - afterDiscount / beforeDiscount);
