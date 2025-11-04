// Boas práticas
/*
Use nomes descritivos: Dê nomes claros para variáveis, funções e classes que expliquem sua finalidade.
Use const e let: Prefira const para valores que não serão reatribuídos e let para aqueles que serão modificados. Evite var devido a problemas de escopo.
Evite o escopo global: Limite a criação de variáveis e funções globais para evitar conflitos de nomes e tornar o código mais seguro.
Divida o código: Crie funções pequenas e focadas em uma única tarefa.
Evite aninhamento profundo: Use retornos antecipados (early returns) para lidar com condições ou erros no início de uma função, simplificando a leitura do código. 
*/
// Case sensitive
/*
-diferenciar maiusculas de minusculas */
console.log("olá mundo!")

// Sintaxe básica e comentário
/*
Declarações: O código JavaScript é uma série de instruções ou declarações. Elas geralmente terminam com um ponto e vírgula (;), embora em muitos casos o ponto e vírgula seja opcional devido ao recurso de inserção automática de ponto e vírgula (ASI) da linguagem.
Variáveis: Você pode declarar variáveis usando var, let, ou const.
Funções: Funções são blocos de código reutilizáveis que realizam uma tarefa específica.
Saída de Dados: O método mais comum para depuração e saída no console do navegador ou ambiente Node.js é console.log()
Strings: Strings (textos) podem ser definidas com aspas simples (') ou duplas (").
Comentários de uma única linha: Começam com duas barras (//). Tudo o que segue as barras na mesma linha é tratado como comentário.
Comentários de múltiplas linhas (ou em bloco): Começam com /* e terminam com */ 
/*Tudo o que estiver entre esses delimitadores, mesmo em várias linhas, é considerado comentário.
*/
// Declaração de variáveis(var, let, const)
/*
Em JavaScript, variáveis são declaradas com as palavras-chave var, let ou const. let é a forma recomendada para a maioria dos casos, pois permite declarar variáveis de escopo de bloco que podem ter seus valores reatribuídos. const é usado para constantes, cujo valor não pode ser alterado após a atribuição inicial. var é mais antigo e tem comportamento de escopo diferente, sendo menos recomendado em código moderno. 

*/
let nome = "Erica"
console.log("olá " + nome)
nome = "Mysdeiza"
console.log(nome)
const idade = 29
console.log(idade)

// Console e Debug
/*

*/
console.warn("atenção")
console.info("infromações")
console.error("erro")
//Tipos de dados
/*
número- number
booleano- boll
texto- string
real-float
*/
//string
let cidade = "Americana"

//number
let salario = 2000

//bool
let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

// Operadores
//     Operador Atribuição

//     Operadores aritméticos

//     Operadores relacionais

//     Operadores lógicos

// Estrutura
//     Estrutura de controle/decisão

//     Laços de repetição

// Arrays --> vetor

// Funções personalizadas
 