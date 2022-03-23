<script lang="ts">
import { Moment } from 'moment';
import { defineComponent, h, resolveComponent } from 'vue';
interface FormState {
  arrItem: { name: string; }[]
}
export default defineComponent({
  setup() {
    const arr: { name: string; props: { [x: string]: any; }; }[] = [
      { name: '测试按钮1', props: { type: 'primary' } },
      { name: '测试按钮2', props: { type: 'link' } },
    ];
    const childBtn = (v: { name: string; props: { [x: string]: any; }; }) => {
      console.log(v.props);

      return h(resolveComponent('a-button'), { ...v.props }, v.name);
    };
    return () => {
      return h(
        'div',
        {},
        arr.map((v: { name: string; props: { [x: string]: any; }; }) => {
          return childBtn(v);
        }),
      );
    };
    // return {
    //   labelCol: { span: 4 },
    //   wrapperCol: { span: 14 },
    //   formState,
    //   onSubmit,
    // };
  },
});
</script>
