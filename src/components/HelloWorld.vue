<template>
  <div>
    <h1 @click="logs">Hello VUE</h1>
    <el-row :gutter="20">
      <el-col class="item" :span="6" v-for="item in list" :key="item.id">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>{{item.title}}</span>
          </div>
          <div>{{item.author_name}}</div>
          <div>{{item.date}}</div>
          <img :src="item.imgSrc" alt="">
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    logs() {
      this.request.http_mock("/listData").then(res => {
        console.log(res.data);
        this.list = res.data
      });
      this.request.http_mock("/strings").then(res => {
        console.log(res.data);
      });
            this.request.http_mock("/params").then(res => {
        console.log(res.data);
      });
    }
  }
};
</script>
<style scoped>
h1 {
  text-align: center;
}
.item {
  margin-bottom: 20px;
}
</style>
