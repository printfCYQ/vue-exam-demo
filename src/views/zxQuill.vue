<template>
  <div class="editor-container">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="内容" prop="content" class="vab-quill-content">
        <vab-quill
          v-model="form.content"
          :min-height="400"
          :options="options"
        ></vab-quill>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSee">预览效果</el-button>
        <el-button type="primary" @click="handleSave">保存</el-button>
      </el-form-item>
    </el-form>
    <el-dialog title="预览效果" :visible.sync="dialogTableVisible">
      <div style="min-height: 60vh">
        <h1 class="news-title">{{ form.title }}</h1>
        <div class="news-content" v-html="form.content"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import "zx-quill/dist/zx-quill.css";
import vabQuill from "zx-quill";
export default {
  name: "Editor",
  components: { vabQuill },
  data() {
    return {
      options: {
        theme: "snow",
        bounds: document.body,
        debug: "warn",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ color: [] }, { background: [] }],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ align: [] }],
            [{ direction: "rtl" }],
            [{ font: [] }],
            ["clean"],
            ["link", "image"]
          ]
        },
        placeholder: "内容...",
        readOnly: false
      },
      borderColor: "#dcdfe6",
      dialogTableVisible: false,
      form: {
        content: ""
      }
    };
  },
  methods: {
    handleSee() {
      this.dialogTableVisible = true;
    },
    handleSave() {
      console.log(this.form);
    }
  }
};
</script>
<style scoped>
.editor-container .news-title {
  text-align: center;
}
.editor-container .news-content >>> p {
  line-height: 30px;
}

.editor-container .news-content >>> img {
  width: 100%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.editor-container .vab-quill-content >>> .el-form-item__content {
  line-height: normal;
}
</style>
