let search = document.getElementById('cityvalue')
let temperature = document.getElementById('temp')
let cityname = document.getElementById('cityname')
let countryname = document.getElementById('country')

let humidity = document.getElementById('humi')
let feel = document.getElementById('feels')
let precipit = document.getElementById('preci')
let visible = document.getElementById('vis')

let image = document.getElementById("image")

let submit = async () => {
    if (search.value.length == 0) {
        alert("please enter the city name before search")
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
            let response = await fetch(url)
            // console.log(response);
            let data = await response.json()
            // console.log(data.name); verify the data

            temperature.textContent = data.main.temp
            cityname.textContent = data.name
            countryname.textContent = data.sys.country

            humidity.textContent = data.main.humidity
            feel.textContent = data.main.feels_like
            precipit.textContent = data.main.pressure
            visible.textContent = data.visibility

            // give the class to all the 4 tags
            // store into a variable called details, 
            //fetch in order details[0].texContent = data.main.pressur 
            // details[1],[2],[3]

            if (data.main.temp > 30) {
                image.style.backgroundImage = "url('hot day.jpg')"
                
            }
            else if (data.main.temp >= 10 && data.main.temp <= 30) {
                image.style.backgroundImage = "url('clear.jpg')"
            }

            else {

                image.style.backgroundImage = "url('brezz.jpg')"
            }

        } catch (error) {

            window.alert(error)
        }


    }

}