import { IRuleItem } from '@/form/types/ruleType';
import { defineComponent, ref } from 'vue';
import { Vue } from 'vue-class-component';
import test from './components/test';
import el from '@/form/index';
el.component(test.name, test);
interface index extends Vue {
  testClick: () => void
  count: number
  value: string | number
}
const index = defineComponent({
  name: 'Index',
  setup() {
    const value = ref(0);
    return { value };
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
      },
      {
        type: 'input',
        name: 'cccc',
        value: '',
        label: '2222',
        props: {
          placeholder: '11111',
        },
        on: {
          onChange(v: any) {
            console.log(v);
          },
        },
      },
      // { type: 'Test', name: 'zzzz', value: '', label: '测试组件' },
    ];
    return (
      <div class="index">
        <c-form rule={rule}></c-form>
        <a-textarea value={vm.value} placeholder="Basic usage" />
      </div>
    );
  },
});
export default index;
