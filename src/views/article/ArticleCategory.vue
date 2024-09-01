<script setup>

</script>

<template>
  <el-card style="width: 100%;min-height: 100vh">
    <template #header>
      <div>
        <span>文章分类</span>
      </div>
    </template>
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
  </el-card>
</template>

<style scoped>
</style>