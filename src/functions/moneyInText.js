export default function moneyInText(value) {
  const { symbol, tinyValue } = getValueInfo(value);
  return `${tinyValue.toFixed(0)} ${symbol}`;
}

const getValueInfo = (value) => {
  const trillion = 1000000000000;
  const billion = 1000000000;
  const million = 1000000;
  if (value >= trillion) return { symbol: 'T', tinyValue: value / trillion };
  if (value >= billion) return { symbol: 'B', tinyValue: value / billion };
  return { symbol: 'KK', tinyValue: value / million };
};
