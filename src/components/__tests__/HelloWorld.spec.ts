import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import timeline from '../timeline.vue'

describe('timeline', () => {
  it('renders properly', () => {
    const wrapper = mount(timeline, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
