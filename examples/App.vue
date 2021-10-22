<template>
  <div id="app" style="width: 100%;height: 100%"></div>
</template>

<script>
import Animation from "./container/index";
// const notThink = require("./notThink.jpg");
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const an = new Animation();
    // an.start({ defaultType: "image", url: notThink, defaultSize: 60 });
    an.start({ defaultType: "rect" });
    setTimeout(() => {
      an.stop();
    }, 100);
  },
};
</script>
