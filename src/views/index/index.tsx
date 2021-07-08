import { IRuleItem } from '@/form/types/ruleType';
import { defineComponent, reactive } from 'vue';
import { Vue } from 'vue-class-component';
import test from './components/test';
import el from '@/form/index';
el.component(test.name, test);
interface index extends Vue {
  btnClick: () => void
  count: number
  value: string | number
}
const index = defineComponent({
  name: 'Index',
  setup() {
    const value = reactive({});
    const btnClick = () => {
      console.log(value, 'btnclick');
    };
    return { value, btnClick };
  },
  render(vm: index) {
    const rule: IRuleItem[] = [
      {
        type: 'datePicker',
        name: 'aaaa',
        value: '',
        label: '',
        props: {
          size: 'small',
        },
        col: {
          span: 6,
        },
      },
      {
        type: 'input',
        name: 'cccc',
        value: '',
        label: '2222',
        props: {
          placeholder: '11111',
        },
        col: {
          span: 4,
        },
      },
    ];
    return (
      <div class="index">
        {/* <div>{vm.value}</div> */}
        <c-form rule={rule}></c-form>
        <a-button onClick={vm.btnClick}>2222</a-button>
      </div>
    );
  },
});
export default index;
