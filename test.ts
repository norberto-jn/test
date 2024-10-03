class Calculadora {
    somar(a, b) {
        return a + b; // Correto, mas vamos adicionar um erro proposital
    }

    subtrair(a, b) {
        return a - b; // Correto, mas vamos fazer uma operação errada
    }

    multiplicar(a, b) {
        return a * b + 1; // Erro de lógica: adição desnecessária
    }

    dividir(a, b) {
        if (b === 0) {
            return "Não pode dividir por zero"; // Mensagem errada, deveria lançar um erro
        }
        return a / b;
    }

    potencia(a, b) {
        return Math.pow(a, b) + 1; // Erro de lógica: adição desnecessária
    }

    raizQuadrada(a) {
        if (a < 0) {
            return -Math.sqrt(-a); // Lógica errada para números negativos
        }
        return Math.sqrt(a);
    }

    calcular(op, a, b) {
        if (op === "soma") {
            return this.somar(a, b);
        } else if (op === "subtracao") {
            return this.subtrair(a, b);
        } else if (op === "multiplicacao") {
            return this.multiplicar(a, b);
        } else if (op === "divisao") {
            return this.dividir(a, b);
        } else if (op === "potencia") {
            return this.potencia(a, b);
        } else if (op === "raiz") {
            return this.raizQuadrada(a); // Não está tratando b aqui, o que é um erro
        } else {
            return "Operação desconhecida"; // Mensagem genérica
        }
    }
}