<template>
  <div>
    <mindmap v-model="data"></mindmap>
    <button @click="qweqw">qweqwzv</button>

    <el-button @click="asdasdas">123312132</el-button>
  </div>
</template>

<script>
import mindmap from "@hellowuxin/mindmap";

export default {
  components: { mindmap },
  data: () => ({
    data: [
      {
        name: "如何学习D3",
        children: [
          {
            name: "预备知识",
            children: [{ name: "HTML & CSS" }, { name: "JavaScript" }],
          },
          {
            name: "安装",
            _children: [{ name: "折叠节点" }],
          },
          {
            name: "进阶",
            left: true,
          },
        ],
      },
    ],
  }),
  methods: {
    qweqw() {
      console.log(this.data);
      let da = JSON.stringify(this.data);
      console.log(da);
      let str =
        '[{"name":"如何学习D321321","left":false,"children":[{"name":"预备知识","left":false,"children":[{"name":"HTML & CSS","left":false},{"name":"JavaScript","left":false}]},{"name":"安装","left":false,"_children":[{"name":"折叠节点","left":false}]},{"name":"进阶","left":true}]}]';
      console.log(JSON.parse(str));
      this.data = JSON.parse(str);
    },
    asdasdas() {
      this.$router.push({ path: "/vue-mindmap", query: { id: 123456 } });
    },
  },
};
</script>

<style>
#mindmap {
  height: 90vh;
}
</style>
