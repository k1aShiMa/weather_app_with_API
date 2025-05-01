# Weather App

A simple weather application built with HTML, CSS, JavaScript, and Node.js that allows users to check the current weather for any city by entering the city name. It also includes a feature to save a favorite city for quick access.

You need internet access to utilize every feature.

Features
City Search: Users can search for the weather of any city by entering its name.

Weather Information: Displays current weather details such as temperature, wind speed, and weather icon.

Favorite City: Users can save their favorite city to easily access its weather later.

Auto-Refresh: The weather for the favorite city auto-refreshes every 5 minutes.

Responsive Design: The app is responsive and works on both desktop and mobile devices.

Technologies Used
HTML - Structure of the web page.

CSS - Styling of the application.

JavaScript - Logic for handling API requests and DOM manipulation.

Node.js - Server-side environment (optional, depending on your setup).

Open-Meteo API - For fetching the weather data.

Weather Icons - To display weather conditions with icons.

Local Storage - To save and retrieve the favorite city.

Installation
To run this project locally, follow the steps below:

1. Clone the repository:
    git clone https://github.com/k1aShiMa/weather-app.git
    cd weather-app

2. Install dependencies (if you are using Node.js server):
If you're using Node.js for backend services, make sure Node.js is installed on your computer.
    npm install

3. Start the server:
If you're using Node.js, you can start your server with:
    node server.js

Or, if you are only using the frontend files:
Simply open the index.html file in a web browser.

Usage
Check the weather:

Enter a city name in the input field (e.g., "Budapest") and click the "Get Weather" button.

The app will fetch the current weather for that city and display the information (temperature, wind speed, etc.).

Favorite a city:

After viewing the weather for a city, you can click the "Add to Favorites" button to save that city as your favorite.

The weather for your favorite city will be displayed on the page, and it will auto-refresh every 5 minutes.

View favorite city's weather:

Click the "Favorite City Weather" button to quickly view the weather of your favorite city.

Code Structure
index.html: The main HTML page that contains the structure of the weather app.

style.css: The CSS file for styling the app.

app.js: JavaScript file that handles the functionality, including API calls and updating the DOM.

server.js: (Optional) Node.js server file for running the app on a local server.

API Integration
The app uses the Open-Meteo API to fetch weather data. It makes an HTTP request to the API endpoint to retrieve weather details based on the user's input (city name). The following data is fetched:

Temperature

Wind speed

Weather code (used for icons)

The weather icons are provided by the Weather Icons library, which uses different icons for different weather conditions (sunny, cloudy, rainy, etc.).

Security Considerations
XSS Protection:

The input from users is sanitized to prevent cross-site scripting (XSS) attacks by using encodeURIComponent() to sanitize the city name input before making API calls.

CSRF Protection:

Since this app does not involve any user authentication or actions that modify data on a server, CSRF protection is not required.

Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Please make sure to follow these guidelines:

Fork the repo and create your branch (git checkout -b feature/your-feature).

Make your changes.

Commit your changes (git commit -m 'Add your feature').

Push to the branch (git push origin feature/your-feature).

Create a new Pull Request.

Acknowledgements
Open-Meteo API - For providing the weather data.

Weather Icons - For offering free weather icons.