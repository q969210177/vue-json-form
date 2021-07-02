import { defineComponent, h } from 'vue';
const input = defineComponent({
  name: 'CInput',
  props:{
    text:{
      type:String,
      default:'',
    },
  },
  setup() {
    return {};
  },
  render(vm:any) {
    console.log(vm);
    return h('input', {
      value:vm.text,
      onChange:(v:Event)=>{console.log(v.target.value)},
      // on:{
      //   change:(v:Event)=>{console.log(v);
      //   },
      // },
    } );
  },
});
export default input;
