import axios from 'axios';

const api = axios.create({
  baseURL: 'https://brapi.dev/api/quote',
  params: { sortBy: 'market_cap_basic', sortOrder: 'desc' },
});

const getTickers = async () => {
  return await api.get('list');
};

const getTickerDetail = async (ticker) => {
  return await api.get(ticker, {
    params: {
      range: '1d',
      interval: '1d',
      fundamental: 'true',
    },
  });
};

export { getTickers, getTickerDetail };
