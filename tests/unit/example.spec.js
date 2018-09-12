import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders slots', () => {
    const wrapper = shallowMount(HelloWorld, {
      slots: {
        default: 'Hi, I am the default slot!',
        header: 'Hi, I am the header slot!'
      }
    })

    console.log('$$$', wrapper.html())
  })
})
