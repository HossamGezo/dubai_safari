const USD_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});

const currencyFormat = (value: number | string | undefined | null) => {
  const amount = Number(value) || 0;
  return USD_FORMATTER.format(amount);
};

export default currencyFormat;