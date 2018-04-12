# vue-ctk-tooltip


Just a simple directive for tooltip

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

Vue.directive('ctk-tooltip', CtkTooltip)
```

#### In single component
YourComponent.vue 
```vue
import CtkTooltip from 'vue-ctk-tooltip'
export default {
  name: 'YourComponent',
  directives: {
    CtkTooltip
  }
}
```

## Example
---------------
I have created an [example](https://github.com/mimani/vue-just-another-dropdown/tree/master/example) vue webapp (documentation [here](https://github.com/mimani/vue-just-another-dropdown/blob/master/example/just-another-vue-app/README.md)), demonstrating this dropdown via simple vue webapp, checkout `example` directory in this repo.

