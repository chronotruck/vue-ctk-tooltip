export default {
  name: 'ctk-tooltip',
  install: function (Vue, installOptions) {
    Vue.directive('ctk-tooltip', {
      bind: function (el, binding) {
        el.addEventListener('mouseenter', function () {
          var $tooltip = document.createElement('div')
          var $tooltipDimension = el.getBoundingClientRect()
          $tooltip.setAttribute('class', 'ctk-tooltip')
          $tooltip.setAttribute('id', 'CtkTooltip')
          $tooltip.innerHTML = binding.value
          $tooltip.style.left = $tooltipDimension.left + ($tooltipDimension.width / 2) + 'px'
          $tooltip.style.top = $tooltipDimension.top - 30 + 'px'
          document.body.appendChild($tooltip)
        })

        el.addEventListener('mouseleave', function () {
          var elemToRemove = document.getElementById('CtkTooltip')
          if (elemToRemove && elemToRemove.parentNode) {
            elemToRemove.parentNode.removeChild(elemToRemove)
          }
        })
      }
    })
  }
};