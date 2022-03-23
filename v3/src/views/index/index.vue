<template>
  <div class="index">111</div>
</template>
<script>
import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'Index',
  setup(props) {
    // h('div', {}, '111');
    return () => {
      // <div class="index">1111</div>;
    };
    // return (
    //   <template>
    //
    //   </template>
    // );
  },
});
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
}
</style>
