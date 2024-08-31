<script setup>
import {homeServiceApi} from "@/api/homeService.js";
import {ref} from "vue";
const dataModel = ref('')
const getHome = async ()=>{
  let axiosResponse = await homeServiceApi();
  dataModel.value = axiosResponse.data
}
getHome()
</script>

<template>
<h1>{{ dataModel }}</h1>
</template>

<style scoped>

</style>