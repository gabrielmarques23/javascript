let num = [5, 2, 7, 8, 4, 9]


console.log(`O vetor tem os seguintes números: ${num}.`);
console.log(`Em ordem crescente, ficam assim: ${num.sort()}.`);
console.log(`O vetor tem ${num.length} posições`);
console.log(`${num[0]} É o primeiro número, e o ${num[5]} é o último!`);

let pos = num.indexOf(3);
if (pos == -1) {
    console.log(`O valor não foi encontrado!`);
} else {
    console.log(`O valor 8 está na posição ${pos}.`);
}