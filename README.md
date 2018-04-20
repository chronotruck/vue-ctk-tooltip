# vue-ctk-tooltip

![Ctk Tooltip Example](./example/VueCtkTooltip/src/assets/ctk-tooltip-screenshot.png)

Just a directive for a simple tooltip

Support : Chrome, FireFox, IE9+

## Demo
An [example](https://htmlpreview.github.io/?https://github.com/chronotruck/vue-ctk-tooltip/blob/:branch/example/VueCtkTooltip/dist/index.html) is available

## Installation

### npm
``` sh
npm install vue-ctk-tooltip --save
```

## Usage

  main.js
```js
import Vue from 'vue'
import CtkTooltip from 'vue-ctk-tooltip'
import 'vue-ctk-tooltip/ctk-tooltip.css'
Vue.use(CtkTooltip)
``` 


```html
<button v-ctk-tooltip="'Your tooltip message'">Hover Me</button>
```

