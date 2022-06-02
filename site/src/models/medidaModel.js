var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}  idMonitoramento ,temperatura,  umidade,  data_hora,
                        CONVERT(varchar, data_hora, 108) as data_grafico
                    from historico_monitoramento
                    where fk_sensor = ${idAquario}
                    order by idMonitoramento desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select  idMonitoramento ,temperatura, umidade, data_hora,
                        DATE_FORMAT(data_hora,'%H:%i:%s') as data_grafico
                    from historico_monitoramento
                    where fk_sensor = ${idAquario}
                    order by idMonitoramento desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1  idMonitoramento ,temperatura, umidade,  
                        CONVERT(varchar, data_hora, 108) as data_grafico from historico_monitoramento where fk_sensor = ${idAquario} 
                    order by idMonitoramento desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select  idMonitoramento,temperatura,umidade,
                        DATE_FORMAT(data_hora,'%H:%i:%s') as data_grafico, fk_sensor from historico_monitoramento where fk_sensor = ${idAquario} 
                    order by idMonitoramento desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function relatorio(idAquario,dia_inicio,dia_fim,mes_atual){

instrucaoSql = ""

if(process.env.AMBIENTE_PROCESSO == 'producao'){
    instrucaoSql = `select min(temperatura) as 'tempminima',round(avg(temperatura),2) as 'tempMedia',max(temperatura) as 'tempMaxima',
    min(umidade)as 'UmiMinima',round(avg(umidade),2) as 'UmiMedia',max(umidade) as 'UmiMaxima'
     from historico_monitoramento where data_hora >= '2022-0${mes_atual}-${dia_inicio}'and data_hora <= '2022-0${mes_atual}-${dia_fim}' and fk_sensor = ${idAquario};`
    }
 else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql =`select min(temperatura) as 'tempminima',round(avg(temperatura),2) as 'tempMedia',max(temperatura) as 'tempMaxima',
    min(umidade)as 'UmiMinima',round(avg(umidade),2) as 'UmiMedia',max(umidade) as 'UmiMaxima'
     from historico_monitoramento where data_hora >= '2022-0${mes_atual}-${dia_inicio}'and data_hora <= '2022-0${mes_atual}-${dia_fim}' and fk_sensor = ${idAquario};`
}
 else {
    console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    return
}

console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    relatorio
}
