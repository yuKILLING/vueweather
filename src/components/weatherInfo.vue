<template>
  <section
    class="w-[380px] h-full flex flex-col justify-center items-center border-2 border-slate-300 rounded-[40px] border-solid my-10 space-y-4 py-5 text-white [text-shadow:_0_1px_10px_rgb(0_0_0_/_40%)] bg-gradient-to-tr from-blue-300 to-blue-500">
    <p class="font-medium text-xl">{{ Date }}</p>
    <h2 class="text-7xl [text-shadow:_-5px_5px_10px_rgb(0_0_0_/_60%)]">{{ degrees }}℃</h2>
    <p class="text-xl">{{ typeOfWeather }}</p>

    <div class="flex flex-col justify-center items-center [text-shadow:_-2px_2px_1px_rgb(0_0_0_/_40%)]">
      <div class="flex flex-row items-center justify-center text-xl">
        <i class="fa-solid fa-wind mr-2"></i>
        <p class="mr-5">WIND</p>
        <p class="font-bold">{{ wind }} km/h</p>
      </div>
      <div class="flex flex-row items-center justify-center text-xl">
        <i class="fa-solid fa-droplet mr-2"></i>
        <p class="mr-7">HUM</p>
        <p class="font-bold text-">{{ humidity }}%</p>
      </div>
    </div>

  </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      Date: this.formatDate()
    }
  },
  name: 'weatherInfo',
  computed: {
    ...mapState({
      degrees: state => state.weatherInfo.degrees,
      wind: state => state.weatherInfo.wind,
      typeOfWeather: state => state.weatherInfo.typeOfWeather,
      humidity: state => state.weatherInfo.humidity,
    }),
  },
  methods: {
    formatDate() {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const today = new Date();
      const day = today.getDate();
      const month = months[today.getMonth()];
      return `Today, ${day} ${month}`;
    }
  },
  mounted() {
    this.formatDate()
  }
}
</script>

<style scoped></style>