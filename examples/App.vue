<template>
  <div id="app">
    <InputNumberExt />
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
  methods: {},
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
