let amigo = {nome: 'rael', sexo: 'M', idade: '20', peso: '70kg',
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}

amigo.engordar(6)
console.log(`o ${amigo.nome} tem ${amigo.peso}.`)