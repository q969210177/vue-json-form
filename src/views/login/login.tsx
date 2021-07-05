import { IRuleItem } from '@/form/types/ruleType';
import { defineComponent } from 'vue';
import { Vue } from 'vue-class-component';
type login = Vue;
const login = defineComponent({
  name: 'Login',
  setup() {
    return {};
  },
  render(vm: login) {
    // const rule: IRuleItem[] = [
    //   { type: 'DatePicker', name: 'aaaa', value: '2020-01-01', label: '' },
    //   { type: 'Input', name: 'cccc', value: '111111', label: '2222' },
    //   { type: 'Test', name: 'zzzz', value: '', label: '测试组件' },
    // ];
    return <div class="login">{/* <c-form rule={rule}></c-form> */}</div>;
  },
});
export default login;
