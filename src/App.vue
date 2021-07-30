<template>
  <div id="app">
    <el-container>
      <el-aside width="250px">
        <el-menu :default-openeds="['0']">
          <el-submenu index="0">
            <template slot="title"
              ><i class="el-icon-s-home"></i
              ><router-link to="/">Home</router-link></template
            >
          </el-submenu>

          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>Elemment</template
            >
            <el-menu-item index="1-1"
              ><router-link to="/element1"
                >ElementUI-1</router-link
              ></el-menu-item
            >
            <el-menu-item index="1-2"
              ><router-link to="/element2"
                >ElementUI-2</router-link
              ></el-menu-item
            >
            <el-menu-item index="1-3"
              ><router-link to="/element3"
                >ElementUI-3</router-link
              ></el-menu-item
            >
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>Charts</template>
            <el-menu-item index="2-1"
              ><router-link to="/charts">Charts</router-link></el-menu-item
            >
            <el-menu-item index="2-2"
              ><router-link to="/echarts-gauge"
                >echarts-gauge</router-link
              ></el-menu-item
            >
            <el-menu-item index="2-3"
              ><router-link to="/echarts-bar"
                >echarts-bar</router-link
              ></el-menu-item
            >
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>小组件</template
            >
            <el-menu-item index="3-1">
              <router-link to="/vuePuzzleVcode"
                >vuePuzzleVcode-滑块验证码</router-link
              ></el-menu-item
            >
            <el-menu-item index="3-2"
              ><router-link to="/vueAplayer"
                >vueAplayer-音乐播放器</router-link
              ></el-menu-item
            >
            <el-menu-item index="3-3"
              ><router-link to="/tinymce"
                >tinymce-富文本</router-link
              ></el-menu-item
            >
            <el-menu-item index="3-4"
              ><router-link to="/zxQuill"
                >zxQuill-富文本</router-link
              ></el-menu-item
            >
            <el-menu-item index="3-5"
              ><router-link to="/mindmap"
                >mindmap-思维导图</router-link
              ></el-menu-item
            >
            <el-menu-item index="3-6"
              ><router-link to="/mind-elixir"
                >mind-elixir-思维导图</router-link
              ></el-menu-item
            >
            <el-menu-item index="3-7"
              ><router-link to="/vue-mindmap"
                >vue-mindmap-思维导图</router-link
              ></el-menu-item
            >
            <el-menu-item index="3-8"
              ><router-link to="/vue-super-flow"
                >vue-super-flow-流程图</router-link
              ></el-menu-item
            >
            <el-menu-item index="3-9"
              ><router-link to="/vue-super-flow2"
                >vue-super-flow-2-流程图</router-link
              ></el-menu-item
            >
          </el-submenu>

          <el-submenu index="4">
            <template slot="title"
              ><i class="el-icon-s-promotion"></i>canvas</template
            >
            <el-menu-item index="4-1">
              <router-link to="/canvas">canvas</router-link></el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
