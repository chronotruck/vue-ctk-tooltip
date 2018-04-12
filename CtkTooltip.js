export default {
  bind (el, binding) {
    el.addEventListener('mouseenter', function () {
      let $tooltip = document.createElement('div')
      const $tooltipDimension = el.getBoundingClientRect()
      $tooltip.setAttribute('class', 'ctk-tooltip')
      $tooltip.setAttribute('id', 'CtkTooltip')
      $tooltip.innerHTML = binding.value
      $tooltip.style.left = $tooltipDimension.left + ($tooltipDimension.width / 2) + 'px'
      $tooltip.style.top = $tooltipDimension.top - 30 + 'px'
      document.body.appendChild($tooltip)
    })
    el.addEventListener('mouseleave', function () {
      const elemToRemove = document.getElementById('CtkTooltip')
      elemToRemove.parentNode.removeChild(elemToRemove)
    })
  }
}
