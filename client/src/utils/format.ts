import { Currency } from "@/interfaces";

const formatNumber = (
  balance: { currency: Currency; value: number },
  locale = "ru-RU"
): string => {
  return new Intl.NumberFormat(locale, {
    currency: balance.currency,
    style: "currency",
  }).format(balance.value);
};

export { formatNumber };
