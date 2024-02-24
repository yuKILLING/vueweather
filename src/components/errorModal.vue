<template>
    <div class="fixed inset-0 z-30 bg-black bg-opacity-70 flex justify-center w-full h-full">
        <i class="fa-solid fa-xmark text-white absolute right-40 top-10 text-[70px]" @click="$emit('closeErrorWindow')"></i>
        <div>
            <div class="w-96 mt-44">
                <img class="w-96 mt-44" src="@/assets/error.png" alt="">
            </div>
            <p class="text-3xl text-white mt-16">Ooopss... Some error occured</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'errorWindow'
}
</script>

<style scoped></style>
