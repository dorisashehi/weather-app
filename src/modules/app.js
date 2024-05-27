let locationWeather = '';

const fetchWeather = async() => {

    let results = await fetch('https://api.weatherapi.com/v1/current.json?key=0b97f25ae5fb432c977180517242505&q=london',
        {mode: 'cors'}
    )
    locationWeather = await results.json();

    console.log(locationWeather);
    return locationWeather;

}


export {fetchWeather}