type Location = {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
};

type CurrentWeather = {
    temperature: number;
    summary: string;
    icon: Icon;
    humidity: number;
    pressure: number;
    windSpeed: number;
};

type Forecast = {
    date: string;
    temperatureMin: number;
    temperatureMax: number;
    summary: string;
    icon: Icon;
};

enum Icon {
    "clear-day",
    "clear-night",
    "rain",
    "snow",
    "sleet",
    "wind",
    "fog",
    "cloudy",
    "partly-cloudy-day",
    "partly-cloudy-night"
}

type Weather = {
    location: Location;
    currentWeather: CurrentWeather;
    forecast: Forecast[];
};

export type { Weather, Icon, Forecast, CurrentWeather, Location }