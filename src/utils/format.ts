const formatNumber = (value: number, locale = "en-US"): string => {
  return value.toLocaleString(locale, { minimumFractionDigits: 2 });
};

export { formatNumber };
