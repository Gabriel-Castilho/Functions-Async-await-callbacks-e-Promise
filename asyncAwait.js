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






function pegarUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { name: "Gabriel", lang: "JS" },
                { name: "Alexandre", lang: "C++" },
                { name: "Oliveira", lang: "JAVA" }
            ])
        }, 3000)
    })
}

//utilizando async await
async function principal() {
    var id = await pegarId();
    var email = await buscarEmailNoBanco(id);
    try {
        await enviarEmail("Olá sou um email", email);
        console.log("email enviado com sucesso!")
    } catch (err) {
        console.log(err)
    }
}

principal();
