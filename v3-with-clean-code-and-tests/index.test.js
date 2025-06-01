import {
    FinancialLimits,
    AlertMessages,
    expensesMaxLimit,
    formatCurrency,
    calculateTotal,
    generateExpenseReport,
    evaluateFinancialStatus,
    getFinancialAlert,
    generateFinancialReport
} from './index.js';

describe('FormatCurrency function', () => {
  it.each([
    [1000, 'R$ 1000.00'],
    [1234.56, 'R$ 1234.56'],
    [0.99, 'R$ 0.99'],
  ])('should formats integer value %s to be %s', (value, expected) => {
    const result = formatCurrency(value);
    expect(result).toBe(expected);
  });

  it('should handle negative values correctly', () => {
    const result = formatCurrency(-1234.56);
    expect(result).toBe('R$ -1234.56');
  });

  it('should handle zero value correctly', () => {
    const result = formatCurrency(0);
    expect(result).toBe('R$ 0.00');
  });
});

describe('CalculateTotal function', () => {
  it('should calculates the total of an array of expenses', () => {
    const expenses = [
      { name: 'Aluguel', value: 1000 },
      { name: 'Internet', value: 200 },
      { name: 'Transporte', value: 400 },
      { name: 'Café', value: 90.5 },
      { name: 'Limpeza', value: 120 },
    ];

    const expected = 1810.5;

    const result = calculateTotal(expenses);

    expect(result).toBe(expected);
  });

  it('should return 0 for an empty array', () => {
    const expenses = [];
    const result = calculateTotal(expenses);
    expect(result).toBe(0);
  });

  it('should handle expenses with negative values', () => {
    const expenses = [
      { name: 'Refund', value: -200 },
      { name: 'Internet', value: 200 },
    ];
    const result = calculateTotal(expenses);
    expect(result).toBe(0);
  });
});

describe('EvaluateFinancialStatus function', () => {
  it.each([
    [1820.5, 'CONTROLADA'],
    [3001, 'ESTOURO DE CUSTO'],
  ])('should evaluates the financial status of total expenses %s to be %s', (value, expected) => {
    const result = evaluateFinancialStatus(value, expensesMaxLimit);
    expect(result).toBe(expected);
  });

  it('should return "CONTROLADA" for total equal to expensesMaxLimit', () => {
    const result = evaluateFinancialStatus(3000, expensesMaxLimit);
    expect(result).toBe('CONTROLADA');
  });
});

describe('GetFinancialAlert function', () => {
  it.each([
    [1820.5, 'Gastos moderados, dentro da média.'],
    [10000, 'CRÍTICO: A empresa pode falir!'],
  ])('should evaluates the financial status of total expenses %s to be %s', (value, expected) => {
    const result = getFinancialAlert(value);
    expect(result).toBe(expected);
  });

  it('should return default message for total within normal range', () => {
    const result = getFinancialAlert(2500);
    expect(result).toBe(AlertMessages.NEAR_LIMIT);
  });

  it('should handle total exactly at critical limit', () => {
    const result = getFinancialAlert(FinancialLimits.CRITICAL);
    expect(result).toBe(AlertMessages.CRITICAL);
  });
});

describe('GenerateExpenseReport function', () => {
  it('should generates the expense report', () => {
    const expenses = [
      { name: 'Aluguel', value: 1000 },
      { name: 'Internet', value: 200 },
      { name: 'Transporte', value: 400 },
      { name: 'Café', value: 90.5 },
      { name: 'Limpeza', value: 120 },
    ];

    const expected = `* Relatório de Despesas Empresarial *
- Aluguel: R$ 1000.00
- Internet: R$ 200.00
- Transporte: R$ 400.00
- Café: R$ 90.50
- Limpeza: R$ 120.00
Total gasto: R$ 1810.50`;

    const result = generateExpenseReport(expenses);

    expect(result).toBe(expected);
  });

  it('should handle empty expenses list', () => {
    const expenses = [];
    const expected = `* Relatório de Despesas Empresarial *\nTotal gasto: R$ 0.00`;
    const result = generateExpenseReport(expenses);
    expect(result).toBe(expected);
  });
});
