import { h, defineComponent, computed } from 'vue'

import { hSlot } from '../../utils/composition-render.js'

export default defineComponent({
  name: 'QToolbar',

  props: {
    inset: Boolean
  },

  setup (props, { slots }) {
    const classes = computed(() =>
      'q-toolbar row no-wrap items-center'
      + (props.inset === true ? ' q-toolbar--inset' : '')
    )

    return () => h('div', { class: classes.value }, hSlot(slots.default))
  }
})
