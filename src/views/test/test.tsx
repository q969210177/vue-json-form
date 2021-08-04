import { Vue } from 'vue-class-component';
import { defineComponent, h } from 'vue';
interface Itest extends Vue {
  test: any
}
const test = defineComponent({
  name: 'Test',
  setup() {
    const value = 1111;
    return () => <div class="test">{value}</div>;
  },
});
export default test;
