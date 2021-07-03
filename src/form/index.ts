import { Component } from 'vue';
import jsonForm  from './compoent/jsonForm';
interface Iplu {
  install:any
  [x: string]:any
  testArr:{[x: string]:Component;}
}
const plu:Iplu = {
  install(Vue:any,op:any) {
    Vue.component(jsonForm.name,jsonForm)
  },
  user(name:string,component:Component){
    this.testArr[name] = component
  },
  testArr:{},
}
export default plu

