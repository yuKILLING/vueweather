<template>
  <!-- HEADER -->
  <header class="space-x-4 text-2xl flex items-center content-start pl-5 pt-7 text-white cursor-pointer">
    <i class="fa-solid fa-location-dot" @click="$emit('fieldClicked')"></i>
    <a href="javascript:function f(e){e.preventDefault();}" v-if="cityName == ''"
      class="no-underline font-bold text-white [text-shadow:_-2px_1px_10px_rgb(0_0_0_/_50%)]"
      @click="$emit('fieldClicked')">Your Location</a>
    <a href="javascript:function f(e){e.preventDefault();}" v-else
      class="no-underline font-bold text-white [text-shadow:_-2px_1px_10px_rgb(0_0_0_/_50%)]"
      @click="$emit('fieldClicked')">{{ cityName }}</a>
    <i class="fa-solid fa-angle-down" @click="$emit('fieldClicked')"></i>
  </header>

  <!-- SEARCH FORM -->
  <Transition>
    <div class="absolute bg-white w-full h-[110px] top-0 rounded-b-[40px] transition-all duration-500" v-if="isClicked">
      <inputForm @closeInputForm="$emit('fieldClicked')" @fetchW="sendReq"></inputForm>
    </div>
  </Transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import inputForm from './inputForm.vue';
export default {
  props: {
    isClicked: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {

    }
  },
  methods: {
    sendReq(cityInfo) {
      this.$emit('sendCity', cityInfo)
    }
  },
  components: {
    inputForm
  },
  name: 'Header',
  computed: {
    ...mapState({
      cityName: state => state.weatherInfo.nameOfCity,
    })
  }
}
</script>

<style scoped>
/* SEARCH FORM ANIMATION */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>