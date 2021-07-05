import { Component } from 'vue';
import { Vue } from 'vue-class-component'
import CForm from './corsrc/CForm';
import comArr from '@/form/compoent/index'
interface Iplu {
  install:any
  [x: string]:any
  // testArr:{[x: string]:Component;}
}
interface IPluVue extends Vue {
  [x: string]:any
}
const plu:Iplu = {
  install(Vue:IPluVue,op:any) {
    Vue.component('CForm',CForm)
  },
  component(name:string,component:Component){
    this.comArr[name] = component
  },
  comArr,
}
export default plu

