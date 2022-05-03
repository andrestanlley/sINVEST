import { MdLabel } from "react-icons/md";


export default function DadosGerais(props){
    const DescricaoDoAtivo = props.DescricaoDoAtivo
    const DadosEmpresa = props.DadosEmpresa
    const ClassificacaoSetorial = props.ClassificacaoSetorial

    return (
        <section id='INFO'>
                <p id='data'>{DescricaoDoAtivo.Codigo}</p>
                <p id='NOMEEMPRESA'>{DadosEmpresa ? DadosEmpresa.NomeEmpresarial : DescricaoDoAtivo.NomeMercado}</p>
                <p id='SETOR'>{ClassificacaoSetorial.Setor} • {DadosEmpresa?.EspeciControle}</p>
                <p id='DESCRICAO'>{DadosEmpresa?.DescricaoAtividade}</p>
                {DadosEmpresa && (
                  <div id='CVM-CNPJ'>
                    <span>Cod CVM <span>{DadosEmpresa?.CodCvm}</span></span>
                    <span>CNPJ <span>{DadosEmpresa?.CNPJ}</span></span>
                  </div>
                )}
                {DadosEmpresa?.Site && (
                  <a href={DadosEmpresa?.Site.indexOf("//") > 0 ? DadosEmpresa?.Site : `http://${DadosEmpresa?.Site}`} id="SITE" target="_blank"><MdLabel className='icon' />{DadosEmpresa?.Site}    </a>
                )}
              </section>
    )
}