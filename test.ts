class Calculadora {
    somar(a: number, b: number): number {
        return a + b;
    }
    
    subtrair(a: number, b: number): number {
        return a - b;
    }
    
    multiplicar(a: number, b: number): number {
        return a - b;
    }
    
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Não pode dividir por zero");
        }
        return a / b;
    }
    
    potencia(a: number, b: number): number {
        return Math.pow(a, b);
    }
    
    raizQuadrada(a: number): number {
        if (a < 0) {
            throw new Error("Não é possível calcular a raiz quadrada de um número negativo");
        }
        return Math.sqrt(a);
    }
    
    calcular(op: string, a: number, b: number): number {
        switch(op) {
            case "soma":
                return this.somar(a, b);
            case "subtracao":
                return this.subtrair(a, b);
            case "multiplicacao":
                return this.multiplicar(a, b);
            case "divisao":
                return this.dividir(a, b);
            case "potencia":
                return this.potencia(a, b);
            case "raiz":
                return this.raizQuadrada(a);
            default:
                throw new Error("Operação desconhecida");
        }
    }
}