import { Vue } from 'vue-class-component';
import { defineComponent, h } from 'vue';
interface Itest extends Vue {
  test: any
}
const test = defineComponent({
  name: 'Test',
  setup() {
    const func1 = () => {
      console.log(this);
    };
    function func2() {
      console.log(111);
    }
    return () => (
      <div class="test">
        <a-button onClick={func1}></a-button>
      </div>
    );
  },
});
export default test;
