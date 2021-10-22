<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    // this.$confetti.start({ defaultType: "image", url: notThink, defaultSize: 60 });
    this.$confetti.start({ defaultType: "rect" });
    setTimeout(() => {
      this.$confetti.stop();
    }, 100);
  },
};
</script>
