import { defineComponent, h } from 'vue';
const input = defineComponent({
  name: 'Input',
  props:{
    text:{
      type:String,
      default:""
    }
  },
  setup() {
    return {};
  },
  render(vm:any) {
    return h('div', {}, vm.text);
  },
});
export default input;
