function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        var error = false

        if (error) {

            callback("O envio falhou",0,7+"s", "Seu email não foi enviado");
        } else {
            console.log(`Para :${para}
        -----------------------
        ${corpo}
        -----------------------
        De: Gabriel`)
            callback("Enviado",5,7+"s");
        }

    }, 7000)
}

console.log("Após apertar o botão de enviar")

enviarEmail("Oi, enviando email", "123@email.com", (status, amount, time, erro) => {
    if (erro == undefined) {
        console.log("Tudo OK")
        
    console.log(`
    Status : ${status}
    -----------------
    Contatos: ${amount}
    ------------------
    Tempo de envio: ${time}
`)
    } else {
        console.log("Ocorreu um erro: " + erro)
    }



})

console.log("Seu email foi enviado, deve chegar em breve")
