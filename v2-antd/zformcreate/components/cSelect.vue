<template>
  <div class="cSelect">
    <a-select v-model="defaultValue" v-bind="$attrs" v-on="$listeners" @change="handleSelectChange" style="width: 100%">
      <a-select-option :key="v[valueKey] + k" v-for="(v, k) in options" :value="v[valueKey]">{{
        v[labelKey]
      }}</a-select-option>
    </a-select>
  </div>
</template>
<script>
export default {
  name: 'CSelect',
  props: {
    options: {
      type: Array,
      default: () => {
        return []
      }
    },
    labelKey: {
      type: String,
      default: 'label'
    },
    valueKey: {
      type: String,
      default: 'value'
    },
    value: {
      require: true
    }
  },
  data() {
    return {
      defaultValue: ''
    }
  },
  watch: {
    value(newV) {
      this.defaultValue = newV
    }
  },
  mounted() {
    this.defaultValue = this.value
  },
  methods: {
    handleSelectChange(v) {
      this.$emit('input', v)
    }
  }
}
</script>
<style lang="less" scoped>
.cSelect {
  width: 100%;
  height: 100%;
}
</style>
