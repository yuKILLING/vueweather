<template>
  <video autoplay loop muted src="@/assets/bgVideo.mp4" class="absolute h-screen w-screen object-cover"></video>
  <div class="h-screen flex justify-center items-center relative">
    <transition name="fade">
      <errorWindow v-if="errorVisible" @closeErrorWindow="closeErrorWindow"></errorWindow>
    </transition>
    <!-- Main Container -->
    <transition name="slide-fade">
      <div
        class="border-4 border-sky-600 border-solid rounded-[40px] p-2 bg-gradient-to-b from-cyan-500 to-blue-600 w-[450px] h-[700px] flex items-center justify-center flex-col shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.7)] relative overflow-hidden"
        v-if="!errorVisible">
        <!-- HEADER -->
        <Header :isClicked="isClicked" @fieldClicked="setClickedState" @sendCity="handleCity"></Header>
        <!-- WEATHER IMAGE -->
        <section class="flex justify-center mt-5">
          <img :src="weatherImage" class="w-60" alt="Weather Image">
        </section>
        <!-- WEATHER INFORMATION CONTAINER -->
        <weatherInfo></weatherInfo>
      </div>
    </transition>
  </div>
</template>

<script>
import Header from './components/header.vue'
import weatherInfo from './components/weatherInfo.vue'
import errorWindow from './components/errorModal.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  components: {
    Header, weatherInfo, errorWindow
  },
  data() {
    return {
      isClicked: false,
      weatherImage: require("@/assets/cloud.png"),
      count: 1
    }
  },
  methods: {
    setClickedState() {
      this.isClicked ? this.isClicked = false : this.isClicked = true
    },
    ...mapMutations({
      setErrorStatus: 'weatherInfo/setErrorStatus'
    }),
    ...mapActions({
      fetchWeather: 'weatherInfo/fetchWeatherInfo'
    }),
    handleCity(city) {
      this.fetchWeather(city)
    },
    closeErrorWindow() {
      this.setErrorStatus(false)
    }
  },
  created() {
    // BG Picture
    document.body.classList.add("bg-[url('GG.jpg')]");
    document.body.classList.add("bg-cover");
  },
  computed: {
    ...mapState({
      errorVisible: state => state.weatherInfo.errorVisible,
      typeOfWeather: state => state.weatherInfo.typeOfWeather
    })
  },
  watch: {
    typeOfWeather(newValue) {
      switch (newValue) {
        case 'Clear':
          this.weatherImage = require("@/assets/clear.png");
          break;
        case 'Snow':
          this.weatherImage = require("@/assets/snow.png");
          break;
        case 'Rain':
          this.weatherImage = require("@/assets/rain.png");
          break;
        case 'Clouds':
          this.weatherImage = require("@/assets/cloud.png");
          break;
        case 'Haze':
          this.weatherImage = require("@/assets/mist.png");
          break;
        default:
          break;
      }
    }
  }
};
</script>



<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>