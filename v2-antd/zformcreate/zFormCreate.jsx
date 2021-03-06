/* eslint-disable no-unused-vars */
import zFormCreateItem from './zFormCreateItem'
import {returnEvent, getRuleItem, returnSlots} from './utils/utils'
import './style/zFormCreate.less'

export default {
  name: 'ZFormCreate',
  components: {
    zFormCreateItem
  },
  props: {
    rule: {
      type: Array,
      default: () => {
        return []
      }
    },
    formConfig: {
      type: Object,
      default: () => {
        return {
          labelCol: {span: 4},
          wrapperCol: {
            span: 20
          },
          labelAlign: 'left',
          labelWidth: 130,
          colonStatus: true
        }
      }
    },
    value: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      formData: {},
      copyRule: []
    }
  },
  beforeMount() {
    this.$emit('input', {
      getFormData: this.getFormData,
      setValue: this.setValue,
      validate: this.zCreateFormValidate,
      resetRule: this.resetRule,
      updateRule: this.updateRule,
      setRuleItemOptions: this.setRuleItemOptions
    })
  },
  mounted() {
    this.copyRule = JSON.parse(JSON.stringify(this.rule))
  },
  methods: {
    //获取json格式的数据
    getFormData() {
      this.copyRule.forEach(i => {
        // this.formData[i.fileId] = i.value
        this.$set(this.formData, i.fileId, i.value)
      })
      return JSON.parse(JSON.stringify(this.formData))
    },
    //设置组件的value
    setValue(fileId, newV) {
      const {ruleItem} = getRuleItem(this.copyRule, fileId)
      ruleItem.value = newV
    },
    //表单验证的回调函数
    zCreateFormValidate(callback) {
      return this.$refs.zCreateForm.validate(v => callback(v))
    },
    //将rule重置成最开始的状态
    resetRule() {
      this.copyRule = JSON.parse(JSON.stringify(this.rule))
    },
    //重新给copyrule赋值
    updateRule() {
      this.copyRule = JSON.parse(JSON.stringify(this.rule))
    },
    //设置组件的option
    setRuleItemOptions(fileId, data) {
      const {ruleItem} = getRuleItem(this.copyRule, fileId)
      ruleItem.options = data
      // this.updateRule()
    }
    //设置组件的rule
    // setFormRule(fileId, rule) {},
  },
  render() {
    const formConfig = Object.assign(
      {
        labelCol: {span: 4},
        wrapperCol: {
          span: 20
        },
        labelAlign: 'left',
        labelWidth: 130
      },
      this.formConfig
    )
    this.getFormData()
    return (
      <div class="zCreateForm">
        <a-form-model ref="zCreateForm" props={{model: this.formData, ...formConfig}} colon={false}>
          <a-row gutter={20}>
            {this.copyRule.map(i => {
              let eventLoop = {}
              if (i.on) {
                eventLoop = {
                  ...returnEvent(this.$listeners, i.fileId),
                  ...i.on
                }
              } else {
                eventLoop = returnEvent(this.$listeners, i.fileId)
              }
              if (i.type !== 'hide') {
                return (
                  <a-col span={i.span ? i.span : 24}>
                    <div
                      class={{
                        rule_item: true
                      }}
                      onClick={() => {
                        this.$emit('rowClick', i.fileId)
                        this.$emit('update:clickActive', i.fileId)
                      }}
                    >
                      <div class="rule_item_form">
                        <slot name={i.fileId} data={i}>
                          <zFormCreateItem
                            // onValueChange={() => this.getFormData()}
                            formConfig={formConfig}
                            formItem={i}
                            eventLoop={eventLoop}
                          >
                            {returnSlots(this.$slots, i.fileId) ? returnSlots(this.$slots, i.fileId) : ''}
                          </zFormCreateItem>
                        </slot>
                      </div>
                    </div>
                  </a-col>
                )
              }
            })}
          </a-row>
        </a-form-model>
      </div>
    )
  }
}
