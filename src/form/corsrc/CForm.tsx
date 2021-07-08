import { defineComponent, h, reactive, VNode, resolveComponent } from 'vue';
import { Vue } from 'vue-class-component';
import { IRuleItem } from '../types/ruleType';
import { setDefaultCompoent, setRuleItemColSapn } from '@/form/utils/utils';
interface CForm extends Vue {
  rule: []
  formModel: { [x: string]: any; }
  getRuleItem: (i: IRuleItem) => VNode
  returnFormModel: () => void
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
    value: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props, ctx) {
    const formModel: CForm['formModel'] = reactive(props.value);
    /**
     * 根据rule的item来生成组件
     * @param i
     * @returns
     */
    console.log(props);
    if (props.rule.length) {
      const rule: IRuleItem[] = props.rule as IRuleItem[];
      rule.forEach((i: IRuleItem) => {
        formModel[i.name] = i.value;
      });
    }
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
    function returnFormModel() {
      ctx.emit('update:value', { a: 111 });
    }
    returnFormModel();
    return {
      formModel,
      getRuleItem,
      returnFormModel,
    };
  },
  /**
   *
   * @param vm :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol"
   * @returns
   */
  render(vm: CForm) {
    // setRuleItemColSapn(i.col?.span)

    return (
      <div class="CForm">
        <a-form model={vm.formModel}>
          <a-row>
            {vm.rule.map((i: IRuleItem) => {
              return (
                <a-col span={i.col?.span}>
                  <a-form-item label={i.label}>{vm.getRuleItem(i)}</a-form-item>
                </a-col>
              );
            })}
          </a-row>
        </a-form>
        <a-button onClick={vm.returnFormModel}>test</a-button>
      </div>
    );
  },
});
export default CForm;
