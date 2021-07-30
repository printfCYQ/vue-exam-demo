<template>
  <div>
    <div class="super-flow-demo1">
      <div class="node-container">
        <div>
          <el-form
            class="link-base-style-form"
            ref="linkBaseStyle"
            label-width="0px"
            @submit.native.prevent
            :model="linkBaseStyle"
          >
            <h4>连线样式</h4>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-form-item label="">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="连线颜色"
                    placement="top"
                  >
                    <el-color-picker v-model="linkBaseStyle.color">
                    </el-color-picker>
                  </el-tooltip>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="连线颜色-鼠标移入"
                    placement="top"
                  >
                    <el-color-picker v-model="linkBaseStyle.hover">
                    </el-color-picker>
                  </el-tooltip>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="连线文字颜色"
                    placement="top"
                  >
                    <el-color-picker v-model="linkBaseStyle.textColor">
                    </el-color-picker>
                  </el-tooltip>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="连线文字颜色-鼠标移入"
                    placement="top"
                  >
                    <el-color-picker v-model="linkBaseStyle.textHover">
                    </el-color-picker>
                  </el-tooltip>
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item label="">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="文字背景颜色"
                    placement="top"
                  >
                    <el-color-picker v-model="linkBaseStyle.background">
                    </el-color-picker>
                  </el-tooltip>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="线段类型（虚|实）"
                    placement="top"
                  >
                    <el-switch
                      v-model="linkBaseStyle.dotted"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                    >
                    </el-switch>
                  </el-tooltip>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="虚线样式"
                  placement="top"
                >
                  <el-form-item label="">
                    <el-select
                      size="medium"
                      style="width: 80px"
                      v-model="linkBaseStyle.lineDash[0]"
                    >
                      <el-option
                        v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]"
                        :key="item"
                        :label="item"
                        :value="item"
                      >
                      </el-option>
                    </el-select>
                    <el-select
                      size="medium"
                      style="width: 80px"
                      v-model="linkBaseStyle.lineDash[1]"
                    >
                      <el-option
                        v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]"
                        :key="item"
                        :label="item"
                        :value="item"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-tooltip>
              </el-col>

              <el-col :span="24">
                <el-form-item label="">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="字体"
                    placement="top"
                  >
                    <el-select size="medium" v-model="linkBaseStyle.font">
                      <el-option
                        v-for="item in fontList"
                        :key="item"
                        :label="item"
                        :value="item"
                      >
                      </el-option>
                    </el-select>
                  </el-tooltip>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <span
          class="node-item"
          v-for="(item, index) in nodeItemList"
          :key="index"
          @mousedown="(evt) => nodeItemMouseDown(evt, item.value)"
        >
          {{ item.label }}
        </span>
      </div>
      <div class="flow-container" ref="flowContainer">
        <super-flow
          ref="superFlow"
          :graph-menu="graphMenu"
          :node-menu="nodeMenu"
          :link-menu="linkMenu"
          :link-base-style="linkBaseStyle"
          :link-style="linkStyle"
          :link-desc="linkDesc"
        >
          <template v-slot:node="{ meta }">
            <el-tooltip class="item" effect="dark" content="" placement="top">
              <div slot="content">
                {{ meta.name }}<br /><br />{{ meta.desc }}
              </div>
              <div
                @mouseup="nodeMouseUp"
                @click="nodeClick"
                class="flow-node ellipsis"
              >
                <div class="node-title ellipsis">
                  {{ meta.name }}
                </div>
                <div class="node-desc ellipsis">
                  {{ meta.desc }}
                </div>
              </div>
            </el-tooltip>
          </template>
        </super-flow>
      </div>
    </div>

    <el-dialog
      :title="drawerConf.title"
      :visible.sync="drawerConf.visible"
      :close-on-click-modal="false"
      width="500px"
    >
      <el-form
        @keyup.native.enter="settingSubmit"
        @submit.native.prevent
        v-show="drawerConf.type === drawerType.node"
        ref="nodeSetting"
        :model="nodeSetting"
      >
        <el-form-item label="节点名称" prop="name">
          <el-input
            v-model="nodeSetting.name"
            placeholder="请输入节点名称"
            maxlength="30"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="节点描述" prop="desc">
          <el-input
            v-model="nodeSetting.desc"
            placeholder="请输入节点描述"
            maxlength="30"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <el-form
        @keyup.native.enter="settingSubmit"
        @submit.native.prevent
        v-show="drawerConf.type === drawerType.link"
        ref="linkSetting"
        :model="linkSetting"
      >
        <el-form-item label="连线描述" prop="desc">
          <el-input v-model="linkSetting.desc" placeholder="请输入连线描述">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="drawerConf.cancel">
          取 消
        </el-button>
        <el-button type="primary" @click="settingSubmit">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
const drawerType = {
  node: 0,
  link: 1,
};

export default {
  data() {
    return {
      drawerType,
      drawerConf: {
        title: "",
        visible: false,
        type: null,
        info: null,
        open: (type, info) => {
          const conf = this.drawerConf;
          conf.visible = true;
          conf.type = type;
          conf.info = info;
          if (conf.type === drawerType.node) {
            conf.title = "节点";
            if (this.$refs.nodeSetting) this.$refs.nodeSetting.resetFields();
            this.$set(this.nodeSetting, "name", info.meta.name);
            this.$set(this.nodeSetting, "desc", info.meta.desc);
          } else {
            conf.title = "连线";
            if (this.$refs.linkSetting) this.$refs.linkSetting.resetFields();
            this.$set(
              this.linkSetting,
              "desc",
              info.meta ? info.meta.desc : ""
            );
          }
        },
        cancel: () => {
          this.drawerConf.visible = false;
          if (this.drawerConf.type === drawerType.node) {
            this.$refs.nodeSetting.clearValidate();
          } else {
            this.$refs.linkSetting.clearValidate();
          }
        },
      },
      linkSetting: {
        desc: "",
      },
      nodeSetting: {
        name: "",
        desc: "",
      },

      dragConf: {
        isDown: false,
        isMove: false,
        offsetTop: 0,
        offsetLeft: 0,
        clientX: 0,
        clientY: 0,
        ele: null,
        info: null,
      },
      nodeItemList: [
        {
          label: "新建节点",
          value: () => ({
            width: 120,
            height: 80,
            meta: {
              label: "新建节点",
              name: "新建节点",
            },
          }),
        },
      ],

      graphMenu: [
        [
          {
            // 选项 label
            label: "新建节点",
            // 选项是否禁用
            // disable(graph) {
            //   return !!graph.nodeList.find((node) => node.meta.label === "1");
            // },
            // 选项选中后回调函数
            selected(graph, coordinate) {
              graph.addNode({
                width: 120,
                height: 80,
                coordinate,
                meta: {
                  label: "新建节点",
                  name: "新建节点",
                },
              });
            },
          },
        ],
        [
          {
            label: "全选",
            selected: (graph) => {
              graph.selectAll();
            },
          },
        ],
      ],
      nodeMenu: [
        [
          {
            label: "删除",
            selected: (node) => {
              node.remove();
            },
          },
          {
            label: "编辑",
            selected: (node) => {
              this.drawerConf.open(drawerType.node, node);
            },
          },
        ],
      ],
      linkMenu: [
        [
          {
            label: "删除",
            selected: (link) => {
              link.remove();
            },
          },
          {
            label: "编辑",
            selected: (link) => {
              this.drawerConf.open(drawerType.link, link);
            },
          },
        ],
      ],

      linkBaseStyle: {
        color: "#666666", // line 颜色
        hover: "#FF0000", // line hover 的颜色
        textColor: "#666666", // line 描述文字颜色
        textHover: "#FF0000", // line 描述文字 hover 颜色
        font: "14px Arial", // line 描述文字 字体设置 参考 canvas font
        dotted: false, // 是否是虚线
        lineDash: [4, 4], // 虚线时生效
        background: "rgba(255,255,255,0.6)", // 描述文字背景色
      },
      fontList: ["14px Arial", "italic small-caps bold 12px arial"],
    };
  },
  mounted() {
    document.addEventListener("mousemove", this.docMousemove);
    document.addEventListener("mouseup", this.docMouseup);
    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("mousemove", this.docMousemove);
      document.removeEventListener("mouseup", this.docMouseup);
    });
  },
  methods: {
    flowNodeClick() {
      console.log(this.$refs.superFlow.graph);
    },
    linkStyle(link) {
      if (link.meta && link.meta.desc === "1") {
        return {
          color: "red",
          hover: "#FF00FF",
          dotted: true,
        };
      } else {
        return {};
      }
    },
    linkDesc(link) {
      return link.meta ? link.meta.desc : "";
    },
    settingSubmit() {
      const conf = this.drawerConf;
      if (this.drawerConf.type === drawerType.node) {
        if (!conf.info.meta) conf.info.meta = {};
        Object.keys(this.nodeSetting).forEach((key) => {
          this.$set(conf.info.meta, key, this.nodeSetting[key]);
        });
        this.$refs.nodeSetting.resetFields();
      } else {
        if (!conf.info.meta) conf.info.meta = {};
        Object.keys(this.linkSetting).forEach((key) => {
          this.$set(conf.info.meta, key, this.linkSetting[key]);
        });
        this.$refs.linkSetting.resetFields();
      }
      conf.visible = false;
    },
    nodeMouseUp(evt) {
      evt.preventDefault();
    },
    nodeClick() {
      console.log(arguments);
    },
    docMousemove({ clientX, clientY }) {
      const conf = this.dragConf;

      if (conf.isMove) {
        conf.ele.style.top = clientY - conf.offsetTop + "px";
        conf.ele.style.left = clientX - conf.offsetLeft + "px";
      } else if (conf.isDown) {
        // 鼠标移动量大于 5 时 移动状态生效
        conf.isMove =
          Math.abs(clientX - conf.clientX) > 5 ||
          Math.abs(clientY - conf.clientY) > 5;
      }
    },
    docMouseup({ clientX, clientY }) {
      const conf = this.dragConf;
      conf.isDown = false;

      if (conf.isMove) {
        const {
          top,
          right,
          bottom,
          left,
        } = this.$refs.flowContainer.getBoundingClientRect();

        // 判断鼠标是否进入 flow container
        if (
          clientX > left &&
          clientX < right &&
          clientY > top &&
          clientY < bottom
        ) {
          // 获取拖动元素左上角相对 super flow 区域原点坐标
          const coordinate = this.$refs.superFlow.getMouseCoordinate(
            clientX - conf.offsetLeft,
            clientY - conf.offsetTop
          );

          // 添加节点
          this.$refs.superFlow.addNode({
            coordinate,
            ...conf.info,
          });
        }

        conf.isMove = false;
      }

      if (conf.ele) {
        conf.ele.remove();
        conf.ele = null;
      }
    },
    nodeItemMouseDown(evt, infoFun) {
      const { clientX, clientY, currentTarget } = evt;

      const { top, left } = evt.currentTarget.getBoundingClientRect();

      const conf = this.dragConf;
      const ele = currentTarget.cloneNode(true);

      Object.assign(this.dragConf, {
        offsetLeft: clientX - left,
        offsetTop: clientY - top,
        clientX: clientX,
        clientY: clientY,
        info: infoFun(),
        ele,
        isDown: true,
      });

      ele.style.position = "fixed";
      ele.style.margin = "0";
      ele.style.top = clientY - conf.offsetTop + "px";
      ele.style.left = clientX - conf.offsetLeft + "px";

      this.$el.appendChild(this.dragConf.ele);
    },
  },
};
</script>

<style>
.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
}

.link-base-style-form {
  padding-bottom: 20px;
  border-bottom: 1px solid #dcdcdc;
}
.link-base-style-form .el-form-item {
  margin-bottom: 12px;
}

.super-flow-demo1 {
  margin-top: 20px;
  width: 100%;
  height: 800px;
  background-color: #f5f5f5;
}
.super-flow-demo1 > .node-container {
  width: 200px;
  float: left;
  height: 100%;
  text-align: center;
  background-color: #ffffff;
}

.super-flow-demo1 > .flow-container {
  width: calc(100% - 200px);
  float: left;
  height: 100%;
  overflow: hidden;
}

.super-flow-demo1 .super-flow__node .flow-node {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  line-height: 40px;
  font-size: 12px;
}

.node-item {
  font-size: 14px;
  display: inline-block;
  height: 30pxt;
  width: 120px;
  margin-top: 20px;
  background-color: #ffffff;
  line-height: 30px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  user-select: none;
  text-align: center;
  z-index: 6;
}
.node-item:hover {
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
}

.node-title {
  background: #55abfc;
  padding: 2px 6px;
}
.node-desc {
  padding: 2px 6px;
}
</style>
