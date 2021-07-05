import root from '@/form/index';
import { h, ref } from 'vue';
import { Vue } from 'vue-class-component';
import { IRuleItem } from '../types/ruleType';
export function getRuleItem(ruleItem: IRuleItem, vm: Vue) {
  const value = ref(ruleItem.value);
  return h(root.comArr[ruleItem.type], {
    value: value.value,
    'onUpdate:value': (v: any) => {
      value.value = v;
      ruleItem.value = v;
      vm.$emit('update:value', v);
    },
  });
}
