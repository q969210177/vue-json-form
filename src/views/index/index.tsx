import { defineComponent,h } from 'vue'
import ttt from './test'
import el from '@/form/index'
import { Vue } from 'vue-class-component'
import './index.scss'
interface yyy  extends Vue{
  text:string | number
  rule:any[]
}
el.user('aaaa',ttt)
const index = defineComponent({
  name: 'Index',
  components: {
  },
  setup() {
    const rule = [{ type: 'a-button', props:{ text:222 } } ]
    return {
      rule,
    }
  },
  render(vm: yyy) {
    return <div class="aaa">{h('a-input',{ value:111 ,placeholder:'3333' })}</div>
  },
})
export default index
