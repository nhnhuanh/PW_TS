import { test, expect } from '@playwright/test';
//const DEMO_URL  = 'https://demoapp-sable-gamma.vercel.app/'

test('Demo: setChecked() vs check() / uncheck()', async ({ page }) => {
    //locator.check() -> đảm bảo ô đc check (nếu đã check thì k làm gì tiếp)
    // locator.uncheck() -> đảm bảo ô bị uncheck (nếu đã uncheck thì cũng k làm gì tiếp)
    // locator.setChecked(boolean) -> 
    // Checkbox 1: check() / uncheck()
    await page.locator('#demo-checkbox-1').check();
    await expect(page.locator('#demo-checkbox-1')).toBeChecked();

    await page.locator('#demo-checkbox-1').uncheck();
    await expect(page.locator('#demo-checkbox-1')).not.toBeChecked();

    // Checkbox 2: setChecked(true/false)
    await page.locator('#demo-checkbox-2').setChecked(true);
    await expect(page.locator('#demo-checkbox-2')).toBeChecked();

    await page.locator('#demo-checkbox-2').setChecked(false);
    await expect(page.locator('#demo-checkbox-2')).not.toBeChecked();

    // Checkbox 3: Idempotent - Gọi lại nhiều lần an toàn
    await page.locator('#demo-checkbox-3').setChecked(true);
    await page.locator('#demo-checkbox-3').setChecked(true); // ✅ Vẫn OK, không có side effect
    await expect(page.locator('#demo-checkbox-3')).toBeChecked();
})
test('Library Dropdown: Click đúng phần tử (không phải wrapper)', async ({ page }) => {
   
   
    const panel = page.getByRole('tabpanel', { name: '☑️ Checkboxes & Radio' });

    // ❌ SAI: Click wrapper → không mở menu
    await panel.locator('#lib-strict-wrapper').click();
    await expect(panel.locator('#lib-strict-menu')).toHaveCount(0);

    // ❌ CŨNG SAI: Click info box bên trong (không phải control) → không mở
    await panel.getByText('Click vào đây (info box)').click();
    await expect(panel.locator('#lib-strict-menu')).toHaveCount(0);

    // ✅ ĐÚNG: Click control → mở menu
    await panel
    .locator("xpath=//div[@id='lib-strict-control']//input[@role='combobox' and @aria-label='Strict fruits combobox']")
    .click();

    await expect(panel.locator('#lib-strict-menu')).toBeVisible();

    // Chọn một option và verify
    await panel.locator("xpath=//div[@id='lib-strict-menu']//div[normalize-space()='Banana']").click();
    await expect(panel.locator('#lib-strict-value')).toHaveText('Banana');
})

test('Dropdowns (Select & Custom)', async ({ page }) => {

// Scope tab và đợi element render
const panel = page.getByRole('tabpanel', { name: '☑️ Checkboxes & Radio' });

// A) Native <select> - Cách 1: Theo ID (ổn định nhất)
const countrySelect = panel.locator('#country-select');
await countrySelect.waitFor({ state: 'visible' });
await countrySelect.selectOption({ label: 'Japan' });
await expect(countrySelect).toHaveValue('Japan');

// A) Native <select> - Cách 2: XPath theo label (nếu không có ID)
// const countrySelect = panel.locator("xpath=//label[text()='Country']/following-sibling::select");
// await countrySelect.waitFor({ state: 'visible' });
// await countrySelect.selectOption({ label: 'Japan' });

// A) Native <select> - Cách 3: XPath theo label với normalize-space
// const countrySelect = panel.locator("xpath=//label[normalize-space()='Country']/following-sibling::select[1]");
// await countrySelect.waitFor({ state: 'visible' });
// await countrySelect.selectOption({ label: 'Japan' });

// Chọn theo value
await countrySelect.selectOption('United States');
await expect(countrySelect).toHaveValue('United States');

// B) Custom dropdown không có <select>
// Mở dropdown bằng nút trigger (theo class & text)
await panel.locator("xpath=//div[contains(@class,'custom-dropdown')]//div[contains(@class,'cd-trigger')]").click();

// Chọn mục theo text chính xác
await panel.locator("xpath=//ul[contains(@class,'cd-menu')]//li[normalize-space()='Banana']").click();

// Verify text hiển thị trên trigger đã đổi
await expect(
  panel.locator("xpath=//div[contains(@class,'custom-dropdown')]//span[contains(@class,'cd-value')]")
).toHaveText('Banana');

// Trường hợp dropdown đóng, mở lại và chọn mục khác
await panel.locator("xpath=//div[contains(@class,'custom-dropdown')]//div[contains(@class,'cd-trigger')]").click();
await panel.locator("xpath=//ul[contains(@class,'cd-menu')]//li[normalize-space()='Cherry']").click();
await expect(
  panel.locator("xpath=//div[contains(@class,'custom-dropdown')]//span[contains(@class,'cd-value')]")
).toHaveText('Cherry');
})


 // ALERT → Accept và assert UI
 page.once('dialog', async (dialog) => {
    console.log(dialog.type());
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toContain('Hello from alert');
    await dialog.accept();
  });
  await page.locator('#btn-alert').click();
  await expect(page.locator('#alert-result')).toHaveText('Alert acknowledged');
test('ví dụ về  alert va modal', async ({ page }) => {
  await page.goto('https://demoapp-sable-gamma.vercel.app/');

  await page.getByRole('link', { name: 'Bài 4: Mouse Actions' }).click();
  await page.getByRole('tab', { name: 'Alerts & Modals' }).click();

  // ALERT → Accept và assert UI
page.once('dialog', async (dialog) => {
    console.log(dialog.type());
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toContain('Hello from alert');
    await dialog.accept();
  });
  await page.locator('#btn-alert').click();
  await expect(page.locator('#alert-result')).toHaveText('Alert acknowledged');
  await page.pause();
});