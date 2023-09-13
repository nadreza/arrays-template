//PRÁTICA 1
function imprimirArray (){
  //digite a sua solução aqui

  const primeiro = ["bom dia", "marques", "javascript"]
  const segundo = [5, 10, 12]
  const terceiro = ["olá", "100", true]
  const quarto = [50]
  const quinto = []


  //(pratica 2)
/*   console.log(primeiro.length)
  console.log(primeiro[3]) */

/*     console.log(terceiro.includes("olá"))
    console.log(terceiro.includes(true))  //obs:includes tem que ser idêntico, até maiuscula atrapalha a busca
    console.log (quarto[0])
    console.log(quarto[0], quarto.indexOf(50), quarto.indexOf(526), quarto.length) //dá os indices */

    //Forma correta de copiar o array: (slice)
/*     const arrayOriginal = [153,135,35189, 4, 1, 654]
    const arrayCopia = arrayOriginal.slice()

    arrayCopia.push("uma nova string")
    arrayCopia.splice(0, 3) //o primeiro é o indice(de onde vai começar a contagem)

    console.log(arrayOriginal)
    console.log(arrayCopia) */

    //PRATICA EXTRA
    const arrayExtra = [5, 2, 9, 10, 15, 14, 11, 7]
    const arrayExtraCopia = arrayExtra.slice()

    arrayExtraCopia.pop() // remove o ultimo elemento de um array e o retorna
    arrayExtraCopia.push(6) // pega o array original percorre ele e adiciona o elemento no final
    arrayExtraCopia.splice(2, 1) // remove a partir do indice que vc pede (ao contrario pode funcionar melhor)
    arrayExtraCopia.unshift(100) // adiciona um nv elemento no inicio do array
    arrayExtraCopia.sort()//ordena em ordem alfabetica ou numerica


    console.log(arrayExtra)
    console.log(arrayExtraCopia)

    let frutas = ["maça", "banana", "laranja"]
    const frutasStrings = frutas.join(", ") //converte array em string

    console.log(frutas)
    console.log(frutasStrings)

    const string = "Olá Marques, como ces tao?"
    const stringSplit = string.split("")

    console.log(string)
    console.log(stringSplit)

    const array = ["Olá Marques", 100, true, ["string dentro de array dentro de outro array"]]

    console.log(array)



}

imprimirArray()

//PRÁTICA 2

