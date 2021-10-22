import InputNumberExt from "./input-number-ext/index";
import Confetti from "./confetti/index";

const components = [InputNumberExt];

function install(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { InputNumberExt, Confetti };

export default { install };
