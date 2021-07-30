<template>
  <div>
    <btn :id="id" />
    <mindmap :mindData="mindData" />
  </div>
</template>

<script>
import mindmap from "./mind-elixir.vue";
import btn from "./button.vue";
export default {
  name: "MyMindmap",
  components: {
    mindmap,
    btn,
  },
  data() {
    return {
      id: "",
      nodes: [],
      mindData: {
        nodeData: {
          id: "root",
          topic: "思维导图",
          root: true,
          children: [],
          expanded: true,
        },
        linkData: {},
      },
    };
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getDataById(this.id);
  },
  methods: {
    getDataById(id) {
      console.log(id);
    },
  },
};
</script>
