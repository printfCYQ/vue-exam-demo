<!--
 * @Author: your name
 * @Date: 2020-08-04 19:28:21
 * @LastEditTime: 2020-08-05 09:46:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \echarts-router-master\src\views\ElementUI-2.vue
-->
<!--
 * @Author: your name
 * @Date: 2020-08-04 19:28:21
 * @LastEditTime: 2020-08-05 09:30:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \echarts-router-master\src\views\ElementUI-2.vue
-->

<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <!-- 表格 start -->
      <el-card shadow="hover">
        <div slot="header" class="clearfix">
          <span>表格</span>
        </div>
        <el-table :data="tableData" style="width: 100%" v-loading="tableFlag">
          <el-table-column label="日期" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="姓名" width="180">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <!-- 编辑弹框 start -->
        <el-dialog title="编辑" :visible.sync="dialogFormVisible">
          <el-form :model="form" ref="form" :rules="dialogRules">
            <el-form-item
              label="姓名"
              :label-width="formLabelWidth"
              prop="name"
            >
              <el-input
                style="width:45%;"
                v-model="form.name"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
              <el-select v-model="form.sex" placeholder="请选择性别">
                <el-option label="男" value="男"></el-option>
                <el-option label="女" value="女"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label="时间"
              prop="date"
              :label-width="formLabelWidth"
            >
              <el-date-picker
                v-model="form.date"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogCancle('form')">取 消</el-button>
            <el-button type="primary" @click="dialogSure('form')"
              >确 定</el-button
            >
          </div>
        </el-dialog>
        <!-- 编辑弹框 end -->
      </el-card>
      <!-- 表格 end -->
    </el-col>

    <el-col :span="12">
      <!-- 表单 start -->
      <el-card shadow="hover">
        <div slot="header" class="clearfix">
          <span>表单</span>
        </div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="ruleForm.date2"
                  style="width: 100%;"
                ></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送" prop="delivery">
            <el-switch v-model="ruleForm.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即创建</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <!-- 表单 end -->
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      // 编辑弹框显示状态
      dialogFormVisible: false,
      // 编辑弹框表单
      form: {
        name: "",
        sex: "",
        date: ""
      },
      // 表单label宽度
      formLabelWidth: "120px",
      // 表格加载状态
      tableFlag: false,
      // 表格
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      // 表单
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      // 表单校验
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      // 编辑弹框表单校验
      dialogRules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }]
      },
      editId: ""
    };
  },
  methods: {
    // 表格编辑
    handleEdit(index, row) {
      console.log(index, row);
      this.editId = index;
      this.dialogFormVisible = true;
    },
    // 表格删除
    handleDelete(index, row) {
      console.log(index, row);
      var that = this;
      that
        .$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          that.tableFlag = true;
          setTimeout(function() {
            that.tableFlag = false;
            that.$message({
              type: "success",
              message: "删除成功!"
            });
          }, 1000);
        })
        .catch(() => {
          that.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 表单提交
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 表单重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 编辑弹框取消
    dialogCancle(form) {
      this.$refs[form].resetFields();
      this.$message({
        type: "info",
        message: "已取消编辑"
      });
      this.editId = "";
      this.dialogFormVisible = false;
    },
    // 编辑弹框确定
    dialogSure(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          console.log(this.form);
          console.log(this.editId);
          this.dialogFormVisible = false;
          this.$message({
            type: "success",
            message: "编辑成功"
          });
          this.$refs[form].resetFields();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
