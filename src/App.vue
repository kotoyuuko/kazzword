<template>
  <div id="app">
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <span class="title">kazzword</span>
        <Password></Password>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Password from './components/Password.vue'

export default {
  name: 'app',
  components: {
    Password
  }
}
</script>

<style lang="scss">
#app {
  .title {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 20px;
    margin: 20px auto;
  }
}
</style>
