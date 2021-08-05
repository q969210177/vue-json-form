<template>
  <div class="index">
    <c-form v-model:value="value" v-model:rule="rule" />
    <!-- <a-button @click="test">ccc</a-button> -->
    <a-button @click="ttt">{{ value.formData() }}</a-button>
  </div>
</template>
<script>
import { defineComponent ,ref } from 'vue'
export default  defineComponent({
  name: 'Index',
  setup(props) {
    const value = ref({})
    const rule =ref ([
      {
        type: 'input',
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
        type: 'input',
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
        type: 'datePicker',
        name: 'C',
        value: '',
        label: 'C',
        props: {
          placeholder: '',
        },
        col: {
          span: 4,
        },
      },
    ])
    function test(){
      // rule.value[0] = { type: 'a-rate',name: 'c',value: 5 }
      value.value.setRule('a', {
        type: 'rate',
        name: 'cccc',
        value: 1,
        label: 'b',
      })
    }
    function ttt(){
      // rule.value[0] = { type: 'a-rate',name: 'c',value: 5 }

    }
    return {
      rule,
      value,
      test,
      ttt,
    }
  },
})
</script>
