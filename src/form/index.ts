import jsonForm  from './compoent/jsonForm';
const plu = {
  install(Vue:any,op:any) {
    Vue?.component(jsonForm.name,jsonForm)
  },
}
export default plu

