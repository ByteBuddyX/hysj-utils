## hy-until
旨在提供一系列日常常用工具函数，为大家工作带来便利，后续仓库会经常进行维护

### cardiacResuscitation
cardiacResuscitation是一个异步重试函数 提供错误重新执行机制

| 参数          | 描述                            |
| ------------- | ---------------------------    |
| `func`        | 返回Promise的函数              |
| `time`         | 错误之后多久重试一次 默认500ms  |
| `times`       | 重试的次数 （不填默认无限重试）  |

### removeDuplication
removeDuplication 提供一组数组去重的方法

#### basicsRemoveDuplication
· 简单类型数组去重

| 参数          | 描述                            |
| ------------- | ---------------------------    |
| `array`        | 仅包含基础数据类型的数组        |

#### complexRemoveDuplication
· 数组对象去重

| 参数          | 描述                            |
| ------------- | ---------------------------    |
| `array`        | 数组对象                       |
| `key`         | 以对象那个属性进行去重            |
