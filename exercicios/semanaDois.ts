/**
 * EXERCÍCIOS
 * 
 * Antes de começar, certifique-se de instalar as 
 * dependências do projeto utilizando "npm install"
 * 
 * Você pode executar o arquivo dos exercícios usando F5, e pode colocar breakpoints no lado esquerdo da linha
 * 
 * 8 - Declare e popule um array com os objetos do exercício 7.
 * 
 * 9 - Faça uma função que receba um argumento de array de Professor 
 * e retorne um novo array de strings contendo somente os nomes dos professores.
 * 
 * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
 * 
 * 11 - Faça uma função que receba um argumento de array de Professores e 
 * retorne o primeiro Professor encontrado que dê aula de Typescript.
 * 
 */


/* 
 * 1- Crie um tipo para representar um objeto que contenha as suas informações de 
 * nome, profissão, idade e uma lista de assuntos de seu interesse.
*/

interface Pessoa {
    nome: string;
    profissao: string;
    idade: number;
    interesses?: string[]; // não tinha colocado o [] indicando que era array
} // EXERCÍCIO CORRIGIDO

/* 
 * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
*/

const eu: Pessoa = {
    nome: "Bruna",
    profissao: "estudante",
    idade: 23,
    interesses: ["Programação", "Séries", "Música"] // não tinha colocado os interesses em array
} // EXERCÍCIO CORRIGIDO

/* 
 * 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, 
 * e retorne somente a lista de assuntos do objeto.
 * 
 * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
 * 
*/

const InteressesPessoais = (pessoa: Pessoa): string[] => pessoa.interesses || [] // ao invés dos interesses, tinha feito com a idade. já corrigi
// EXERCÍCIO CORRIGIDO

/* 
 * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
*/

enum Materias {
    Angular = "Angular",
    Typescript = "Typescript",
    Git = "Git",
} // EXERCÍCIO CORRIGIDO

/* 
 * 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.
*/

interface Professor {
    nome: string;
    lista: Materias[];
} // EXERCÍCIO CORRIGIDO

/* 
 * Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
 * Nathan = Angular e Git, Alan = Angular, Typescript e Git
*/

const nathan: Professor = {
    nome: "Nathan",
    lista: [
        Materias.Angular,
        Materias.Git
    ]
} // EXERCÍCIO CORRIGIDO

const alan: Professor = {
    nome: "Nathan",
    lista: [
        Materias.Angular,
        Materias.Git,
        Materias.Typescript
    ]
} // EXERCÍCIO CORRIGIDO









/* 
 * 8 - Declare e popule um array com os objetos do exercício 7.
*/

const professores: Professor[] = [nathan, alan];

/* 
 * 9 - Faça uma função que receba um argumento de array de Professor 
 * e retorne um novo array de strings contendo somente os nomes dos professores.
*/

const nomeProfessores = (professores: Professor[]): string [] => {
    const nomes: string[] = []
    for (const prof of professores) {
        nomes.push(prof.nome)
    }
    return nomes
}

/* 
 * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
*/

const materiasProfessores = (professores: Professor[]): string [] => {
    const materias: any[] = []
    for (const prof of professores) {
        materias.push(prof.lista)
    }
    return materias
}

