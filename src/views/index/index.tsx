import { defineComponent } from 'vue'
const index = defineComponent({
  name: 'Index',
  components: {
  },
  setup() {
    // { type: 'c',props:{ text:222 } }
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
