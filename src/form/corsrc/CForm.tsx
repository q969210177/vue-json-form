import { defineComponent } from 'vue';
import { Vue } from 'vue-class-component'
import { getRuleItem } from '@/form/utils/getRuleItem'
import { IRuleItem } from '../types/ruleType';
interface CForm  extends Vue{
    rule:[]
    formModel:{[x:string]:any;}
}
const  CForm = defineComponent({
  name:'CForm',
  props:{
    rule:{
      type:Array,
      default:()=>{
        return []
      },
    },
  },
  setup(){
    const formModel = {}
    return{
      formModel,
    }
  },
  /**
   *
   * @param vm :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol"
   * @returns
   */
  render(vm: CForm) {
    return <div class='CForm'>
      <a-form model={vm.formModel}>
        {vm.rule.map((i:IRuleItem)=>{
          return <a-form-item label="Activity name">{getRuleItem(i)}</a-form-item>
        })}
      </a-form>
    </div>
  },
})
export default CForm
