export const Filters = {
    VALORDEMERCADO: [{
            label: 'Valor de mercado'
        },
        {
            value: 5000000000,
            label: 'Acima de 5B'
        },
        {
            value: 10000000000,
            label: 'Acima de 10B'
        },
        {
            value: 50000000000,
            label: 'Acima de 50B'
        },
        {
            value: 100000000000,
            label: 'Acima de 100B'
        }
    ],

    SETOR: [{
            label: 'Setor'
        },
        {
            value: "Saúde",
            label: 'Saúde'
        },
        {
            value: "Financeiro",
            label: 'Financeiro'
        },
        {
            value: "Comunicações",
            label: 'Comunicações'
        },
        {
            value: "Consumo Ciclico",
            label: 'Consumo Ciclico'
        },
        {
            value: "Consumo Não Ciclico",
            label: 'Consumo Não Ciclico'
        },
        {
            value: "Bens Industriais",
            label: 'Bens Industriais'
        },
        {
            value: "Utilidade Pública",
            label: 'Utilidade Pública'
        },
        {
            value: "Materiais Básicos ",
            label: 'Materiais Básicos '
        },
        {
            value: "Tecnologia da Informação",
            label: 'Tecnologia da Informação'
        },
        {
            value: "Petróleo, Gás e Biocombustíveis",
            label: 'Petróleo, Gás e Biocombustíveis'
        },
    ],

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
        }
    ],


    PRECODAACAO: [{
            value: '',
            label: 'Preço da ação'
        },
        {
            value: 'E5E15',
            label: 'Entre R$5,00 e R$15,00'
        },
        {
            value: 'E15E30',
            label: 'Entre R$15,00 e R$30,00'
        }, {
            value: 'E30E50',
            label: 'Entre R$30,00 e R$50,00'
        }, {
            value: 'E50E100',
            label: 'Entre R$ 50,00 e R$100,00'
        }, {
            value: 'A100',
            label: 'Acima de R$100,00'
        }
    ],

    VARMENSAL: [{
        value: '',
        label: 'Variacão mensal'
    }, {
        value: 'I10',
        label: 'Abaixo de -10%'
    }, {
        value: 'EA10E1',
        label: 'Entre -10% e 1%'
    }, {
        value: 'I1',
        label: 'Abaixo de 1%'
    }, {
        value: 'A1',
        label: 'Acima de 1%'
    }, {
        value: 'E1E10',
        label: 'Entre 1% e 10%'
    }, {
        value: 'A10',
        label: 'Acima de 10%'
    }, {
        value: 'E10E20',
        label: 'Entre 10% e 20%'
    }, {
        value: 'A20',
        label: 'Acima de 20%'
    }],

    VAR12MES: [{
        value: '',
        label: 'Variação em 12 meses'
    }, {
        value: 'I10',
        label: 'Abaixo de -10%'
    }, {
        value: 'EA10E1',
        label: 'Entre -10% e 1%'
    }, {
        value: 'I1',
        label: 'Abaixo de 1%'
    }, {
        value: 'A1',
        label: 'Acima de 1%'
    }, {
        value: 'E1E10',
        label: 'Entre 1% e 10%'
    }, {
        value: 'A10',
        label: 'Acima de 10%'
    }, {
        value: 'E10E20',
        label: 'Entre 10% e 20%'
    }, {
        value: 'A20',
        label: 'Acima de 20%'
    }],

    PL: [{
            label: 'P/L (Preço sobre lucro)'
        },
        {
            value: 'I0',
            label: 'Abaixo de 0'
        },
        {
            value: 'I10',
            label: 'Abaixo de 10'
        },
        {
            value: 'I15',
            label: 'Abaixo de 15'
        },
        {
            value: 'I20',
            label: 'Abaixo de 20'
        },
        {
            value: 'I35',
            label: 'Abaixo de 35'
        },
        {
            value: 'I50',
            label: 'Abaixo de 50'
        },
        {
            value: 'A0',
            label: 'Acima de 0'
        },
        {
            value: 'A10',
            label: 'Acima de 10'
        },
        {
            value: 'A20',
            label: 'Acima de 20'
        },
        {
            value: 'A35',
            label: 'Acima de 35'
        },
        {
            value: 'A50',
            label: 'Acima de 50'
        }
    ],


    MARGEMLIQUIDA: [{
            label: 'Margem líquida'
        },
        {
            value: 'I10',
            label: 'Abaixo de 10%'
        },
        {
            value: 'E10E20',
            label: 'Entre 10% e 20%'
        },
        {
            value: 'E20E35',
            label: 'Entre 20% e 35%'
        },
        {
            value: 'A35',
            label: 'Maior que 35%'
        }
    ],

    // MARGEMEBIT: [{
    //     value: '',
    //     label: 'Margem EBIT'
    // }],

    // ROE: [{
    //     value: '',
    //     label: 'ROE'
    // }],

    // LIQUIDEZCORRENT: [{
    //     value: '',
    //     label: 'Liquidez corrente'
    // }],

    // AVALAVANCAGEM: [{
    //     value: '',
    //     label: 'Índice de alavancagem'
    // }],

    // LUCROLIQUIDO: [{
    //     value: '',
    //     label: 'Lucro líquido anual'
    // }],

    // FATURAMENTO: [{
    //     value: '',
    //     label: 'Faturamento anual'
    // }],

    // EBITANUAL: [{
    //     value: '',
    //     label: 'EBIT anual'
    // }]
}