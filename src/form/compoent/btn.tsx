import { defineComponent, getCurrentInstance, Slots, h } from 'vue'

interface Data {
  [key: string]: unknown
}
interface SetupContext {
  attrs: Data
  slots: Slots
  emit: (event: string, ...args: unknown[]) => void
}
// const { ctx } = getCurrentInstance()

const Button = defineComponent({
  name: 'Btn',
  setup(prop, ctx: SetupContext) {
    const { proxy } = getCurrentInstance() as { proxy: any; } //  方式二，此方法在开发环境以及生产环境下都能放到组件上下文对象（推荐）
    const data = 0
    function testClick() {
      console.log(proxy.$refs.ref)
    }
    const btnProp = {
      data,
      onClick: testClick,
    }
    return {
      btnProp,
    }
  },
  render(vm: any) {
    return h('div', {}, [
      <button type="button" ref="ref" {...vm.btnProp}>
        11111111111111111
      </button>,
    ])
  },
})
export default Button
