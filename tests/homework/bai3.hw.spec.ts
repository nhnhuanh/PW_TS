//getByRole



import { test, expect } from '@playwright/test';

const DEMO_URL = 'https://demoapp-sable-gamma.vercel.app/'

 test('Advanced Playwright Locator Exercises', async ({ page }) => {
    await page.goto('https://demoapp-sable-gamma.vercel.app/');
    await page.getByRole('link', {name: 'Bài 2: Playwright Locators'}).click();
    // await page.getByRole('button', {name: 'Playwright getByRole'}).click();
    await page.getByRole('button', {name: 'CSS Selector'}).click();
    await page.getByRole('button', {name: 'Bài tập'}).click();
    

    //Bài 1: Complex role-based selections + filters
    //câu 1: Bold đang bật 
    const boldButton = page.getByRole('button', {name: 'Bold' , pressed: true});
    await boldButton.click();

    //câu 2: Menu "More options"
    const moreOptionsButton = page.getByRole('button', {name:'More options', expanded: false})
    await moreOptionsButton.click();
    const duplicateButton = page.getByRole('menuitem', {name: 'Duplicate'})
    await expect(duplicateButton).toBeVisible()

    //câu 3: Xác nhận mục "Download" ở menu đang disabled
    const downloadButton = page.getByRole('menuitem', {name: 'Download (disabled)', disabled: true});
    await expect(downloadButton).toBeDisabled();

    //câu 4: Mở combobox "Font family" và chọn option "Roboto" (aria-selected).
    const comboboxButton = page.getByRole('combobox', {name: 'Font family', expanded: false})
    await comboboxButton.click()
    const robotoButton = page.getByRole('option', {name: 'Roboto', selected: true})
    await expect(robotoButton).toBeVisible()

    //câu 5: Điền textbox "Tiêu đề" bằng giá trị: Bài viết mới.
    await page.getByRole('textbox', {name: 'Tiêu đề'}).fill('Bài viết mới');

    //câu 6: Khẳng định nút "Publish" đang disabled.
    await expect(page.getByRole('button', {name: 'Publish'})).toBeDisabled();

    //Bài 2: Advanced accessibility scenarios

    //câu 1: Tìm landmark navigation có tên "Primary" và xác nhận link "Home" là trang hiện tại.
    const landmarkNavigaton = page.getByRole('navigation', {name: 'Primary'});
    await expect(landmarkNavigaton).toBeVisible();
    const homeLink = landmarkNavigaton.getByRole('link', {name: 'Home'});
    //await homeLink.highlight()
    //await page.pause()
    await expect(homeLink).toHaveAttribute('aria-current', 'page');
    
    //câu 2: Điền ô tìm kiếm bằng accessible name "Search docs".
    await page.getByRole('textbox', {name: 'Search doc'}).fill('Hello')

    //câu 3: Tương tác với ô nhập được gắn label qua aria-labelledby là "Mã nội bộ".
    await page.getByRole('textbox', {name: 'Mã nội bộ'}).fill('123')

    //câu 4: Click "Tải dữ liệu" và chờ live region thông báo "Đã tải 3 kết quả".
    const downloadDocBtn = page.getByRole('button', {name: 'Tải dữ liệu'})
    await downloadDocBtn.click()
    await expect(page.getByRole('status')).toHaveText('Đã tải 3 kết quả');

    //Bài 3: UI theo từng câu hỏi

    // //Câu 1-2: Tải comment và kiểm tra busy
    // await page.getByRole('button', {name: 'Load comments'}).click()
    // await expect(page.getByRole())




    //Câu 3-4: Đếm listitem và chọn B


   // Bài tập 1: E-commerce Product Grid - Multiple Selectors
    // Câu 1a: Tìm tất cả sản phẩm có discount badge
   await page.locator('product-card.discount-badge');
    //Câu 1b: Tìm nút "Add to Cart" của sản phẩm featured (có border vàng)
   await page.locator('product-card.featured.btn-primary.add-cart')
    //Câu 1c: Tìm tất cả sản phẩm out of stock
    await page.locator('price-section.stock-status.out-of-stock')

    //Bài tập 2: Dynamic Table - Advanced nth-child & Attribute Selectors
    //Câu 2a: Tìm tất cả rows có status "inactive"
    await page.locator('user-row.status-badge.inactive')
    //Câu 2b: Tìm nút "Delete" của user có ID "002"
    await page.locator('user-row[data-user-id="002"].btn-delete')
    //Câu 2c: Tìm row cuối cùng trong table body
    await page.locator('.user-table').last()

    
    //
    //Câu 3a: Tìm tất cả input fields có lỗi validation (class "invalid")
    await page.locator('.exercise-container.form-control.invalid')
    //Câu 3b: Tìm error message của field "email"
 })

test('Xpath selector', async ({ page }) => {
  await page.goto('https://demoapp-sable-gamma.vercel.app/');

  await page.getByRole('link', { name: 'Bài 2: Playwright Locators' }).click();

  await page.getByRole('button', { name: 'XPath Selector' }).click();

  await page.locator('//input[@name="email"]').fill('hoang@gmail.com');
//   await page.pause(); 
//button[contains(@data-variant, 'primary')]


//div[@class="product-card" and @data-category="electronics"]//h5[text()='iPhone 15']/following-sibling::button
 });    


// page.getByRole('button', {name:'🚀 Bắt đầu Test)
//span[contains(text(),'Bắt đầu Test')]

//Cấp 1: Mệnh lệnh của sếp

test('Cấp 1: Mệnh lệnh của sếp', async ({ page }) => {
  await page.goto(DEMO_URL);
  await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
  await page.locator("//span[contains(text(),'Bắt đầu Test')]").click();
  const slowButton1 = page.locator('#button-1');
  //Lỗi timeout 5000ms
  await slowButton1.click({ timeout: 5000 });
});
//Cấp 2: Giới hạn của phòng ban
test('Cấp 2: Giới hạn của phòng ban', async ({ page }) => {
  await page.goto(DEMO_URL);
  await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
  await page.locator("//span[contains(text(),'Bắt đầu Test')]").click();
  const slowButton2 = page.locator('#button-2');
  //Lỗi timeout 10000ms
  await slowButton2.click();
});


test.setTimeout(30000);
//Tc chạy pass khi set lại timeout toàn cục
test('Set lại timeout', async ({ page }) => {
  await page.goto(DEMO_URL);
  await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
  await page.locator("//span[contains(text(),'Bắt đầu Test')]").click();
  const startBtn = page.locator('#start-btn');
  const continueBtn = page.locator('#continue-btn');
  const expectedBtn = page.locator('#final-btn');
  //action timeout 10 s mà tiến trình có 8s thì thoải mái => 8s
  await startBtn.click();
  // 8s < 10s thỏa mãn  => 8s
  await continueBtn.click();
  // tổng phải chờ là 16s
  //báo lỗi timeout 15s
  await expectedBtn.click();
});




    