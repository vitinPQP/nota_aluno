const nota_1 = 10;
const nota_2 = 5;
const nota_3 = 4;


const soma_notas = nota_1 + nota_2 + nota_3;
const mdeia = soma_notas / 3;


if (media >= 6) {
     console.log('O aluno foi aprovado');
} else if (media >=4 && mdeia < 6)
{ 
    console.log('Está de prova final');
} else {
    console.log('O aluno foi reprovado');
}
