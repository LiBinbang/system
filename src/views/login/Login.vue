<template>
  <div class="login">
    <div class="Sign_in">
      <div class="lo
        <span><img src="@/assets/image/logo.png" alt=""/></span>
      </div>
      <el-form ref="formReq" :rules="rules" :model="form">
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user"
            v-model="form.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="form.password"
            show-password
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-row class="el_row">
          <el-button type="primary" @click="LoginRequest">登录</el-button>
          <el-button type="info" @click="Reset">重置</el-button>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      form: {
        username: "admin",
        password: "admin",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    //登录请求
    LoginRequest() {
      this.$refs.formReq.validate((valid) => {
        if (!valid) return;
        //这里直接写请求api
        if (this.form.username === "admin" && this.form.password === "admin") {
          this.$message.success("登录成功");
          window.sessionStorage.setItem('token','DJSFGASFWBSDFGIUWEVSFSHFGHAEAHHDSF')
          setTimeout(() => {
            this.$router.push("/home");
          }, 1000);
        }else{
            this.$message.error("账号或密码错误");
        }
      });
    },
    Reset() {
      this.$refs.formReq.resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("../../assets/image/bg2.png");
  background-size: 100% 100%;
}

.Sign_in {
  padding: 0 20px;
  width: 450px;
  height: 300px;
  border-radius: 3px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.5);
  .log {
    width: 100%;
    height: 114px;
    display: flex;
    justify-content: center;
    span {
      position: relative;
      top: -65px;
      width: 130px;
      height: 130px;
      display: block;
      background: teal;
      border: 1px solid #eee;
      padding: 5px;
      border-radius: 50%;
      img {
        width: 100%;
          border-radius: 50%;
      }
    }
  }
}
.el-form {
  .el-row {
    margin-bottom: 24px;
  }
  .el_row {
    display: flex;
    justify-content: right;
  }
}
</style>
