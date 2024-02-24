import {createStore} from "vuex";
import {weatherInfo} from "@/store/weatherInfo";

export default createStore({
    state: {
      isAuth: false,
    },
    modules: {
        weatherInfo: weatherInfo
    }
})
