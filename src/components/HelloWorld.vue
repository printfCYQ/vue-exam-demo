<template>
  <div>
    <h1 @click="logs">Hello VUE</h1>
  </div>
</template>
<script>
export default {
  methods: {
    logs() {
      this.request.http_mock("/listData").then(res => {
        console.log(res.data);
      });
      this.request.http_mock("/strings").then(res => {
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
</style>
