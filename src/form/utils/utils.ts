import defaultCompoentObj from '@/form/compoent/index'; //这个是表单的默认组件 通过 resolveComponent直接拿name
import CForm from '@/form/index'; //这个是用户自定义的组件 通过名字 拿 vnode实例
export function setDefaultCompoent(name: string): string {
  if (defaultCompoentObj[name]) {
    return defaultCompoentObj[name];
  } else {
    if (CForm.newComponent[name]) {
      return '2';
    }
    return '0';
  }
}
export function setRuleItemColSapn(span: number | undefined): number {
  if (span && span <= 24) {
    return span;
  }
  return 24;
}
