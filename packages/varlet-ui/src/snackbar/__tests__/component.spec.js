import Snackbar from '..'
import VarSnackbar from '../Snackbar'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, mockStubs } from '../../utils/test'
import { expect, vi } from 'vitest'

test('test snackbar component plugin', () => {
  const app = createApp({}).use(Snackbar.Component)
  expect(app.component(Snackbar.Component.name)).toBeTruthy()
})

test('test snackbar style', async () => {
  const template = `
     <var-snackbar
      v-model:show="show"
      type="error"
      position="center"
      content-class="test-snackbar"
      vertical
      :duration="500"
      loading-type="wave"
      loading-size="large"
      content="test snackbar"
      forbid-click
      lock-scroll
    />
   `
  const wrapper = mount({
    components: {
      [VarSnackbar.name]: VarSnackbar,
    },
    data() {
      return {
        show: true,
      }
    },
    template,
  })

  await delay(200)
  expect(document.body.innerHTML).toMatchSnapshot()

  await delay(500)
  expect(document.querySelector('.var-snackbar').style.display).toBe('none')

  wrapper.unmount()
})

test('test snackbar event', async () => {
  const open = vi.fn()
  const opened = vi.fn()
  const close = vi.fn()
  const closed = vi.fn()
  const { mockRestore } = mockStubs()

  const template = `
    <var-snackbar v-model:show="show" @open="open" @opened="opened" @close="close" @closed="closed">
      Snackbar
    </var-snackbar>`

  const wrapper = mount({
    components: {
      [VarSnackbar.name]: VarSnackbar,
    },
    data() {
      return {
        show: false,
      }
    },
    methods: {
      open,
      opened,
      close,
      closed,
    },
    template,
  })

  await delay(0)
  await wrapper.setData({ show: true })
  await delay(200)
  await wrapper.setData({ show: false })
  await delay(200)

  expect(open).toHaveBeenCalledTimes(1)
  expect(opened).toHaveBeenCalledTimes(1)
  expect(close).toHaveBeenCalledTimes(1)
  expect(closed).toHaveBeenCalledTimes(1)

  mockRestore()
  wrapper.unmount()
})
