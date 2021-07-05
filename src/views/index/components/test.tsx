import { defineComponent } from 'vue';
import { Vue } from 'vue-class-component'
type test = Vue
const  test = defineComponent({
  name:'Test',
  setup(){
    return{}
  },
  render(vm: test) {
    return <div class='test'>111111</div>
  },
})
export default test
