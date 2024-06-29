document.getElementById('get-weather').addEventListener('click', function() {
    const apiKey = '135507d190b3a274e613217db1b94f67'; 
    const city = document.getElementById('city-input').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city').textContent = data.name;
                document.getElementById('description').textContent = data.weather[0].description;
                document.getElementById('temp').textContent = data.main.temp;
                document.getElementById('humid').textContent = data.main.humidity;
            } else {
                alert('City not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Error fetching the weather data. Please try again later.');
        });
});
