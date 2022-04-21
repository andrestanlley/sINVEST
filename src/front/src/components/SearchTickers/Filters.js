export const Filters = {
    VALORDEMERCADO: [
        { label: 'Valor de mercado' },
        { value: 5000000000, label: 'Acima de 5B' },
        { value: 10000000000, label: 'Acima de 10B' },
        { value: 50000000000, label: 'Acima de 50B' },
        { value: 100000000000, label: 'Acima de 100B' }
    ],

    SETOR: [
        {label: 'Setor'},
        {value: "Saúde", label: 'Saúde'},
        {value: "Financeiro", label: 'Financeiro'},
        {value: "Comunicações", label: 'Comunicações'},
        {value: "Consumo Ciclico", label: 'Consumo Ciclico'},
        {value: "Consumo Não Ciclico", label: 'Consumo Não Ciclico'},
        {value: "Bens Industriais", label: 'Bens Industriais'},
        {value: "Utilidade Pública", label: 'Utilidade Pública'},
        {value: "Materiais Básicos ", label: 'Materiais Básicos '},
        {value: "Tecnologia da Informação", label: 'Tecnologia da Informação'},
        {value: "Petróleo, Gás e Biocombustíveis", label: 'Petróleo, Gás e Biocombustíveis'},
],

    PRECODAACAO: [{
        value: '',
        label: 'Preço da ação'
    }],

    PL: [{
        value: '',
        label: 'Patrimônio líquido'
    }],

    ROE: [{
        value: '',
        label: 'ROE'
    }],

    MARGEMLIQUIDA: [{
        value: '1',
        label: 'Margem líquida'
    }],

    MARGEMEBIT: [{
        value: '',
        label: 'Margem EBIT'
    }],

    LIQUIDEZCORRENT: [{
        value: '',
        label: 'Liquidez corrente'
    }],

    AVALAVANCAGEM: [{
        value: '',
        label: 'Índice de alavancagem'
    }],

    LUCROLIQUIDO: [{
        value: '',
        label: 'Lucro líquido anual'
    }],

    FATURAMENTO: [{
        value: '',
        label: 'Faturamento anual'
    }],

    EBITANUAL: [{
        value: '',
        label: 'EBIT anual'
    }],

    VARSEMANAL: [{
        value: '',
        label: 'Variação semanal'
    }],

    VARMENSAL: [{
        value: '',
        label: 'Variacão mensal'
    }],

    VAR52SEM: [{
        value: '',
        label: 'Variação em 52 semanas'
    }],

    LIQUIDEZIMEDIATA: [{
        label: 'Liquidez imeadiata'
    },
    {
        value: "M1",
        label: 'Abaixo de 1'
    },
    {
        value: "I1",
        label: 'Igual a 1'
    },
    {
        value: "A1",
        label: 'Maior que 1'
    }],

    
}
