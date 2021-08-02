<template>
  <div class="index">
    <c-form v-model:value="value" :rule="rule" />
    <a-button @click="test">ccc</a-button>
  </div>
</template>
<script>
import { defineComponent ,ref } from 'vue'
export default  defineComponent({
  name: 'Index',
  setup(props) {
    function test(){
      console.log(value.value.getFormData());
    }
    const rule = [
      {
        type: 'aInput',
        name: 'a',
        value: '',
        label: 'a',
        props: {
          placeholder: '',
        },
        col: {
          span: 4,
        },
      },
      {
        type: 'a-rate',
        name: 'b',
        value: 1,
        label: 'b',
        props: {
          placeholder: '',
        },
        col: {
          span: 4,
        },
      },
      {
        type: 'input',
        name: 'c',
        value: '',
        label: 'c',
        props: {
          placeholder: '',
        },
        col: {
          span: 4,
        },
      },
    ]
    const value = ref({})
    return {
      rule,
      value,
      test,
    }
  },
})
</script>
