import { delay, renderWithRouter } from 'src/utils/testUtils'
import { describe, test, expect } from 'vitest'

describe('ProductDetail', () => {
  test('Render UI ProductDetail', async () => {
    renderWithRouter({ route: '/Điện-thoại-Apple-Iphone-12-64GB--Hàng-chính-hãng-VNA-i-60afb1c56ef5b902180aacb8' })
    await delay(1000)
    expect(document.body).toMatchSnapshot()
    // await screen.debug(document.body.querySelector('.bg-gray-200'))
  })
})
