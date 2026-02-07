# API Key & Auth Token Demo – Weather Access App

**Requirements**
- A modern web browser (Chrome, Firefox, Edge, Safari)  
- Active internet connection to fetch geolocation and weather data  
- Basic understanding of HTML and JavaScript to explore or extend the project  
- No backend or database setup required (fully client-side demonstration)  

**Technologies Used**
- **HTML** for structuring the UI components and user inputs  
- **Vanilla JavaScript** for token generation, validation, and API handling  
- **Web Crypto API (`crypto.getRandomValues`)** for generating secure random tokens  
- **Fetch API** for making asynchronous HTTP requests  
- **Open-Meteo APIs** for geocoding and real-time weather data  

**About the APIs**
- **Open-Meteo Geocoding API**
  - Converts city names into geographic coordinates  
  - Example endpoint:  
    `https://geocoding-api.open-meteo.com/v1/search?name={city}&count=1`
- **Open-Meteo Weather API**
  - Fetches current weather data using latitude and longitude  
  - Example endpoint:  
    `https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true`
  - Returns temperature and weather units without requiring an API key  

**Features Implemented**
- Generates a random **API Key** and **Auth Token** on demand  
- Uses secure random token generation via the Web Crypto API  
- Auth Token expires after 60 seconds with a visible countdown timer  
- Restricts weather search access using generated keys/tokens  
- Prompts user to enter a valid key or token before fetching data  
- Displays city name and current temperature after successful authorization  

**Application Flow**
- User generates an API key and/or auth token  
- Auth token becomes valid for 60 seconds with a countdown timer  
- User enters a city name and clicks **Search**  
- App prompts for API key or auth token  
- If validation succeeds, city coordinates are fetched  
- Weather data is retrieved and displayed  

**Notes**
- This project is a **simulation of API key & token-based authentication**, not a production security system  
- All keys and validation logic exist only in memory on the client side  
- Tokens reset on page reload  
- Designed as a learning project to understand:
  - Token-based access control  
  - API chaining  
  - Secure random key generation  

**Possible Enhancements**
- Move token validation logic to a backend server  
- Add token expiration handling for API keys  
- Store tokens securely using sessions or cookies  
- Improve UI with visual access states  
- Add error handling for invalid city searches  
