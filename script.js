const key = "7b0ede0cb7427e5e77c06c95ee64cebb"


function dadosDoLocal(dados) {

    document.querySelector(".local").innerHTML = "Tempo em " + dados.name
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "C°"
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".icone-do-clima").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    dadosDoLocal(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade)
}
