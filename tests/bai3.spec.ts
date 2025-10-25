// import { test, expect } from '@playwright/test';

// test('Vai tro ngam dinh', async ({ page }) => {
//     await page.goto('https://demoapp-sable-gamma.vercel.app/');
//     await page.getByRole('link', {name: 'Bài 2: Playwright Locators'}).click();
//     await page.getByRole('button', {name: 'CSS Selector'}).click();
//     // await page.getByRole('button', {name: 'Playwright getByRole'}).click();
//     await page.getByRole('button', {name: 'Bài tập'}).click();
    
    
//     //const linkLocator = page.getByRole('link', {name: 'Trang chủ'});
//     // console.log ('phan tu tren trang web', await linkLocator.count())
//     // await linkLocator.nth(0).hover
//     // await linkLocator.highlight()
    
//     // Cái này chưa làm được
//     // const saveButton = page.getByRole('button',{name: 'Lưu'})
//     // await saveButton.highlight
    
//     // Điền vào textbox
//     //await page.getByRole('textbox', { name: 'Tên: ' }).fill('NA')
    
//     //tick checkbox và điền thông tin
//     // await page.getByRole('checkbox', {name: 'Đồng ý điều khoản'}).check();
//     // await page.getByRole('radio', {name: 'Nữ'}).check();
//     // await page.getByRole('textbox', { name: 'Email: ' }).fill('abc@gmail.com');
//     // await page.getByRole('textbox', { name: 'Mật khẩu: ' }).fill('123');
//     // await page.getByRole('textbox', { name: 'Ghi chú: ' }).fill('làm xong rồi nè');
//     // await page.pause()

//     // //Câu 1
//     // const boldButton = page.getByRole('button', { name: 'Bold', pressed: true });
//     // await boldButton.click()
    

//     // //Câu 2:More options
//     // const moreButton = page.getByRole('button', { name: 'More options', expanded: true });
//     // await moreButton.click()
//     // const duplicatedButton = page.getByRole('menuitem', { name: 'Duplicate'})
//     // await expect(duplicatedButton).toBeVisible


//     //CSS selector
//     // await page.getByRole('button', {name: 'CSS Selector'}).click();
//     // await page.locator('#username-input').fill('NA');
//     // await page.locator('#password-input').fill('1234');
//     // await page.locator('#login-submit-btn').click();
//     // await page.pause()

//     //4. Attribute Selector - Tìm theo thuộc tính
//     // await page.locator('[data-action="submit"][data-variant="primary"]')
//     // await page.locator('button[data-action="submit"][data-variant="secondary"]')


//     //<div id="header" class="sticky visible" data-testid="main-header" style="background-color: rgb(248, 249, 250); padding: 10px; border: 2px solid rgb(0, 123, 255); border-radius: 4px; color: rgb(51, 51, 51);">Header (sticky + visible)</div>
//     // id => #header
//     // data-testid => [data-testid ='main-header']
//     // class="sticky visible" => .visible

    
//     //Bài tập CSS Selector
//     // câu 1a: Tìm tất cả sản phẩm có discount badge
//     const discountBadge = page.locator('.product-cart.discount-badge');
//     // await discountBadge.highlight()
//     // await page.pause()

//     //câu 1b: Tìm nút "Add to Cart" của sản phẩm featured (có border vàng)
//     const addToCart = page.locator('.product-card.featured.btn-primary.add-cart');
//     //stock-status out-of-stock
//     const outOfStock = page.locator('.product-grid[class*="out-of-stock"]')

//     //Bài 2:
//     //.user-row[data-user-id="002"] .btn-delete
//     //câu 2c: dùng Pseudo
//     const lastRow = page.locator('.user-row').nth(-1)
// });

// const DEMO_URL = https://demoapp-sable-gamma.vercel.app/
// test('Cấp 1: Webfirst assertion', async ({ page }) => {
//   await page.goto(DEMO_URL);
//   await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
//   await page.getByRole('button', { name: 'Web-First Assertions' }).click();
//   await page.getByText('Bắt đầu chờ').click();
//   const statusMessage = page.locator('#status-message');
//   //thằng PW sẽ cơ chế retry để đảm bảo là sau x giây locator sẽ đc expect nhưu mong muốn. nếu ko thì sẽ văng timeout
//   await expect(statusMessage).toHaveText('Tải dữ liệu thành công!', { timeout: 5000 });
// });
// test('Cấp 2: Webfirst assertion', async ({ page }) => {
//   await page.goto(DEMO_URL);
//   await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
//   await page.getByRole('button', { name: 'Web-First Assertions' }).click();
//   await page.getByText('Bắt đầu chờ').click();
//   const statusMessage = page.locator('#status-message');
//   //thằng PW sẽ cơ chế retry để đảm bảo là sau x giây locator sẽ đc expect nhưu mong muốn. nếu ko thì sẽ văng timeout
//   await expect(statusMessage).toHaveText('Tải dữ liệu thành công!');
// });
// test('Webfirst assertion passed', async ({ page }) => {
//   await page.goto(DEMO_URL);
//   await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
//   await page.getByRole('button', { name: 'Web-First Assertions' }).click();
//   await page.getByText('Bắt đầu chờ').click();
//   const statusMessage = page.locator('#status-message');
//   //thằng PW sẽ cơ chế retry để đảm bảo là sau x giây locator sẽ đc expect nhưu mong muốn. nếu ko thì sẽ văng timeout
//   await expect(statusMessage).toHaveText('Tải dữ liệu thành công!', { timeout: 8000 });
// });