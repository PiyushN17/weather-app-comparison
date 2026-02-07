# API Key & Auth Token Demo – Weather Access App

**Requirements**
- Modern web browser  
- Internet connection for weather and geolocation APIs  
- Basic HTML and JavaScript knowledge  
- No backend required (client-side demo)  

**Technologies Used**
- **HTML** for UI structure  
- **Vanilla JavaScript** for logic and validation  
- **Web Crypto API** for secure token generation  
- **Fetch API** for API requests  
- **Open-Meteo APIs** for city lookup and weather data  

**About the APIs**
- **Open-Meteo Geocoding API** converts city names to coordinates  
- **Open-Meteo Weather API** returns current temperature using coordinates  
- Both APIs are free and do not require authentication  

**Purpose of the Project**
- The main purpose of this project is to **demonstrate the conceptual difference between an API key and an auth token**, including how API keys can represent long-lived access while auth tokens are short-lived and time-bound.  

**Features Implemented**
- Generates random API keys and temporary auth tokens  
- Auth tokens expire after 60 seconds with a countdown  
- Validates access before allowing weather search  
- Fetches and displays city name and temperature  

**Application Flow**
- Generate API key or auth token  
- Enter city name and click search  
- Provide a valid key/token when prompted  
- View current temperature on successful validation  

**Notes**
- This is a **client-side simulation** of token-based access control  
- Not intended for production security use  
- Ideal for learning API chaining and access validation concepts  

**Possible Enhancements**
- Backend-based token validation  
- Persistent token storage  
- Better UI feedback and error handling  
