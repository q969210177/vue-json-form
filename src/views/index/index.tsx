import { IRuleItem } from '@/form/types/ruleType';
import {  defineComponent, ref } from 'vue';
import { Vue } from 'vue-class-component'
import test from './components/test'
import el from '@/form/index'
el.component(test.name,test)
interface index  extends Vue{
  testClick:()=>void
  count:number
}
const  index = defineComponent({
  name:'Index',
  setup(){
    return{   }
  },
  render(vm: index) {
    const rule:IRuleItem[] = [
      { type:'DatePicker',name:'aaaa',value:'' },
      { type:'Input',name:'cccc',value:'' },
      { type:'Test',name:'cccc',value:'' },
    ]
    return <div class='index' >
      <c-form rule={rule}></c-form>
    </div>
  },
})
export default index
