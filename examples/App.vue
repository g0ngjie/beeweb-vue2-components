<template>
  <div id="app">
    <el-card class="box-card">
      <div slot="header">
        <span class="title">计数器组件增强</span>
        <p>
          min = 0 <br />
          max = 5.99 <br />
          precision = 2 <br />
          失去焦点不做四舍五入 <br />
          测试用例: 5.999/5.499
        </p>
      </div>
      <InputNumberExt
        style="width: 200px"
        type="number"
        v-model.number="form.amount"
        placeholder="请输入充值金额"
        :min="0"
        :max="5.99"
        :precision="2"
      />
    </el-card>

    <el-card class="box-card"> </el-card>
  </div>
</template>

<script>
import { columns, rules } from "./mock";

export default {
  name: "App",
  data() {
    return {
      formData: {},
      form: {},
      columns,
      rules,
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((bool) => {
        if (bool) console.log(this.formData);
      });
    },
  },
};
</script>
<style scoped>
.box-card {
  margin: 10px 0;
}
.title {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
}
p {
  font-size: 13px;
  color: #606266;
  line-height: 20px;
  padding-left: 20px;
}
</style>
