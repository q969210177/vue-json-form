import { defineComponent, h, reactive, VNode, resolveComponent } from 'vue';
import { Vue } from 'vue-class-component';
import { IRuleItem } from '../types/ruleType';
import { setDefaultCompoent, setRuleItemColSapn } from '@/form/utils/utils';
import defaultCompoentObj from '@/form/compoent/index'; //这个是表单的默认组件 通过 resolveComponent直接拿name

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
    const formModel: CForm['formModel'] = reactive({});
    //Api func 这里用一下方法处理 数据
    const funcObj = {
      getValue: (key: string) => {
        return formModel[key];
      },
      getFormData: () => {
        return formModel;
      },
    };
    const CApi = reactive(props.value);
    CApi.getValue = funcObj.getValue;
    CApi.getFormData = funcObj.getFormData;
    ctx.emit('update:valie', CApi);
    /**
     * 根据rule的item来生成组件
     * @param i
     * @returns
     */
    if (props.rule.length) {
      const rule: IRuleItem[] = props.rule as IRuleItem[];
      rule.forEach((i: IRuleItem) => {
        formModel[i.name] = i.value;
      });
    }
    function getRuleItem(i: IRuleItem) {
      return h(
        setDefaultCompoent(i.type) === 1
          ? resolveComponent(defaultCompoentObj[i.type])
          : setDefaultCompoent(i.type),
      );
      // return h(resolveComponent(setDefaultCompoent(i.type)), {
      //   value: formModel[i.name],
      //   ...i.props,
      //   ...i.on,
      //   'onUpdate:value': (v: any) => {
      //     formModel[i.name] = v;
      //   },
      // });
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
      </div>
    );
  },
});
export default CForm;
