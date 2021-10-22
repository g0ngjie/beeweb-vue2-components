import Confetti from "./confetti/index";

const components = [];

function install(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { Confetti };

export default { install };
