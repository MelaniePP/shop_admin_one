<template>
  <div class="login">

    <el-form status-icon ref="form" :model="form" :rules="rules" label-width="80px">
      <img src="@/assets/avatar.jpg" alt="">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="form.password" placeholder="请输入密码 "></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="login">登录</el-button>
    <el-button @click="reset">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 7, message: '长度在 3 到 7 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          axios({
            method: 'post',
            url: 'http://localhost:8888/api/private/v1/login',
            data: this.form
          }).then(res => {
            if (res.data.meta.status === 200) {
              this.$message.success('登录成功')
              localStorage.setItem('token', res.data.data.token)
              this.$router.push('/home')
            } else {
              this.$message.error(res.data.meta.msg)
            }
          })
        } else {
          return false
        }
      })
    },
    reset() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background-color: #2d434c;
  overflow: hidden;
  .el-form {
    width: 400px;
    background-color: #fff;
    margin: 200px auto;
    padding: 75px 40px 15px;
    position: relative;
    border-radius: 10px;
    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -60px;
      border-radius: 50%;
      border: 10px solid #fff;
    }
    .el-button + .el-button {
      margin-left: 80px;
    }
  }
}
</style>
