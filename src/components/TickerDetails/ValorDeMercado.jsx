export default function ValorDeMercado({ value }) {
  return (
    <div id="VALORDEMERCADO">
      <h1>Valor de mercado</h1>
      <p>
        {value.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
    </div>
  );
}
