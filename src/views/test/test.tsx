import { Vue } from 'vue-class-component';
import { defineComponent, h, ref } from 'vue';
interface Itest extends Vue {
  testArr: any[]
  handleDragStart: (e: Event) => void
  handleDragEnd: (e: Event) => void
  handleDraging: (e: Event) => void
}
const test = defineComponent({
  name: 'Test',
  setup() {
    const testArr = ref<any[]>(['222']);
    function handleDragStart(e: DragEvent) {
      console.log(e, 'handleDragStart');
    }
    function handleDragEnd(e: Event) {
      console.log(e, 'handleDragEnd');
    }
    function handleDraging(e: any) {
      e.preventDefault();
      console.log(e.fromElement.innerHTML);
      testArr.value.push(e.fromElement.innerHTML);
      console.log(e, 'handleDraging');
    }
    // onMounted(() => {
    //   const suc = (s: any) => {
    //     const video: HTMLVideoElement =
    //       document.getElementsByTagName('video')[0];
    //     video.srcObject = s;
    //     console.log(s);
    //   };
    //   const err = (e: any) => {
    //     console.log(e);
    //   };

    //   //   window.navigator.getUserMedia({ audio: true, video: false }, suc, err);
    // });
    return {
      handleDragStart,
      handleDragEnd,
      testArr,
      handleDraging,
    };
  },
  render(vm: Itest) {
    return (
      <div class="test">
        <div>{vm.testArr}</div>
        <div
          draggable="true"
          onDragstart={vm.handleDragStart}
          onDragend={vm.handleDragEnd}
        >
          1111
        </div>
        <div onDragenter={vm.handleDraging}>
          {vm.testArr.map((i: any) => {
            return <div>{i}</div>;
          })}
        </div>
      </div>
    );
  },
});
export default test;
