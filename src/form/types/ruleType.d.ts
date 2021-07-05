import { Col, Popover, Row, Tooltip } from 'ant-design-vue';
export interface IOptionAttrs {
  col?:
    | boolean
    | (Col & {
        labelWidth?: number | string
        show?: boolean
      })
  row?:
    | boolean
    | (Row & {
        show?: boolean
      })
  form?: {
    inline?: boolean
    disabled?: boolean
    layout?: 'horizontal' | 'vertical' | 'inline'
    labelWidth?: string
    labelSuffix?: string
    showMessage?: boolean
    inlineMessage?: boolean
    statusIcon?: boolean
    validateOnRuleChange?: boolean
    size?: ElementUIComponentSize
    className?: any
    col?: boolean
  }
}

export interface IRuleItem {
  type: string
  name: string
  value: any
  label: string
}
