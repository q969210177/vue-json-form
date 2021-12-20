import { defineComponent, resolveComponent, h } from "vue";
import { Vue } from "vue-class-component";
interface Itest extends Vue {
  func1: void;
}
const test = defineComponent({
  name: "Test",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  setup(pros, con) {
    return () => {
      h(resolveComponent(pros.value), { ...con.attrs });
    };
  },
});
export default test;
