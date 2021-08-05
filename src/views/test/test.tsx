import { Vue } from 'vue-class-component';
import { defineComponent, h, computed, ref } from 'vue';
import './test.scss';
interface Itest extends Vue {
  test: any
}
const test = defineComponent({
  name: 'Test',
  setup() {
    const num = ref(0);
    const tableData = ref([1, 2, 3]);
    // const tableData = computed({
    //   get: () => [1, 2, 3],
    //   set: val => {
    //     val.forEach((i: number) => {
    //       num.value += i;
    //     });
    //   },
    // });
    const value = 1111;
    function test() {
      const count = Math.ceil(Math.random() * 100);
      for (let index = 0; index < count; index++) {
        const num = Math.ceil(Math.random() * 1000);
        tableData.value.push(num);
      }
      console.log(num.value);

      // tableData.value[0] = 3;
      // console.log(tableData);
    }
    return () => (
      <div class="test">
        <a-button onClick={test}>{num.value}</a-button>
        <div class="test_item">
          {tableData.value.map((i: number) => {
            return <div class="item">{i}</div>;
          })}
        </div>
      </div>
    );
  },
});
export default test;
