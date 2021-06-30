import { defineComponent, h, PropType, ref, Ref } from 'vue'
import jsonForm from '@/components/jsonForm'
const index = defineComponent({
  name: 'Index',
  components: {
    'json-form': jsonForm,
  },
  setup() {
    const rule = [{ type: 'btn' }, { type: 'input' }]
    return {
      rule,
    }
  },
  render(vm: any) {
    return <json-form rule={vm.rule}></json-form>
  },
})
export default index
