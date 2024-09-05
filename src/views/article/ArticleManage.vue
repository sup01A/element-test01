<script setup>

</script>

<template>
  <el-card style="width: 100%;min-height: 100vh">
    <template #header>
      <div style="display: flex;justify-content: space-between">
        <span>文章分类</span>
        <el-button type="primary">添加文章</el-button>
      </div>
    </template>
    <el-form :inline="true">
      <el-form-item label="文章分类">
        <el-select
            placeholder="请选择"
            clearable
            style="width: 150px"
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="发布状态">
        <el-select
            placeholder="请选择"
            clearable
            style="width: 150px"
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>

</template>

<style scoped>
</style>