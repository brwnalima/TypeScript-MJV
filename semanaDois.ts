/**
 * EXERCÍCIOS
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

console.log(eu);


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
    nome: "Alan",
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
// EXERCÍCIO CORRIGIDO


/* 
 * 9 - Faça uma função que receba um argumento de array de Professor 
 * e retorne um novo array de strings contendo somente os nomes dos professores.
*/

const nomeProfessores = (professores: Professor[]): string [] => {
    return professores.map((professor) => professor.nome)
}

// EXERCÍCIO CORRIGIDO - está diferente mas acho q funciona

console.log(nomeProfessores(professores));


/* 
 * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
*/

const materiasProfessores = (professores: Professor[]) => {
    return professores.map((professor) => professor.lista)

} // EXERCÍCIO CORRIGIDO - está diferente mas acho q funciona

console.log(materiasProfessores(professores));

/* 
 * 11 - Faça uma função que receba um argumento de array de Professores e 
 * retorne o primeiro Professor encontrado que dê aula de Typescript.
 * 
*/

const findFirstProf = (professores: Professor[]): Professor | undefined => {
    return professores.find(prof => prof.lista.includes(Materias.Typescript))
}

console.log(findFirstProf(professores));

 // EXERCÍCIO CORRIGIDO