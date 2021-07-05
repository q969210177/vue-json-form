import { defineComponent } from 'vue';
import { Vue } from 'vue-class-component'
interface index  extends Vue{

}
const  index = defineComponent({
 name:'index',
 setup(){
  return{}
 },
 render(vm: index) {
  return <div class='index'></div>
 },
})
export default index