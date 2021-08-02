import { Vue } from 'vue-class-component';
import { defineComponent, h, ref, resolveComponent } from 'vue';
import { IRuleItem } from '../types/ruleType';
import { setDefaultCompoent } from '../utils/utils';
interface ICForm extends Vue {
  rule: any
  formModel: { [x: string]: any; }
}
const CForm = defineComponent({
  name: 'CForm',
  props: {
    rule: {
      default: () => {
        return [];
      },
    },
    value: {
      required: true,
    },
  },
  setup(props, { emit }) {
    const formModel = ref<any>({});
    function getFormData() {
      return formModel;
    }
    props.rule.forEach((i: IRuleItem) => {
      formModel.value[i.name] = i.value;
    });
    emit('update:value', { getFormData: getFormData });
    return {
      formModel,
    };
  },
  render(vm: ICForm) {
    return (
      <div class="CForm">
        <a-form model={vm.formModel}>
          {vm.rule.map((i: IRuleItem) => {
            return (
              <a-form-item>
                {h(resolveComponent(i.type), {
                  value: vm.formModel[i.name],
                  'onUpdate:value': (value: any) => {
                    vm.formModel[i.name] = value;
                    // this.$emit('update:value', value);
                  },
                })}
              </a-form-item>
            );
          })}
        </a-form>
      </div>
    );
  },
});
export default CForm;
