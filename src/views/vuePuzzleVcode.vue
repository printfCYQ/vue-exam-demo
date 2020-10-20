<template>
  <div>
    <!-- 验证码 -->
    <Vcode
      :show="isShow"
      @success="success"
      @close="close"
      :canvasWidth="500"
      :canvasHeight="350"
    />
    <el-row :gutter="20" class="displayCenter">
      <el-col :span="8">
        <el-card shadow="hover">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名：">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item class="displayCenter">
              <el-button type="primary" :loading="loading" @click="submitForm"
                >登录</el-button
              >
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vcode from "vue-puzzle-vcode";
export default {
  components: {
    Vcode
  },
  data() {
    return {
      isShow: false,
      loading: false,
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    success() {
      this.loading = true;
      this.$message({
        title: "登入成功",
        message: "欢迎你进入系统",
        type: "success"
      });
      this.loading = false;
      this.isShow = false;
    },
    close() {
      this.isShow = false;
    },
    submitForm() {
      this.isShow = true;
    },
    resetForm() {}
  }
};
</script>

<style scoped>
.displayCenter {
  display: flex;
  justify-content: center;
}
</style>
