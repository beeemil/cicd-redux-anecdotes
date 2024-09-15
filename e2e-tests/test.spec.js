import { test, describe, expect } from '@playwright/test'


describe('anecdotes', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('Anecdotes')).toBeVisible()
    await expect(page.getByText('Debugging is twice as hard as writing the code in the first place.')).toBeVisible()
  })
})