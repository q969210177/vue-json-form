// export default {
//   getFormData(): { [x: string]: any; } {
//     if (formData) {
//       return formData;
//     }
//     return {};
//   },

import { IRuleItem } from '../types/ruleType';

// };
class Api {
  formData = {};
  rule: IRuleItem[] = [];
  // getFormData() {
  //   if (this.formData) {
  //     return this.formData;
  //   }
  // }
  getRule(name: string) {
    for (let index = 0; index < this.rule.length; index++) {
      const i = this.rule[index];
      if (i.name === name) {
        return i;
      }
    }
  }
  setRule(name: string, newRuleItem: IRuleItem) {
    console.log(newRuleItem);

    this.rule.forEach((i: IRuleItem) => {
      if (i.name === name) {
        i = newRuleItem;
      }
    });
  }
  constructor(formData: { [x: string]: any; }, rule: IRuleItem[]) {
    this.formData = formData;
    this.rule = rule;
  }
}
export default Api;
