import InputNumberExt from "./input-number-ext/index";
import DatePickerExt from "./date-picker-ext/index";

const components = [InputNumberExt, DatePickerExt];

function install(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { InputNumberExt, DatePickerExt };

export default { install };
