var db = {
	registros: [
		{		
			"Cod": 1,	
			"Data": "01/12/2022",	
			"Descriçao": "Compra de biscoito para lanche conforme NF em anexo via caixa nesta data",	
			"Valor": 800.00,	
			"Natureza": "Alimentação",	
			"ES": "S"
		},
		{		
			"Cod": 2,	
			"Data": "01/12/2022",	
			"Descriçao": "Pagamento de conta de luz conforme NF em anexo via caixa nesta data",	
			"Valor": 300.00,	
			"Natureza": "Infraestrutura",	
			"ES": "S"	
		},	
		{		
			"Cod": 3,	
			"Data": "04/08/2022",	
			"Descriçao": "Pagamento de conta de água conforme NF em anexo via caixa nesta data",	
			"Valor": 290.00,	
			"Natureza": "Infraestrutura",	
			"ES": "S"	
		},	
		{		
			"Cod": 4,	
			"Data": "05/08/2022",	
			"Descriçao": "Compra de matéria prima conforme NF em anexo via caixa nesta data",	
			"Valor": 3500,	
			"Natureza": "Custo",	
			"ES": "S"	
		},	
		{		
			"Cod": 5,	
			"Data": "09/08/2022",	
			"Descriçao": "Compra de matéria prima conforme NF em anexo via caixa nesta data",	
			"Valor": 6200,	
			"Natureza": "Custo",	
			"ES": "S"	
		},	
		{		
			"Cod": 6,	
			"Data": "09/08/2022",	
			"Descriçao": "Compra de matéria prima conforme NF em anexo via caixa nesta data",	
			"Valor": 4000,	
			"Natureza": "Custo",	
			"ES": "S"	
		},	
		{		
			"Cod": 7,	
			"Data": "10/08/2022",	
			"Descriçao": "Venda de mercadorias conforme NF em anexo via caixa nesta data",	
			"Valor": 2000,	
			"Natureza": "Receita",	
			"ES": "E"	
		},	
		{		
			"Cod": 8,	
			"Data": "11/08/2022",	
			"Descriçao": "Venda de mercadorias conforme NF em anexo via caixa nesta data",	
			"Valor": 4000,	
			"Natureza": "Receita",	
			"ES": "E"	
		},	
		{		
			"Cod": 9,	
			"Data": "11/08/2022",	
			"Descriçao": "Pagamento de salarios para coloboradores conforme NF em anexo via caixa nesta data",	
			"Valor": 1000,	
			"Natureza": "Mão-de-Obra",	
			"ES": "S"	
		},	
		{		
			"Cod": 10,	
			"Data": "12/08/2022",	
			"Descriçao": "Pagamento de frete conforme NF em anexo via caixa nesta data",	
			"Valor": 150.00,	
			"Natureza": "Transporte",	
			"ES": "S"	
		},	
		{		
			"Cod": 11,	
			"Data": "12/08/2022",	
			"Descriçao": "Venda de mercadorias conforme NF em anexo via caixa nesta data",	
			"Valor": 4500,	
			"Natureza": "Receita",	
			"ES": "E"	
		},	
		{		
			"Cod": 12,	
			"Data": "12/08/2022",	
			"Descriçao": "Pagamento de gasolina conforme NF em anexo via caixa nesta data",	
			"Valor": 320.00,	
			"Natureza": "Transporte",	
			"ES": "S"	
		},	
		{		
			"Cod": 13,	
			"Data": "16/08/2022",	
			"Descriçao": "Pagamento de aluguel do galpão conforme NF em anexo via caixa nesta data",	
			"Valor": 1200,	
			"Natureza": "Infraestrutura",	
			"ES": "S"	
		},	
		{		
			"Cod": 14,	
			"Data": "18/08/2022",	
			"Descriçao": "Pagamento de manutenção em móveis conforme NF em anexo via caixa nesta data",	
			"Valor": 170.00,	
			"Natureza": "Infraestrutura",	
			"ES": "S"	
		},	
		{		
			"Cod": 15,	
			"Data": "18/08/2022",	
			"Descriçao": "Venda de mercadorias conforme NF em anexo via caixa nesta data",	
			"Valor": 3905,	
			"Natureza": "Receita",	
			"ES": "E"	
		},	
		{		
			"Cod": 16,	
			"Data": "18/08/2022",	
			"Descriçao": "Venda de mercadorias conforme NF em anexo via caixa nesta data",	
			"Valor": 4204,	
			"Natureza": "Receita",	
			"ES": "E"	
		},	
		{		
			"Cod": 17,	
			"Data": "19/08/2022",	
			"Descriçao": "Compra de matéria prima conforme NF em anexo via caixa nesta data",	
			"Valor": 3000,	
			"Natureza": "Custo",	
			"ES": "S"	
		},	
		{		
			"Cod": 18,	
			"Data": "23/08/2022",	
			"Descriçao": "Compra de materiais de escritório conforme NF em anexo via caixa nesta data",	
			"Valor": 750.00,	
			"Natureza": "Administrativo",	
			"ES": "S"	
		},	
		{		
			"Cod": 19,	
			"Data": "23/08/2022",	
			"Descriçao": "Compra de material de limpeza conforme NF em anexo via caixa nesta data",	
			"Valor": 200.00,	
			"Natureza": "Infraestrutura",	
			"ES": "S"	
		},	
		{		
			"Cod": 20,	
			"Data": "23/08/2022",	
			"Descriçao": "Pagamento de serviços de marketing conforme NF em anexo via caixa nesta data",	
			"Valor": 220.00,	
			"Natureza": "Custo",	
			"ES": "S"	
		},	
		{		
			"Cod": 21,	
			"Data": "25/08/2022",	
			"Descriçao": "Venda de mercadorias conforme NF em anexo via caixa nesta data",	
			"Valor": 5000,	
			"Natureza": "Receita",	
			"ES": "E"	
		},	
		{		
			"Cod": 22,	
			"Data": "25/08/2022",	
			"Descriçao": "Pagamento de manutenção em equipamentos de informática conforme NF em anexo via caixa nesta data",	
			"Valor": 190.00,	
			"Natureza": "Infraestrutura",	
			"ES": "S"	
		},	
		{		
			"Cod": 23,	
			"Data": "25/08/2022",	
			"Descriçao": "Venda de mercadorias conforme NF em anexo via caixa nesta data",	
			"Valor": 2600,	
			"Natureza": "Receita",	
			"ES": "E"	
		},	
		{		
			"Cod": 24,	
			"Data": "29/08/2022",	
			"Descriçao": "Pagamento de frete conforme NF em anexo via caixa nesta data",	
			"Valor": 250.00,	
			"Natureza": "Transporte",	
			"ES": "S"	
		},	
		{		
			"Cod": 25,	
			"Data": "29/08/2022",	
			"Descriçao": "Compra de materia prima conforme NF em anexo via caixa nesta data",	
			"Valor": 5000,	
			"Natureza": "Custo",	
			"ES": "S"	
		},	
		{		
			"Cod": 26,	
			"Data": "30/08/2022",	
			"Descriçao": "Pagamento de gasolina conforme NF em anexo via caixa nesta data",	
			"Valor": 350.00,	
			"Natureza": "Transporte",	
			"ES": "S"	
		},	
		{		
			"Cod": 27,	
			"Data": "30/08/2022",	
			"Descriçao": "Pagamento de serviços de dedetização conforme NF em anexo via caixa nesta data",	
			"Valor": 120.00,	
			"Natureza": "Infraestrutura",	
			"ES": "S"	
		},	
		{		
			"Cod": 28,	
			"Data": "30/08/2022",	
			"Descriçao": "Compra de livros para aprendizagem conforme NF em anexo via caixa nesta data",	
			"Valor": 160.00,	
			"Natureza": "Administrativo",	
			"ES": "S"	
		},	
		{		
			"Cod": 29,	
			"Data": "30/08/2022",	
			"Descriçao": "Pagamento de curso para especialização conforme NF em anexo via caixa nesta data",	
			"Valor": 220.00,	
			"Natureza": "Administrativo",	
			"ES": "S"	
		},	
		{		
			"Cod": 30,	
			"Data": "30/08/2022",	
			"Descriçao": "Venda de mercadorias conforme NF em anexo via caixa nesta data",	
			"Valor": 5200,	
			"Natureza": "Receita",	
			"ES": "E"	
		},	
		{		
			"Cod": 31,	
			"Data": "01/09/2022",	
			"Descriçao": "Compra de biscoito para lanche conforme NF em anexo via caixa nesta data",	
			"Valor": 856.00,	
			"Natureza": "Alimentação",	
			"ES": "S"	
		},	
		{		
			"Cod": 32,	
			"Data": "01/09/2022",	
			"Descriçao": "Pagamento de conta de luz conforme NF em anexo via caixa nesta data",	
			"Valor": 321.00,	
			"Natureza": "Infraestrutura",	
			"ES": "S"	
		},	
		{		
			"Cod": 33,	
			"Data": "02/09/2022",	
			"Descriçao": "Pagamento de conta de água conforme NF em anexo via caixa nesta data",	
			"Valor": 310.30,	
			"Natureza": "Infraestrutura",	
			"ES": "S"	
		},	
		{		
			"Cod": 34,	
			"Data": "05/09/2022",	
			"Descriçao": "Compra de matéria prima conforme NF em anexo via caixa nesta data",	
			"Valor": 3745,	
			"Natureza": "Custo",	
			"ES": "S"	
		},	
		{		
			"Cod": 35,	
			"Data": "09/09/2022",	
			"Descriçao": "Compra de matéria prima conforme NF em anexo via caixa nesta data",	
			"Valor": 6634,	
			"Natureza": "Custo",	
			"ES": "S"	
		},	
		{		
			"Cod": 36,	
			"Data": "09/09/2022",	
			"Descriçao": "Compra de matéria prima conforme NF em anexo via caixa nesta data",	
			"Valor": 4280,	
			"Natureza": "Custo",	
			"ES": "S"	
		},	
		{		
			"Cod": 37,	
			"Data": "09/09/2022",	
			"Descriçao": "Venda de mercadorias conforme NF em anexo via caixa nesta data",	
			"Valor": 2100,	
			"Natureza": "Receita",	
			"ES": "E"	
		},	
		{		
			"Cod": 38,	
			"Data": "09/09/2022",	
			"Descriçao": "Venda de mercadorias conforme NF em anexo via caixa nesta data",	
			"Valor": 4200,	
			"Natureza": "Receita",	
			"ES": "E"	
		},	
		{		
			"Cod": 39,	
			"Data": "09/09/2022",	
			"Descriçao": "Pagamento de salarios para coloboradores conforme NF em anexo via caixa nesta data",	
			"Valor": 1070,	
			"Natureza": "Mão-de-Obra",	
			"ES": "S"	
		},	
		{		
			"Cod": 40,	
			"Data": "12/09/2022",	
			"Descriçao": "Pagamento de frete conforme NF em anexo via caixa nesta data",	
			"Valor": 160.50,	
			"Natureza": "Transporte",	
			"ES": "S"	
		},	
		{		
			"Cod": 41,	
			"Data": "12/09/2022",	
			"Descriçao": "Venda de mercadorias conforme NF em anexo via caixa nesta data",	
			"Valor": 4725,	
			"Natureza": "Receita",	
			"ES": "E"	
		},	
		{		
			"Cod": 42,	
			"Data": "12/09/2022",	
			"Descriçao": "Pagamento de gasolina conforme NF em anexo via caixa nesta data",	
			"Valor": 342.40,	
			"Natureza": "Transporte",	
			"ES": "S"	
		},	
		{		
			"Cod": 43,	
			"Data": "16/09/2022",	
			"Descriçao": "Pagamento de aluguel do galpão conforme NF em anexo via caixa nesta data",	
			"Valor": 1284,	
			"Natureza": "Infraestrutura",	
			"ES": "S"	
		},	
		{		
			"Cod": 44,	
			"Data": "19/09/2022",	
			"Descriçao": "Pagamento de manutenção em móveis conforme NF em anexo via caixa nesta data",	
			"Valor": 181.90,	
			"Natureza": "Infraestrutura",	
			"ES": "S"	
		},	
		{		
			"Cod": 45,	
			"Data": "19/09/2022",	
			"Descriçao": "Venda de mercadorias conforme NF em anexo via caixa nesta data",	
			"Valor": 4100.25,	
			"Natureza": "Receita",	
			"ES": "E"	
		},	
		{		
			"Cod": 46,	
			"Data": "19/09/2022",	
			"Descriçao": "Venda de mercadorias conforme NF em anexo via caixa nesta data",	
			"Valor": 4414.2,	
			"Natureza": "Receita",	
			"ES": "E"	
		},	
		{		
			"Cod": 47,	
			"Data": "19/09/2022",	
			"Descriçao": "Compra de matéria prima conforme NF em anexo via caixa nesta data",	
			"Valor": 3210,	
			"Natureza": "Custo",	
			"ES": "S"	
		},	
		{		
			"Cod": 48,	
			"Data": "23/09/2022",	
			"Descriçao": "Compra de materiais de escritório conforme NF em anexo via caixa nesta data",	
			"Valor": 802.50,	
			"Natureza": "Administrativo",	
			"ES": "S"	
		},	
		{		
			"Cod": 49,	
			"Data": "23/09/2022",	
			"Descriçao": "Compra de material de limpeza conforme NF em anexo via caixa nesta data",	
			"Valor": 214.00,	
			"Natureza": "Infraestrutura",	
			"ES": "S"	
		},	
		{		
			"Cod": 50,	
			"Data": "23/09/2022",	
			"Descriçao": "Pagamento de serviços de marketing conforme NF em anexo via caixa nesta data",	
			"Valor": 235.40,	
			"Natureza": "Custo",	
			"ES": "S"	
		},	
		{		
			"Cod": 51,	
			"Data": "26/09/2022",	
			"Descriçao": "Venda de mercadorias conforme NF em anexo via caixa nesta data",	
			"Valor": 5250,	
			"Natureza": "Receita",	
			"ES": "E"	
		},	
		{		
			"Cod": 52,	
			"Data": "26/09/2022",	
			"Descriçao": "Pagamento de manutenção em equipamentos de informática conforme NF em anexo via caixa nesta data",	
			"Valor": 203.30,	
			"Natureza": "Infraestrutura",	
			"ES": "S"	
		},	
		{		
			"Cod": 53,	
			"Data": "26/09/2022",	
			"Descriçao": "Venda de mercadorias conforme NF em anexo via caixa nesta data",	
			"Valor": 2730,	
			"Natureza": "Receita",	
			"ES": "E"	
		},	
		{		
			"Cod": 54,	
			"Data": "29/09/2022",	
			"Descriçao": "Pagamento de frete conforme NF em anexo via caixa nesta data",	
			"Valor": 267.50,	
			"Natureza": "Transporte",	
			"ES": "S"	
		},	
		{		
			"Cod": 55,	
			"Data": "29/09/2022",	
			"Descriçao": "Compra de materia prima conforme NF em anexo via caixa nesta data",	
			"Valor": 5350,	
			"Natureza": "Custo",	
			"ES": "S"	
		},	
		{		
			"Cod": 56,	
			"Data": "30/09/2022",	
			"Descriçao": "pagamento de gasolina conforme NF em anexo via caixa nesta data",	
			"Valor": 374.50,	
			"Natureza": "Transporte",	
			"ES": "S"	
		},	
		{		
			"Cod": 57,	
			"Data": "30/09/2022",	
			"Descriçao": "Pagamento de serviços de dedetização conforme NF em anexo via caixa nesta data",	
			"Valor": 128.40,	
			"Natureza": "Infraestrutura",	
			"ES": "S"	
		},	
		{		
			"Cod": 58,	
			"Data": "30/09/2022",	
			"Descriçao": "Compra de livros para aprendizagem conforme NF em anexo via caixa nesta data",	
			"Valor": 171.20,	
			"Natureza": "Administrativo",	
			"ES": "S"	
		},	
		{		
			"Cod": 59,	
			"Data": "30/09/2022",	
			"Descriçao": "Pagamento de curso para especialização conforme NF em anexo via caixa nesta data",	
			"Valor": 235.40,	
			"Natureza": "Administrativo",	
			"ES": "S"	
		},	
		{		
			"Cod": 60,	
			"Data": "30/09/2022",	
			"Descriçao": "Venda de mercadorias conforme NF em anexo via caixa nesta data",	
			"Valor": 5460,	
			"Natureza": "Receita",	
			"ES": "E"	
		}
	]			
}