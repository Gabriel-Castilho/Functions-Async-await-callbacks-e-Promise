function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 2000)
    })
}

function buscarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("example@email.com")
        }, 1500)
    })
}

function enviarEmail(corpo, para) {
    //"promessa cumprida = resolve" e não cumprida = reject
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var error = false;
            if (!error) {
                resolve({ time: 6, to: "user@email.com" });
            } else {
                reject("Fila Cheia");
            }
        }, 4000);
    })
}


enviarEmail("Olá, sou um email", "123@email.com").then((dados) => {
    console.log(`
        Time:${dados.time}
        ------------------
        To:${dados.to}
    `)
}).catch((error) => {
    console.log("Deu errado " + error)
});

pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail("Olá, sou o corpo do email", "email").then(() => {
            console.log("email enviado para o usuario com id: " + id)
        }).catch(err => {
            console.log(err)
        })
    })

})
