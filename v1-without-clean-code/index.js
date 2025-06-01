var d = [
    {n: "Aluguel", v: 1500},
    {n: "Internet", v: 200},
    {n: "Transporte", v: 400},
    {n: "Café", v: 90.5},
    {n: "Limpeza", v: 120}
];

function rel(){
    var t = 0;
    for(var i=0;i<d.length;i++){
        t += d[i].v;
    }

    console.log("* Relatório de Despesas Empresarial *");
    for(var i=0;i<d.length;i++){
        console.log("- " + d[i].n + ": R$ " + d[i].v.toFixed(2));
    }
    console.log("Total gasto: R$ " + t.toFixed(2));

    if(t > 3000){
        console.log("Situação: NEGATIVA");
        if(t > 4000){
            console.log("Atenção: Gastos MUITO acima do esperado!");
            if(t > 5000){
                console.log("ALERTA: Corte imediato necessário.");
                if(t > 7000){
                    console.log("CRÍTICO: A empresa pode falir!");
                } else {
                    if(t > 6000){
                        console.log("Gravíssimo, gastos insustentáveis.");
                    } else {
                        console.log("Muito alto, mas não crítico ainda.");
                    }
                }
            } else {
                if(t > 4500){
                    console.log("Revise os contratos de aluguel e serviços.");
                } else {
                    console.log("Avaliar gastos com transporte e utilidades.");
                }
            }
        } else {
            if(t > 3500){
                console.log("Monitorar os custos do próximo trimestre.");
            } else {
                console.log("Acima do ideal, mas controlável.");
            }
        }
    } else {
        console.log("Situação: POSITIVA");
        if(t < 1000){
            console.log("Excelente controle de custos!");
        } else {
            if(t < 2000){
                console.log("Gastos moderados, dentro da média.");
            } else {
                if(t < 2500){
                    console.log("Atenção leve: gastos crescendo.");
                } else {
                    console.log("Quase atingindo o limite superior, cuidado!");
                }
            }
        }
    }
}

rel();
