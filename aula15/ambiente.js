let valores = [5,2,3,8]

/*
for(let pos=0; pos<valores.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
 
let pos = valores.indexOf(2)
console.log(`O valor 2 está na posição ${pos}`)