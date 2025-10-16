// Su dung trang web https://demoapp-sable-gamma.vercel.app/lesson1
// lam phan bai 1 nang cao 
// check duoc ouput la Chào mừng bạn đã quay trở lại!
// su dung auto wait va webfirst assertion


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoapp-sable-gamma.vercel.app/');
  await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
  await page.getByRole('button', { name: 'Nâng cao' }).click();
  await page.getByRole('checkbox', { name: 'Tôi đồng ý với các điều khoản' }).check();
  
  //đã xác thực có id: terms-status
  await expect(page.locator('#terms-status')).toContainText('✅ Đã xác thực.');
  const button = page.getByRole('button', { name: 'Tiếp tục' })
  await button.click()

  const button1 = page.locator('#final-step');
  await button1.waitFor({state: 'visible', timeout: 4000})
  await expect(button1).toContainText('Chào mừng bạn đã quay trở lại!');
});