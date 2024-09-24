var notas = [100, 50, 10]; // notas disponíveis

function realizaSaque() {
    console.log("Seja bem-vindo(a) ao nosso terminal eletrônico");
    console.log("Por conta do período, informamos que no momento possuímos apenas notas de 10, 50 e 100 para eventuais saques.");

    var quantiaSolicitada = parseInt(prompt("Por favor, digite a quantia que será retirada"));

    // Verifica se a quantia é um número válido, positivo e múltiplo de 10
    if (isNaN(quantiaSolicitada) || quantiaSolicitada <= 0) {
        console.log("Saque não autorizado! A quantia solicitada deve ser um número válido e positivo.");
    } else if (quantiaSolicitada % 10 === 0) {
        console.log("Saque autorizado!");

        // Percorre as notas disponíveis, começando pela maior
        for (var i = 0; i < notas.length; i++) {
            var qtdNotas = Math.floor(quantiaSolicitada / notas[i]); // Calcula a quantidade de notas de cada valor
            quantiaSolicitada = quantiaSolicitada % notas[i]; // Atualiza a quantiaSolicitada com redução do valor que ainda falta ser dividido pelas demais notas

            if (qtdNotas > 0) {
                console.log("O valor será retirado em " + qtdNotas + " notas de " + notas[i] + " reais.");
            }
        }
        
        console.log("Por favor, retire seu dinheiro abaixo.");
        
        // Pergunta ao usuário se deseja realizar outro saque
        var novaOp = prompt("Digite Y para realizar outro saque ou qualquer outra tecla para encerrar");

        if (novaOp === "Y" || novaOp === "y") { // Aceita tanto "Y" quanto "y" para facilitar
            realizaSaque(); // Recursão para permitir novo saque
        } else {
            console.log("Atendimento encerrado. Obrigado por usar nosso terminal.");
        }

    } else {
        console.log("Saque não autorizado! A quantia solicitada deve ser múltiplo de 10.");
    }
}

// Inicia o atendimento
realizaSaque();




