import { defineComponent } from 'vue'
import ttt from './test'
import el from '@/form/index'
el.user('aaaa',ttt)
const index = defineComponent({
  name: 'Index',
  components: {
  },
  setup() {
    const rule = [{ type: 'cinput', props:{ text:222 } } ]
    return {
      rule,
    }
  },
  render(vm: any) {
    return <json-form rule={vm.rule}>111</json-form>
  },
})
export default index
