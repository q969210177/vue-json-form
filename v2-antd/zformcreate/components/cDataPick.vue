<template>
  <div class="cDataPick">
    <a-date-picker v-model="defaultValue" v-bind="$attrs" @change="handleChange" />
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: 'CDataPick',
  props: {
    value: {},
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    }
  },
  data() {
    return {
      defaultValue: null
    }
  },
  watch: {
    value(newV) {
      if (newV) {
        this.setDefaultValue()
      }
    }
  },
  mounted() {
    this.setDefaultValue()
  },
  methods: {
    //setDefaultValue
    setDefaultValue() {
      if (this.value && moment(this.value).isValid()) {
        this.defaultValue = moment(this.value)
      }
    },
    //datepicker
    handleChange(v) {
      const value = v.format(this.format)
      this.$emit('input', value)
    }
  }
}
</script>
<style lang="less" scoped>
// src/assets/less/layout.less
.cDataPick {
  width: 100%;
  height: 100%;
}
</style>
