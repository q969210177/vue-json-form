import defaultCompoentObj from '@/form/core/index'; //这个是表单的默认组件 通过 resolveComponent直接拿name
import CForm from '@/form/index'; //这个是用户自定义的组件 通过名字 拿 vnode实例
import { VNode } from 'vue';
export function setDefaultCompoent(name: string): number | any {
  if (defaultCompoentObj[name]) {
    return 1;
  } else {
    if (CForm.newComponent[name]) {
      return CForm.newComponent[name];
    }
    return 0;
  }
}
export function setRuleItemColSapn(span: number | undefined): number {
  if (span && span <= 24) {
    return span;
  }
  return 24;
}
