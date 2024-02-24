import { createStore } from 'vuex'

export const weatherInfo = {
    state: ()=>({
        apiKey: 'yourApiKey',
        degrees: 0,
        typeOfWeather: '',
        wind: '',
        humidity: '', 
        errorVisible: false,
        nameOfCity: ''
      }),
      getters: {
    
      },
      mutations: {
        setErrorStatus(state,bool){
          state.errorVisible = bool
        }
      },
      actions: {
        async fetchWeatherInfo({state,commit}, cityInfo){
          try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityInfo}&appid=${state.apiKey}`);
            let data = await response.json();
            state.degrees = data.main.temp
            state.humidity = data.main.humidity
            state.wind = data.wind.speed
            state.nameOfCity = data.name
            state.typeOfWeather = data.weather[0].main
          } catch (error) {
            state.errorVisible = true
            console.log(error)
          }
        }
      },
      modules: {
      },
      namespaced:true
}
