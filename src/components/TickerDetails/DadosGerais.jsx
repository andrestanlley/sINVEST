import { MdLabel } from 'react-icons/md';

export default function DadosGerais(ticker) {
  return (
    <section id="INFO">
      <p id="data">{ticker?.ticker}</p>
      <p id="NOMEEMPRESA">{ticker?.name}</p>
      <p id="SETOR">{ticker?.sic_description}</p>
      <p id="DESCRICAO">{ticker?.description}</p>
      <div id="CVM-CNPJ">
        <span>
          Exchange <span>{ticker?.primary_exchange}</span>
        </span>
        <span>
          CIK <span>{ticker?.cik}</span>
        </span>
      </div>
      {ticker?.homepage_url && (
        <a href={ticker?.homepage_url} id="SITE" target="_blank">
          <MdLabel className="icon" />
          {ticker?.homepage_url}{' '}
        </a>
      )}
    </section>
  );
}
