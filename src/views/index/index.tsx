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
      { type: 'DatePicker', name: 'aaaa', value: '2020-01-01' },
      { type: 'Input', name: 'cccc', value: '111111' },
      { type: 'Test', name: 'zzzz', value: '' },
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
