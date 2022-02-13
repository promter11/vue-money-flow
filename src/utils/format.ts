const formatNumber = (value: number, locale = "ru-RU"): string => {
  return value.toLocaleString(locale, { minimumFractionDigits: 2 });
};

export { formatNumber };
