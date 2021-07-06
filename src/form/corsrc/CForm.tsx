import { defineComponent, h, reactive, VNode, resolveComponent } from 'vue';
import { Vue } from 'vue-class-component';
import { IRuleItem } from '../types/ruleType';
import { setDefaultCompoent } from '@/form/utils/utils';
interface CForm extends Vue {
  rule: []
  formModel: { [x: string]: any; }
  getRuleItem: (i: IRuleItem) => VNode
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
  setup(props, ctx) {
    const formModel: CForm['formModel'] = reactive({});
    function getRuleItem(i: IRuleItem) {
      return h(resolveComponent(setDefaultCompoent(i.type)), {
        value: formModel[i.name],
        ...i.props,
        ...i.on,
        'onUpdate:value': (v: any) => {
          formModel[i.name] = v;
        },
      });
    }
    if (props.rule.length) {
      const rule: IRuleItem[] = props.rule as IRuleItem[];
      rule.forEach((i: IRuleItem) => {
        formModel[i.name] = i.value;
      });
    }
    return {
      formModel,
      getRuleItem,
    };
  },
  /**
   *
   * @param vm :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol"
   * @returns
   */
  render(vm: CForm) {
    return (
      <div class="CForm">
        <a-form model={vm.formModel}>
          {vm.rule.map((i: IRuleItem) => {
            return (
              <a-form-item label={i.label}>{vm.getRuleItem(i)}</a-form-item>
            );
          })}
        </a-form>
      </div>
    );
  },
});
export default CForm;
