import defaultCompoentObj from '@/form/compoent/index';
import CForm from '@/form/index';
export function setDefaultCompoent(name: string): number | string {
  if (defaultCompoentObj[name]) {
    return 1;
  } else {
    if (CForm.newComponent[name]) {
      return 2;
    }
    return 0;
  }
}
