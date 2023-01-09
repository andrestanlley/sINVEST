import axios from 'axios';

const apikey = import.meta.env.VITE_APIKEY;

const api = axios.create({
  baseURL: 'https://api.polygon.io/v3/reference/',
  params: { apikey, sort: 'last_updated_utc' },
});

const getTickers = async () => {
  return await api.get('tickers');
};

const getTickerDetail = async (ticker) => {
  return await api.get(`tickers/${ticker}`);
};

export { getTickers, getTickerDetail };
