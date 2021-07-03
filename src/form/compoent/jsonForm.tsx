import { defineComponent, h } from 'vue';
import compoentArr from '@/form/compoent/index';
interface Irule {
  type: string
  props?:string[]
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
      compoentArr,
    };
  },
  render(vm: any) {
    const testName = 'Btn'
    console.log(vm.compoentArr);
    //h(i.type, { text:1111 } );
    return <div>{vm.rule.map((i:any)=>{
      // return <div>{i.type}</div>
      return h('button', { text:1111 } ); //
    })}</div>
    // return h('test', {}, [
    //   // vm.rule.map((i: Irule) => {
    //   //   console.log(i.props);
    //   //   // h(vm.comArr[i.type].type).props = { ...i.props }
    //   //   return h(vm.comArr[i.type],{ props:{ text:111 } });
    //   // }),
    // ]);
  },
});
export default jsonForm;
