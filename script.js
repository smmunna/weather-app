const apiKey = ''; // Replace 'YOUR_API_KEY'

async function getWeather() {
    const city = document.getElementById('city-input').value;
    if (!city) return alert("Please enter a city name!");

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            // Display data on dashboard
            document.getElementById('city-name').innerText = `Weather in ${data.name}`;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('weather-description').innerText = `Condition: ${data.weather[0].description}`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;

            // Set background based on weather condition
            setBackground(data.weather[0].main);
        } else {
            alert("City not found, please try again.");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data.");
    }
}

function setBackground(weather) {
    const body = document.body;
    
        switch (weather) {
            case 'Clear':
                body.style.background = "url('https://wallpapers.com/images/featured/sunny-i2iuwt6dckyhzjmi.jpg') no-repeat center center/cover";
                break;
            case 'Clouds':
                body.style.background = "url('https://media.istockphoto.com/id/157527872/photo/storm-cloud.jpg?s=612x612&w=0&k=20&c=wsK-fd2hBm9SGlV_lnKYqFCAS3-_sk-f9GFAUbT6H40=') no-repeat center center/cover";
                break;
            case 'Rain':
                body.style.background = "url('https://static.vecteezy.com/system/resources/thumbnails/033/645/252/small_2x/drizzle-rainy-day-in-autumn-background-and-wallpaper-generative-ai-photo.jpg') no-repeat center center/cover";
                break;
            case 'Snow':
                body.style.background = "url('https://i0.wp.com/fulbridge.org/w/wp-content/uploads/2017/11/snowflake.jpg?ssl=1') no-repeat center center/cover";
                break;
            case 'Thunderstorm':
                body.style.background = "url('https://t3.ftcdn.net/jpg/00/52/61/78/360_F_52617896_iWuWGhCVHDc6Nf38fQY2jNBFlqRlWRJ5.jpg') no-repeat center center/cover";
                break;
            default:
                body.style.background = "url('https://static.vecteezy.com/system/resources/thumbnails/045/634/485/small_2x/landscape-with-clouds-resting-on-a-green-hillside-in-sunlight-photo.jpg') no-repeat center center/cover";
                break;
        }
    }
