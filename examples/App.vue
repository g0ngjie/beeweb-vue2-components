<template>
  <div id="app" style="width: 100%;height: 100%"></div>
</template>

<script>
// const notThink = require("./notThink.jpg");
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // this.$confetti.start({ defaultType: "image", url: notThink, defaultSize: 60 });
    this.$confetti.start({ defaultType: "rect" });
    setTimeout(() => {
      this.$confetti.stop();
    }, 100);
  },
};
</script>
