var agora = new Date()
var hora = agora.getHours()

horario = hora
console.log(`Agora são ${horario}`)
if (horario >= 12) {
    console.log ('já ta depois do almoço')
}
else {
    console.log('ta de manha tudo certo')
}