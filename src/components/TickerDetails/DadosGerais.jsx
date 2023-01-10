import ValorDeMercado from './ValorDeMercado';

export default function DadosGerais(ticker) {
  return (
    <section id="INFO">
      <p id="data">{ticker?.symbol}</p>
      <p id="NOMEEMPRESA">{ticker?.longName}</p>
      <p id="SETOR">{ticker?.Industry}</p>
      <p id="DESCRICAO">{ticker?.Description}</p>
      <div id="CVM-CNPJ">
        <span>
          Exchange <span>{ticker?.Exchange}</span>
        </span>
        <span>
          CIK <span>{ticker?.CIK}</span>
        </span>
        <ValorDeMercado value={Number(ticker?.marketCap)} />
      </div>
    </section>
  );
}
