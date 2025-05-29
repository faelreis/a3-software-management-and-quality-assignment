# Clean code v2

## Descrição
Este repositório contém um conjunto de funções e testes relacionados à gestão financeira empresarial. O código foi projetado para calcular despesas, gerar relatórios financeiros, avaliar a situação financeira e emitir alertas com base em limites predefinidos.

## Funcionalidades
- **Cálculo de Total de Despesas**: Soma os valores de uma lista de despesas.
- **Formatação de Moeda**: Formata valores numéricos para o padrão monetário brasileiro (R$).
- **Geração de Relatórios de Despesas**: Cria um relatório detalhado com as despesas e o total gasto.
- **Avaliação da Situação Financeira**: Determina se os gastos estão controlados ou excederam o limite.
- **Alertas Financeiros**: Emite mensagens de alerta com base nos gastos totais.

## Estrutura do Projeto
- `index.js`: Contém as funções principais do projeto.
- `index.test.js`: Inclui os testes unitários para validar as funções.
- `package.json`: Gerencia as dependências e scripts do projeto.

## Como Executar
1. Certifique-se de ter o Node.js instalado.
2. Instale as dependências executando:
   ```bash
   npm install
   ```
3. Execute os testes para validar o código:
   ```bash
   npm test
   ```
4. Para executar o código principal, utilize:
   ```bash
   node index.js
   ```

## Testes
Os testes unitários cobrem cenários comuns e casos de borda (edge cases), garantindo a confiabilidade das funções implementadas.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença
Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).