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
    const value: any = reactive({});
    const btnClick = () => {
      const vvv: any = value.getFormData();
      console.log(vvv, 'btnclick');
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
          span: 2,
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
      {
        type: 'Test',
        name: 'dddd',
        value: '',
        label: 'test',
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
        <div>{vm.value}</div>
        <c-form rule={rule} value={vm.value}></c-form>
        <a-button onClick={vm.btnClick}>2222</a-button>
      </div>
    );
  },
});
export default index;
