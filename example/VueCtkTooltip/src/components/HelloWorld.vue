<template>
  <div class="ctk-tooltip-example">
    <h1>VueJS CtkTooltip directive example</h1>
    <p>Just a directive for a simple tooltip on top</p>
    <div>
      <button v-ctk-tooltip="'Example Ctk Tooltip'">Hover Me</button>
    </div>
  </div>
</template>

<script>
import CtkTooltip from 'vue-ctk-tooltip'
export default {
  name: 'HelloWorld',
  directives: {
    CtkTooltip
  }
}
</script>

<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
  button {
    background: #89c200;
    color: #FFF;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    outline: 0;
    margin-top: 40px;
  }
</style>
