import InputNumberExt from "./input-number-ext/index";

const components = [InputNumberExt];

function install(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { InputNumberExt };

export default { install };
