<template>

    <el-container  class="home">
  <el-header>
    <div class="logo">

    </div>
    <div class="title">
      <h1>电商后台管理系统</h1>
    </div>
    <div class="logout">
      <span>欢迎光临</span>
      <a href="javascript:;">退出</a>
    </div>
  </el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>

</template>

<script>
export default {}
</script>

<style lang="less">
.home {
  height: 100%;
}
.el-header {
  background-color: #b3c1cd;
  display: flex;
  .logo {
    width: 180px;
    background: url('../assets/logo.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .title {
    flex: 1;
    h1 {
      text-align: center;
      line-height: 60px;
      color: #fff;
      font-size: 30px;
    }
  }
  .logout {
    width: 180px;
    line-height: 60px;
    text-align: center;
  }
}
.el-aside {
  background-color: #545c64;
}
.el-main {
  background-color: #eaeef1;
}
</style>
