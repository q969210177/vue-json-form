
```html
<!-- 事件监听  fileId-事件名 
    距离 a-change 就是 fileId是a的组件触发的change事件
-->
<zFormCreate v-model="model" :rule="rule" @a-change="test"></zFormCreate>
<script>
  export default {
    data() {
      return {
        rule: [
          // datePicker
        ],
        model: {},
      };
    },
  };
</script>
```
### zFormCreate Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | 表单组的操作方法 | object | — | {} |
| rule | 表单渲染的控件 [详见](#v-model)  | array | array | array |
| formConfig | 设置基础的表单配置 | {} | {wrapperCol:{span:20},labelCol:{span:4},labelAlign:"left}  |   同上|






### v-model
| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 函数参数|
|---------- |-------------- |---------- |--------------------------------  |-------- | -----|
| getFormData | 获取表单的数据 | function | function | function |无|
| setValue | 设置表单某一项的value  |function | function | function | function(fileId,newValue) |

> 当type是hide的时候 他不会展示在页面上,但是在getFormData的时候他会获取的到 用来存id啥的
### ruleItem
| 参数      |  说明  |  是否必填  |          类型      | 可选值                           | 默认值  |
| --------  | ---- | ------ |  ----------------------  |-------- | -------- | 
| type | 控制展示什么组件 |  必填 | string | input,datePicker,select,radio,checkbox,switch,hide | 无 |
| props | 组件的props  |非必填 | object | 组件的props(参见antd 组件的的props) | 无 |
| fileId | 提交数据的key  |必填 唯一值 | string/number | 无 | 无 |
| value | 组件的默认值  | 必填 | any | 组件双向绑定的value | 无 |
| col | 组件的表单布局  | 非必填 | object | 参考a-col | 无 |
| label | 表单的label  |非必填 | string | 表单的label值 | 无 |
| formProps | 组件的表单配置项  |非必填 | object | a-form-item | 无 |
| on | 组件的事件  |非必填 | object | 组件的事件 | 无 |
| span | 这一格所占据的长度  |非必填 | number | 1-24 | 8 |
| rules | 表单效验  |非必填 | array | 参见antd的form校验规则 | 无 |

