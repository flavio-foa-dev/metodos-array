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