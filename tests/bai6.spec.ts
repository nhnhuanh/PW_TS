import { test, expect } from '@playwright/test';
//const DEMO_URL  = 'https://demoapp-sable-gamma.vercel.app/'

test('Click nhiều button 1 lúc', async ({ page }) => {
  await page.goto('https://demoapp-sable-gamma.vercel.app/');
  await page.getByRole('link', { name: 'Bài 4: Mouse Actions' }).click();
  const files = [
    '📄 Document.pdf',
    '🖼️ Image.jpg',
    '📊 Report.xlsx',
    '🎵 Music.mp3',
    '📹 Video.mp4',
  ];
  //for each ko dung duoc await
  for (const f of files) {
    await page.getByRole('button', { name: f }).click();
  }
  await expect(page.locator('#ac-selected-count-advanced')).toContainText('Selected: 5 items');
   await page.locator('#ac-process').click();
  const successMessage = page.locator('.ant-space-item .ant-alert-message');
  // const successMessageTxtResult = await successMessage.innerText();
  await expect(successMessage).toContainText('Processing Complete!');
 // await page.pause();
});

test('Phím chức năng (Function Keys)', async ({ page }) => {

    // Nhấn phím Enter
    await page.locator('input').press('Enter');

    // Nhấn phím Delete
    await page.locator('input').press('Delete');

    // Nhấn phím Arrow
    await page.locator('input').press('ArrowUp');
    await page.locator('input').press('ArrowDown');
    await page.locator('input').press('ArrowLeft');
    await page.locator('input').press('ArrowRight');

    // Nhấn phím Escape
    await page.locator('input').press('Escape');

    // Nhấn phím Tab
    await page.locator('input').press('Tab');

    // Nhấn phím Space
    await page.locator('input').press('Space');
})