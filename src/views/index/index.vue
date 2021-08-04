<template>
  <div class="index">
    <c-form v-model:value="value" v-model:rule="rule" />
    <a-button @click="test">ccc</a-button>
    <a-button @click="ttt">zzz</a-button>
    <!-- src="https://oss.evergrandeauto.com/ota-test/download/carModel/pic/821ee3327e77434db74a82ad2b9b747b.svg" -->
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
        on:{
          onChange(){
            console.log(props);
          },
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
    ])
    function test(){
      // rule.value[0] = { type: 'a-rate',name: 'c',value: 5 }
      value.value.setRule('a', {
        type: 'a-rate',
        name: 'cccc',
        value: 1,
        label: 'b',
      })
    }
    function ttt(){
      // rule.value[0] = { type: 'a-rate',name: 'c',value: 5 }
      console.log(value.value.formData());
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
