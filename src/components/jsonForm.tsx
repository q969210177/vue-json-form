import { defineComponent, h } from 'vue'
interface Irule {
  type: string
}
const jsonForm = defineComponent({
  name: 'JsonForm',
  props: {
    rule: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  setup(props) {
    return {}
  },
  render(vm: any) {
    console.log(vm)

    return h('div', {}, [
      vm.rule.map((i: Irule) => {
        return <span>{i.type}</span>
      }),
    ])
  },
})
export default jsonForm
