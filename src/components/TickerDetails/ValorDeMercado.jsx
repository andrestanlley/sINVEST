export default function ValorDeMercado({ value, currency }) {
  return (
    <div id="VALORDEMERCADO">
      <h1>Valor de mercado</h1>
      <p>
        {isNaN(value)
          ? 'Não informado.'
          : value.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency,
            })}
      </p>
    </div>
  );
}
