<template>
  <div>
    <el-button @click="savebtn">保存</el-button>
  </div>
</template>

<script>
import bus from "../utils/bus";
export default {
  props: {
    id: {
      type: String,
    },
  },
  mounted() {},
  methods: {
    savebtn() {
      console.log("asd");
      bus.$emit("saveProp", this.id);
    },
  },
};
</script>
