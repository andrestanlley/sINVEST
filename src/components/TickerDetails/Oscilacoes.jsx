import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function Oscilacoes({ data }) {
  const oscilacoes = data
    .sort((a, b) => b.date - a.date)
    .map((oscilacao) => {
      return {
        variacao: {
          open: oscilacao.open.toFixed(4),
          close: oscilacao.close.toFixed(4),
        },
        date: new Date(oscilacao.date * 1000).toLocaleDateString('pt-BR'),
      };
    });

  return (
      <>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={oscilacoes}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="date" scale="band" order={data} />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
          <Legend align="center" />
          <Line dataKey="variacao.open" name="Abertura" dot={false} />
          <Line
            dataKey="variacao.close"
            name="Fechamento"
            stroke="var(--verde)"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      </>
  );
}
