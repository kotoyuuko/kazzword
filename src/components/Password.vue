<template>
  <section id="kazzword">
    <el-input
      v-model="masterPassword"
      placeholder="主密码"
      show-password
      @input="generate"
    ></el-input>
    <el-input
      v-model="rememberPassword"
      placeholder="记忆密码"
      show-password
      @input="generate"
    ></el-input>
    <el-input
      placeholder="生成密码"
      v-model="generatedPassword"
      :disabled="true"
    >
      <el-button
        slot="append"
        icon="el-icon-copy-document"
        v-clipboard:error="onError"
        v-clipboard:success="onCopy"
        v-clipboard:copy="generatedPassword"
        >复制密码</el-button
      >
    </el-input>
  </section>
</template>

<script>
import { password } from '../utils/password'

export default {
  name: 'Password',
  data () {
    return {
      masterPassword: '',
      rememberPassword: '',
      generatedPassword: ''
    }
  },
  methods: {
    generate () {
      if (this.masterPassword === '') {
        this.generatedPassword = ''
        return
      }
      if (this.rememberPassword === '') {
        this.generatedPassword = ''
        return
      }

      this.generatedPassword = password(this.masterPassword, this.rememberPassword)
    },
    onCopy (e) {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      })
    },
    onError (e) {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息'
      })
    }
  }
}
</script>

<style lang="scss">
#kazzword {
  .el-input {
    margin: 10px 0;
  }
}
</style>
