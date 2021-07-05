import { defineComponent } from 'vue';
const  test = defineComponent({
  name:'Test',
  props:{
    type:{
      type:[String,Number],
      default:'',
    },
  },
  setup(){
    return{}
  },
  render(vm:any){
    return <div>{vm.type}</div>
  },
})
export default test
