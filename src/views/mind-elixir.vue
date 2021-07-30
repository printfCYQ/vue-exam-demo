<template>
  <div id="app">
    <div id="map" style="width:100%;height:500px"></div>
    <button @click="qwerewqr">qwerewqr</button>
    <button @click="disableEdit">disableEdit</button>
    <button @click="enableEdit">enableEdit</button>
    <button @click="exportSvg">exportSvg</button>
    <button @click="exportPng">exportPng</button>
    <button @click="refresh">refresh</button>
    <button @click="initLeft">initLeft</button>
    <br />
    <br />
    <br />
    <button @click="zzzz">zzzz</button>
    <button @click="yyyy">yyyy</button>
  </div>
</template>

<script>
import MindElixir, { E } from "mind-elixir";
import painter from "mind-elixir/dist/painter";
import bus from "../utils/bus";

export default {
  name: "App",
  props: {
    mindData: {
      type: Object,
    },
  },
  data() {
    return {
      ME: null,
      history: [],
    };
  },
  mounted() {
    console.log(E);
    this.ME = new MindElixir({
      el: "#map",
      direction: MindElixir.LEFT,
      data: this.mindData,
      draggable: true, // default true 是否启用拖动
      contextMenu: true, // default true 启用右键菜单
      toolBar: true, // default true 启用工具栏
      nodeMenu: true, // default true 启用节点菜单
      keypress: true, // default true 启用快捷键
      locale: "zh_CN", // 语言[zh_CN,zh_TW,en,ja,pt]
    });
    this.ME.init();
  },
  created() {
    bus.$on("saveProp", (val) => {
      console.log(val);
    });
  },
  watch: {
    mindData: {
      handler(val, oldVal) {
        console.log(val, oldVal);
        this.ME.refresh();
      },
      deep: true,
    },
  },
  methods: {
    qwerewqr() {
      console.log(this.ME);
      console.log(this.ME.getAllData());
      console.log(this.ME.getAllDataString());
      console.log(JSON.parse(this.ME.getAllDataString()));
    },
    exportSvg() {
      painter.exportSvg(this.ME);
    },
    exportPng() {
      painter.exportPng(this.ME);
    },
    refresh() {
      this.ME.refresh();
    },
    initLeft() {
      this.ME.initLeft();
    },
    disableEdit() {
      this.ME.disableEdit();
    },
    enableEdit() {
      this.ME.enableEdit();
    },
    zzzz() {
      console.log(this.history);
    },
    yyyy() {
      console.log(this.history);
    },
    save() {
      console.log("baocun1");
    },
  },
};
</script>

<style></style>
