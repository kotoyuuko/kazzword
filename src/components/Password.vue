<template>
  <section id="kazzword">
    <el-form ref="form" label-width="80px">
      <el-form-item label="主密码">
        <el-input
          v-model="masterPassword"
          placeholder="主密码"
          show-password
          @input="generate"
        ></el-input>
      </el-form-item>
      <el-form-item label="区分代号">
        <el-input
          v-model="rememberPassword"
          placeholder="区分代号"
          show-password
          @input="generate"
        ></el-input>
      </el-form-item>
      <el-form-item label="长度">
        <el-slider
          v-model="length"
          :min="8"
          :max="20"
          show-input
          @input="generate"
        ></el-slider>
      </el-form-item>
      <el-form-item label="特殊符号">
        <el-switch v-model="symbol" @input="generate"></el-switch>
      </el-form-item>
      <el-form-item label="生成密码">
        <el-input
          placeholder="生成密码"
          v-model="generatedPassword"
          :disabled="true"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          icon="el-icon-copy-document"
          v-clipboard:error="onError"
          v-clipboard:success="onCopy"
          v-clipboard:copy="generatedPassword"
          >复制密码</el-button
        >
      </el-form-item>
    </el-form>
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
      generatedPassword: '',
      symbol: true,
      length: 10
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

      let params = {
        master: this.masterPassword,
        remember: this.rememberPassword,
        length: this.length,
        symbol: this.symbol
      }

      this.generatedPassword = password(params)
    },
    onCopy (e) {
      this.$notify({
        title: '成功',
        message: '密码已复制到剪贴板',
        type: 'success'
      })
    },
    onError (e) {
      this.$notify.error({
        title: '错误',
        message: '复制失败'
      })
    }
  }
}
</script>

<style lang="scss">
</style>
