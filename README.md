# Metodo de Array

1. O que sao array ?
 - Os arrays são estruturas que servem para guardar dados, e organizá-los. Seu objetivo é ser um espaço fixo na memória do computador que armazena elementos. Esses elementos podem ser acessados por um tipo de indicação, que chamamos de índice.
2. Para que serve um array ?
  - um array é uma estrutura de dados que serve para guardar elementos em um espaço da memória. Estes espaços da memória são chamados de variáveis.
3. diferença entre os métodos forEach e map.
4. sort()
  - O método sort converte elementos em strings e realiza a comparação ordenando de acordo com a pontuação de código Unicode. Observe que método sort coloca o 10 e o 100 antes de 2 porque a string “10” vem antes de “2” ao fazer uma comparação de strings. O mesmo acontece na ordenação da variável p onde as letras maiusculas são ordenadas primeiros que as letras minúsculas.


# Métodos de Array em JavaScript

criando um array
```
const lista = ['Maçã', 'Banana']
console.log(frutas.length);
// 2
```
Acessar um item (index) do Array
```
const primeiraFruta = lista[0]
// Maçã
const ultimaFruta = lista[lista.length - 1]
// Banana
```
Iterar um Array
```
lista.forEach((item, index, array) => {
  console.log(item, index)
})
// Maçã 0
// Banana 1
```
Adicionar um item ao final do Array
```
const adicionar = lista.push('Laranja');
// ['Maçã', 'Banana', 'Laranja']
```
Remover um item do final do Array
```
const ultimo = lista.pop();
// remove Laranja (do final)
// ['Maçã', 'Banana'];
```
Remover do início do Array
```
const primeiro = lista.shift()
// remove Maçã do início
// ['Banana'];
```
Adicionar ao início do Array
```
const adicionar = lista.unshift('Morango')
// adiciona ao início
// ['Morango', 'Banana'];
```

Procurar o índice de um item na Array
```
lista.push('Manga')
// ['Morango', 'Banana', 'Manga']

const index = lista.indexOf('Banana')
// 1
```
Remover um item pela posição do índice
```
const removedItem = lista.splice(index, 1)
// é assim que se remove um item
// ['Morango', 'Manga']
```
Remover itens de uma posição de índice
```
const vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
console.log(vegetais);
// ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']

const pos = 1, n = 2;

const itensRemovidos = vegetais.splice(pos, n);

// n define o número de itens a se remover,
// a partir da posição (pos) em direção ao fim da array.

console.log(vegetais);
// ['Repolho', 'Cenoura'] (o array original é alterado)

console.log(itensRemovidos);
// ['Nabo', 'Rabanete']
```
Copiar um array
```
const copiar = lista.slice();
// é assim que se copia
// ['Morango', 'Manga']
```
Accessando elementos de um array
 - Arrays JavaScript começam com índice zero: o primeiro elemento de um array está na posição 0 e o último elemento está na posição equivalente ao valor da propriedade length (en-US) (tamanho) menos 1.
```
const arr = ['este é o primeiro elemento', 'este é o segundo elemento', 'este e o elemento final'];
console.log(arr[0]);              // exibe 'este é o primeiro elemento'
console.log(arr[1]);              // exibe 'este é o segundo elemento'
console.log(arr[arr.length - 1]); // exibe 'este e o elemento final'
```


