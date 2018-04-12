# vue-ctk-tooltip

![Ctk Tooltip Example](./example/VueCtkTooltip/src/assets/ctk-tooltip-screenshot.png)

Just a directive for a simple tooltip

## Demo
An [example](https://htmlpreview.github.io/?https://github.com/chronotruck/vue-ctk-tooltip/blob/:branch/example/VueCtkTooltip/dist/index.html) is available

## Installation

### npm
``` sh
npm install --save vue-ctk-tooltip
```

## Usage


#### Globally
  main.js
```js
import Vue from 'vue'
import CtkTooltip from 'vue-ctk-tooltip'
import 'vue-ctk-tooltip/ctk-tooltip.css'

Vue.directive('ctk-tooltip', CtkTooltip)
```

  Note : Always import .css in main.js 

#### In single component
YourComponent.vue 
```js
import CtkTooltip from 'vue-ctk-tooltip'
export default {
  name: 'YourComponent',
  directives: {
    CtkTooltip
  }
}
```

```html
<button v-ctk-tooltip="'Your tooltip message'">Hover Me</button>
```

