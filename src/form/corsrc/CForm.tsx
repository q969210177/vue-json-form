import { defineComponent } from 'vue';
import { Vue } from 'vue-class-component';
import { getRuleItem } from '@/form/utils/getRuleItem';
import { IRuleItem } from '../types/ruleType';
interface CForm extends Vue {
  rule: []
  formModel: { [x: string]: any; }
}
const CForm = defineComponent({
  name: 'CForm',
  props: {
    rule: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  setup(props) {
    const formModel: CForm['formModel'] = {};
    if (props.rule.length) {
      const rule: IRuleItem[] = props.rule as IRuleItem[];
      rule.forEach((i: IRuleItem) => {
        formModel[i.name] = i.value;
      });
    }
    return {
      formModel,
    };
  },
  /**
   *
   * @param vm :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol"
   * @returns
   */
  render(vm: CForm) {
    console.log(vm.formModel, '1111');
    return (
      <div class="CForm">
        <a-form model={vm.formModel}>
          {vm.rule.map((i: IRuleItem) => {
            return (
              <a-form-item label="Activity name">
                {getRuleItem(i, vm)}
              </a-form-item>
            );
          })}
        </a-form>
      </div>
    );
  },
});
export default CForm;
