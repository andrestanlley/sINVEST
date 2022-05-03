import moneyInText from "../../functions/moneyInText"

export default function ValorDeMercado(props){
    const valor = props.valor
    return (
        <section id='VALORDEMERCADO'>
            <div id='Titulo'>
                <img src="../../assets/imgs/icon-money.png" alt="Ícone valor" />
                <h1>Market Cap<span>Valor de mercado</span></h1>
                </div>
            <div id='Valor'>
                <span>{moneyInText(valor)}</span>
                <p>{valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</p>
            </div>
        </section>
    )
}