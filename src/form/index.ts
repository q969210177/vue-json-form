import { Component } from 'vue';
import { Vue } from 'vue-class-component';
import CForm from './corsrc/CForm';
interface Iplu {
  install: any
  component: (name: string, component: Component) => void
  newComponent: { [x: string]: Component; }
  // testArr:{}
}
interface IPluVue extends Vue {
  [x: string]: any
}
const plu: Iplu = {
  install(Vue: IPluVue, op: any) {
    Vue.component('CForm', CForm);
  },
  component(name: string, component: Component) {
    this.newComponent[name] = component;
  },
  newComponent: {},
};
export default plu;
