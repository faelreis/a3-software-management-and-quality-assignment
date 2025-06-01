const FinancialLimits = {
    CRITICAL: 7000,
    SEVERE: 6000,
    VERY_HIGH: 5000,
    ATTENTION_CONTRACTS: 4500,
    HIGH: 4000,
    EVALUATE_TRANSPORT: 3500,
    NEAR_LIMIT: 3000,
    MILD_ATTENTION: 2500,
    MODERATE: 2000,
    EXCELLENT: 1000
};

const AlertMessages = {
    CRITICAL: "CRÍTICO: A empresa pode falir!",
    SEVERE: "Gravíssimo, gastos insustentáveis.",
    VERY_HIGH: "ALERTA: Corte imediato necessário.",
    HIGH: "Atenção: Gastos MUITO acima do esperado!",
    EVALUATE_TRANSPORT: "Avaliar gastos com transporte e utilidades.",
    EXCELLENT: "Excelente controle de custos!",
    MODERATE: "Gastos moderados, dentro da média.",
    MILD_ATTENTION: "Atenção leve: gastos crescendo.",
    NEAR_LIMIT: "Quase atingindo o limite superior, cuidado!",
    DEFAULT: "Gastos controlados, mas podem ser otimizados."
};

// Função para calcular o total das despesas usando reduce
function calculateTotal(expensesList) {
  return expensesList.reduce((total, expense) => total + expense.value, 0);
}

// Função para formatar um valor para o formato de moeda (R$)
function formatCurrency(value) {
  return `R$ ${value.toFixed(2)}`;
}

function generateExpenseReport (expenses) {
    const reportHeader = "* Relatório de Despesas Empresarial *";
    const expenseLines = expenses.map(
      expense => `- ${expense.name}: ${formatCurrency(expense.value)}`
    );
    const totalLine = `Total gasto: ${formatCurrency(calculateTotal(expenses))}`;
    
    return [reportHeader, ...expenseLines, totalLine].join('\n');
}

// Função para avaliar a situação financeira com base no total gasto
function evaluateFinancialStatus(total, expensesMaxLimit) {
  return total > expensesMaxLimit ? "ESTOURO DE CUSTO" : "CONTROLADA";
}

// Função para retornar o alerta financeiro com base no total gasto
function getFinancialAlert(total) {
  if (total >= FinancialLimits.CRITICAL) return AlertMessages.CRITICAL;
  if (total > FinancialLimits.SEVERE) return AlertMessages.SEVERE;
  if (total > FinancialLimits.VERY_HIGH) return AlertMessages.VERY_HIGH;
  if (total > FinancialLimits.ATTENTION_CONTRACTS) return AlertMessages.ATTENTION_CONTRACTS;
  if (total > FinancialLimits.HIGH) return AlertMessages.HIGH;
  if (total > FinancialLimits.EVALUATE_TRANSPORT) return AlertMessages.EVALUATE_TRANSPORT;
  if (total < FinancialLimits.EXCELLENT) return AlertMessages.EXCELLENT;
  if (total < FinancialLimits.MODERATE) return AlertMessages.MODERATE;
  if (total < FinancialLimits.MILD_ATTENTION) return AlertMessages.MILD_ATTENTION;
  if (total < FinancialLimits.NEAR_LIMIT) return AlertMessages.NEAR_LIMIT;

  return AlertMessages.DEFAULT;
}

// Função principal para orquestrar a geração do relatório financeiro
function generateFinancialReport(expenses, expensesMaxLimit) {
  const totalExpenses = calculateTotal(expenses);

  console.log(generateExpenseReport(expenses));
  console.log("Situação:", evaluateFinancialStatus(totalExpenses, expensesMaxLimit));
  console.log("Alerta:", getFinancialAlert(totalExpenses));
}

const expensesMaxLimit = 3000;

const initialExpenses = [
    { name: "Aluguel", value: 1500 },
    { name: "Internet", value: 200 },
    { name: "Transporte", value: 400 },
    { name: "Café", value: 90.5 },
    { name: "Limpeza", value: 120 },
];

// Executa o report
generateFinancialReport(initialExpenses, expensesMaxLimit);

export {
    FinancialLimits,
    AlertMessages,
    expensesMaxLimit,
    formatCurrency,
    calculateTotal,
    generateExpenseReport,
    evaluateFinancialStatus,
    getFinancialAlert,
    generateFinancialReport
};
