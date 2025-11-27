import { test, expect } from '@playwright/test';

//B1: Break nhỏ UI ra xem có chức năng gì  -> 
//B2: xác định testcase bao gồm gì
//B3: xác định elements trên UI và test data
//B4: Xác định locators trên UI của các elements

//Dùng kỹ thuật này để lấy những elements nhảy nhanh trên UI
//setTimeout(() => {
//   debugger;
// }, 5000);
const LOGIN_URL = https://hrm.anhtester.com/erp/login
test.describe('HRML login page', () => {

    test('TC_LOGIN_01 - Đăng nhập thành công (Click)', async ({ page }) => {
        await page.goto(LOGIN_URL);
        await page.locator(input[@id='iusername'])
        //input[@id='iusername'] 
        //input[@id='ipassword']
        //button[@type='submit']
        //page.locator('#swal2-title')
    })
})
