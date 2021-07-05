import { IRuleItem } from '@/form/types/ruleType';
import { defineComponent } from 'vue';
import { Vue } from 'vue-class-component'
type login = Vue
const  login = defineComponent({
  name:'Login',
  setup(){
    return{}
  },
  render(vm: login) {
    const rule:IRuleItem[] = [
      { type:'DatePicker',name:'aaaa',value:'' },
      { type:'Input',name:'cccc',value:'' },
      { type:'Test',name:'cccc',value:'' },
    ]
    return <div class='login'>
      <c-form rule={rule}></c-form>
    </div>
  },
})
export default login
