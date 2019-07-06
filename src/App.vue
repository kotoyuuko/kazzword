<template>
  <div id="app">
    <el-row type="flex" justify="center">
      <el-col :xs="22" :sm="12" :md="12" :lg="10" :xl="8">
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
    font-weight: bold;
    margin: 20px auto;
  }
}
</style>
