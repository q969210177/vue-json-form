// interface ICForm extends Vue {
//   rule: any
//   formModel: { [x: string]: any; }
// }
// const CForm = defineComponent({
//   name: 'CForm',

//   setup() {
//
//     const cRule = ref<IRuleItem[]>([]);
//     props.rule.forEach((i: IRuleItem) => {
//       // const v = JSON.parse(JSON.stringify(i));
//       cRule.value.push({ ...i });
//       formModel.value[i.name] = i.value;
//     });

//     // setFormModel();
//
//     return {
//       formModel,
//     };
//   },
//   render(vm: ICForm) {
//     return (
//       <div class="CForm">

//       </div>
//     );
//   },
// });
// export default CForm;
import { Vue } from 'vue-class-component';
import { defineComponent, h, ref, resolveComponent } from 'vue';
import { IRuleItem } from '../types/ruleType';
import { setDefaultCompoent } from '../utils/utils';
import api from '../utils/api';
interface ICForm extends Vue {
  CForm: any
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
    const cRule = ref<IRuleItem[]>([]);
    function formData() {
      return formModel.value;
    }

    function setRule(name: string, newRuleItem: IRuleItem) {
      // props.rule.forEach((i: IRuleItem, k: number) => {
      //   if (i.name === name) {
      //     // newRuleItem
      //     // props.rule
      //   }
      // });
      cRule.value.forEach((i: IRuleItem, k: number) => {
        if (i.name === name) {
          cRule.value.splice(k, 1, newRuleItem);
        }
      });
      emit('update:rule', cRule.value);
      setFormModel();
      //
    }
    function setFormModel() {
      props.rule.forEach((i: IRuleItem) => {
        // const v = JSON.parse(JSON.stringify(i));
        cRule.value.push({ ...i });
        formModel.value[i.name] = i.value;
      });

      // props.rule.forEach((i: IRuleItem) => {
      //   // const v = JSON.parse(JSON.stringify(i));
      //   console.log(i, '::::::::::::');
      //   cRule.push({ ...i });
      //   formModel.value[i.name] = i.value;
      // });
    }
    setFormModel();
    emit('update:value', { setRule: setRule, formData: formData });
    return () => (
      <div class="CForm">
        <a-form model={formModel}>
          {props.rule.map((i: IRuleItem) => {
            return (
              <a-form-item name={i.name} label={i.name}>
                {h(resolveComponent(i.type), {
                  value: formModel.value[i.name],
                  'onUpdate:value': (value: any) => {
                    formModel.value[i.name] = value;
                  },
                  ...i.on,
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
