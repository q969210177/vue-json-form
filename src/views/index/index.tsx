import { defineComponent,h } from 'vue'
import ttt from './test'
import { Vue } from 'vue-class-component'
import './index.scss'
interface yyy  extends Vue{
  text:string | number
  rule:any[]
}
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
    // <a-button value={111}>111</a-button>
    return <div class="aaa">{h(ttt,{ type:'primary'  },[111])}</div>
  },
})
export default index
