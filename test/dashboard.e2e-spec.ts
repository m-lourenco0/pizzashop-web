import { expect, test } from '@playwright/test'

test('display month revenue orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('R$ 1.000,00', { exact: true })).toBeVisible()
  expect(page.getByText('+5% em relação ao mês passado')).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação ao mês passado')).toBeVisible()
})

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('200', { exact: true })).toBeVisible()
  expect(page.getByText('+7% em relação a ontem')).toBeVisible()
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('5', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação ao mês passado')).toBeVisible()
})
