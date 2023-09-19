const key = "0b316680f6559d29a6872528b1fe1ef6"

function showData(data){
    document.querySelector(".city").innerHTML = "Tempo em "+data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp)+"° C"
    document.querySelector(".text").innerHTML = data.weather[0].description
    document.querySelector(".hum").innerHTML = "Umidade: "+data.main.humidity+"%"
    document.querySelector(".img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())
    showData(data)
}

function clickButton(){
    const city = document.querySelector(".input-city").value

    searchCity(city)
}