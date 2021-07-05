import root from '@/form/index'
import { h } from 'vue';
import { IRuleItem } from '../types/ruleType';
export function getRuleItem(ruleItem:IRuleItem) {
  return h(root.comArr[ruleItem.type],{ value:ruleItem.value })
}
