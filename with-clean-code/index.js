const initialExpenses = [
  { name: "Aluguel", value: 1500 },
  { name: "Internet", value: 200 },
  { name: "Transporte", value: 400 },
  { name: "Café", value: 90.5 },
  { name: "Limpeza", value: 120 },
];

// Função para calcular o total das despesas usando reduce
function calculateTotal(expensesList) {
  return expensesList.reduce((total, expense) => total + expense.value, 0);
}

// Função para formatar um valor para o formato de moeda (R$)
function formatCurrency(value) {
  return `R$ ${value.toFixed(2)}`;
}

// Função para gerar o relatório de despesas
function generateReport(expenses) {
  console.log("* Relatório de Despesas Empresarial *");
  expenses.forEach(expense => {
    console.log(`- ${expense.name}: ${formatCurrency(expense.value)}`);
  });
  const totalSpent = calculateTotal(expenses);
  console.log("Total gasto:", formatCurrency(totalSpent));
  return totalSpent;
}

// Função para avaliar a situação financeira com base no total gasto
function evaluateFinancialStatus(total) {
  const status = total > 3000 ? "NEGATIVA" : "POSITIVA";
  console.log("Situação:", status);
  return status;
}

// Função para gerar alertas financeiros com base no total gasto
function generateFinancialAlerts(total) {
  const alerts = [];

  // Limites usados para avaliação dos alertas
  const limits = {
    highNegative: 4000,
    veryHighNegative: 5000,
    criticalNegative: 7000,
    severeNegative: 6000,
    attentionContractsNegative: 4500,
    evaluateTransportNegative: 3001,
    excellentPositive: 1000,
    moderatePositive: 2000,
    mildAttentionPositive: 2500,
    nearLimitPositive: 3000,
  };

  if (total > limits.criticalNegative) {
    alerts.push("CRÍTICO: A empresa pode falir!");
  }
  if (total > limits.severeNegative && total <= limits.criticalNegative) {
    alerts.push("Gravíssimo, gastos insustentáveis.");
  }
  if (total > limits.veryHighNegative && total <= limits.severeNegative) {
    alerts.push("ALERTA: Corte imediato necessário.");
  }
  if (total > limits.attentionContractsNegative && total <= limits.veryHighNegative) {
    alerts.push("Revise os contratos de aluguel e serviços.");
  }
  if (total > limits.highNegative && total <= limits.attentionContractsNegative) {
    alerts.push("Atenção: Gastos MUITO acima do esperado!");
  }
  if (total > limits.evaluateTransportNegative && total <= limits.highNegative) {
    alerts.push("Avaliar gastos com transporte e utilidades.");
  }
  if (total > 3000 && total <= limits.evaluateTransportNegative) {
    alerts.push("Acima do ideal, mas controlável.");
  }
  if (total < limits.excellentPositive) {
    alerts.push("Excelente controle de custos!");
  }
  if (total < limits.moderatePositive && total >= limits.excellentPositive) {
    alerts.push("Gastos moderados, dentro da média.");
  }
  if (total < limits.mildAttentionPositive && total >= limits.moderatePositive) {
    alerts.push("Atenção leve: gastos crescendo.");
  }
  if (total < limits.nearLimitPositive && total >= limits.mildAttentionPositive) {
    alerts.push("Quase atingindo o limite superior, cuidado!");
  }

  // Exibe todos os alertas gerados
  alerts.forEach(alert => console.log(alert));
}

// Função principal para orquestrar a geração do relatório financeiro
function generateFinancialReport(expenses) {
  const totalExpenses = generateReport(expenses);
  evaluateFinancialStatus(totalExpenses);
  generateFinancialAlerts(totalExpenses);
}

// Chamando a função principal com os dados iniciais de despesas
generateFinancialReport(initialExpenses);
