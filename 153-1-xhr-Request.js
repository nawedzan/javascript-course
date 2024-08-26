const apikey="258889bff49c73011c20e7f25667ce28";
const city='bhubaneswar';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

// console.log("l")
function requests(){
    const xhr =new XMLHttpRequest();
    // console.log(xhr);
    xhr.open('GET',apiUrl);
    xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    // Parse the JSON response
                    const data = JSON.parse(xhr.responseText);
                    console.log(data); // Log the entire response data to the console
                }
            }
    xhr.send();
}
requests()

// Replace 'YOUR_API_KEY' with your actual OpenWeather API key



// const apiKey = 'YOUR_API_KEY';
// const city = 'London'; // You can change the city name to any city you want
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// function fetchWeatherData() {
//     // Create a new XMLHttpRequest object
//     const xhr = new XMLHttpRequest();

//     // Configure it: GET-request for the URL /apiUrl
//     xhr.open('GET', apiUrl, true);

//     // Set up the callback function that will handle the response
//     xhr.onload = function () {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             // Parse the JSON response
//             const data = JSON.parse(xhr.responseText);
//             console.log(data); // Log the entire response data to the console

//             // Extract and log specific weather details
//             const weatherDescription = data.weather[0].description;
//             const temperature = data.main.temp;
//             const humidity = data.main.humidity;
//             const windSpeed = data.wind.speed;

//             console.log(`Weather in ${city}:`);
//             console.log(`Description: ${weatherDescription}`);
//             console.log(`Temperature: ${temperature}°C`);
//             console.log(`Humidity: ${humidity}%`);
//             console.log(`Wind Speed: ${windSpeed} m/s`);
//         } else {
//             console.error('Error fetching weather data:', xhr.statusText);
//         }
//     };

//     // Handle network errors
//     xhr.onerror = function () {
//         console.error('Network error occurred.');
//     };

//     // Send the request
//     xhr.send();
// }

// // Call the function to fetch weather data
// fetchWeatherData();
