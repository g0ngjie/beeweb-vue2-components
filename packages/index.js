import Confetti from "./confetti/index";
import TestPaper from "./test-paper/index";

const components = [TestPaper];

function install(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { TestPaper, Confetti };

export default { install };
