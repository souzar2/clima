const key = "0b316680f6559d29a6872528b1fe1ef6"


function showData(data){
    document.querySelector(".city").innerHTML = "Tempo em "+data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp)+"° C"
    document.querySelector(".text").innerHTML = data.weather[0].description
    document.querySelector(".hum").innerHTML = "Umidade: "+data.main.humidity+"%"
    document.querySelector(".img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    console.log(data)

    if (data.weather[0].id === 800) {
        // Obtenha o elemento <body>
        var bodyElement = document.querySelector("body");
        bodyElement.style.backgroundImage = "url('imgs/sun.jpg')";
        bodyElement.style.backgroundSize = "cover";
        bodyElement.style.backgroundRepeat = "no-repeat";
    } else{
        if(data.weather[0].id > 800 || data.weather[0].id < 805){
        var bodyElement = document.querySelector("body");
        bodyElement.style.backgroundImage = "url('imgs/clouds.jpg')";
        bodyElement.style.backgroundSize = "cover";
        bodyElement.style.backgroundRepeat = "no-repeat";
        }else{
            if(data.weather[0].id > 700 || data.weather[0].id < 782){
            var bodyElement = document.querySelector("body");
            bodyElement.style.backgroundImage = "url('imgs/misty.jpg')";
            bodyElement.style.backgroundSize = "cover";
            bodyElement.style.backgroundRepeat = "no-repeat";
            }else{
                if(data.weather[0].id >= 600 || data.weather[0].id < 623){
                var bodyElement = document.querySelector("body");
                bodyElement.style.backgroundImage = "url('imgs/snow.jpg')";
                bodyElement.style.backgroundSize = "cover";
                bodyElement.style.backgroundRepeat = "no-repeat";
                }else{
                    if(data.weather[0].id > 499 || data.weather[0].id < 532){
                    var bodyElement = document.querySelector("body");
                    bodyElement.style.backgroundImage = "url('imgs/rain.jpg')";
                    bodyElement.style.backgroundSize = "cover";
                    bodyElement.style.backgroundRepeat = "no-repeat";
                    }else{
                        if(data.weather[0].id > 299 || data.weather[0].id < 322){
                        var bodyElement = document.querySelector("body");
                        bodyElement.style.backgroundImage = "url('imgs/drizzle.jpg')";
                        bodyElement.style.backgroundSize = "cover";
                        bodyElement.style.backgroundRepeat = "no-repeat";
                        }else{
                            if(data.weather[0].id > 199 || data.weather[0].id < 233){
                            var bodyElement = document.querySelector("body");
                            bodyElement.style.backgroundImage = "url('imgs/thunder.jpg')";
                            bodyElement.style.backgroundSize = "cover";
                            bodyElement.style.backgroundRepeat = "no-repeat";
                            }
                        }
                    }
                }
    }
}
    }
}

async function searchCity(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())
    showData(data)
}

function clickButton(){
    const city = document.querySelector(".input-city").value

    searchCity(city)
}