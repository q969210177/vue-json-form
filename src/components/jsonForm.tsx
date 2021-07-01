import { defineComponent, h } from 'vue';
import comArr from './compoent';
interface Irule {
  type: string
}
const jsonForm = defineComponent({
  name: 'JsonForm',
  props: {
    rule: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  setup(props) {
    return {
      comArr,
    };
  },
  render(vm: any) {
    console.log(vm);
    return h('div', {}, [
      vm.rule.map((i: Irule) => {
        return h(vm.comArr[i.type]);
      }),
    ]);
  },
});
export default jsonForm;
