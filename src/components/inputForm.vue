<template>
    <form class="flex items-center justify-center mt-5">
        <i class="fa-solid fa-arrow-left absolute left-[90px] z-10 cursor-pointer" @click="$emit('closeInputForm')"></i>
        <input type="text" placeholder="Search here" v-model="this.cityInfo"
            class="bg-white relative rounded-[20px] shadow-[5px_5px_10px_1px_rgba(0,0,0,0.3)] outline-none w-[300px] h-14 pl-10 pr-12 text-xl placeholder:text-xl">
        <i class="fa-solid fa-magnifying-glass absolute bg-white right-[90px] text-xl cursor-pointer" @click="throwReq"></i>
    </form>
</template>

<script>
import { weatherInfo } from '@/store/weatherInfo';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            cityInfo: ''
        }
    },
    methods: {
        throwReq() {
            this.$emit('fetchW', this.cityInfo)
            this.$emit('closeInputForm')
            this.cityInfo = ''
        }
    },
    //   computed: {
    //     ...mapState({
    //       city: state => state.weatherInfo.city
    //     })
    //   },
    name: 'inputForm'
}
</script>

<style scoped></style>