var vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
console.log('original 1', JSON.stringify(vegetais))
const copia = vegetais.slice()
const copia1 = vegetais


const pos = 1, n = 2
console.log('pos:', pos, "n:",n)

const itensRemovidos = vegetais.splice(pos, n)
console.log('itensRemovidos:', itensRemovidos)
console.log('original 2', JSON.stringify(vegetais))

//const copia = vegetais.slice()
console.log('copia', copia)
console.log('copia1', copia1)


const arr = ['este é o primeiro elemento', 'este é o segundo elemento', 'este e o elemento final'];
console.log(arr[0]);              // exibe 'este é o primeiro elemento'
console.log(arr[1]);              // exibe 'este é o segundo elemento'
console.log(arr[arr.length - 1]); // exibe 'este e o elemento final'


const ar= [8,4,7,9,2]
const result = ar.reduce((acc, current) => {
  return  acc > current ? current : acc
})
console.log(result)


function isPalindromo(word){
  const wordSplit = word.split('')
  const wordreverse = wordSplit.reverse().join('')


  const result = word === wordreverse ? "sim" : "nao"
 console.log(result)
}

isPalindromo("rever")


const methods = [
  'join', 'reverse', 'sort', 'push', 'pop', 'shift', 'unshift',
  'splice', 'concat', 'slice', 'indexOf', 'lastIndexOf',
  'forEach', 'map', 'reduce', 'reduceRight', 'filter',
  'some', 'every', 'isArray'
],

console.log(Array.from(list))
console.log(Array.isArray(list))
console.log(Array.of(list))

var board =
[ ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r']];
console.log(board.join('\n') + '\n\n');

values = [];
for (var x = 0; x < 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
};
console.table(values)